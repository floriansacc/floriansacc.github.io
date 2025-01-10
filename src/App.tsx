import {
  useState,
  useEffect,
  useRef,
  createContext,
  MutableRefObject,
} from "react";
import { Outlet } from "react-router";
import { Tooltip } from "react-tooltip";
import TopBanner from "./components/TopBanner";
import Screen01AboutMe from "./pages/Screen01AboutMe";
import Screen02Career from "./pages/Screen02Career";
import Screen03Project from "./pages/Screen03Project";
import Screen04Education from "./pages/Screen04Education";
import ContactIcons from "./components/ContactIcons";
import Footer from "./pages/Footer";
import useScrollTracking from "./hooks/useScrollTracking";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

export const QueryContext = createContext<ContextEntry | null>(null);

export default function App() {
  const [showContact, setShowContact] = useState<{
    kakao: boolean;
    other: boolean;
  }>({ kakao: false, other: false });

  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  const [isDetails, setIsDetails] = useState<boolean>(false);

  const screenRefs: MutableRefObject<HTMLDivElement | null>[] = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const { scrollPos, activeSection } = useScrollTracking({ screenRefs });

  const closeTooltips = (): void => {
    if (showContact) {
      setShowContact((prev) => ({ ...prev, other: false }));
    }
    if (showContact.kakao) {
      setShowContact((prev) => ({ ...prev, kakao: false }));
    }
  };

  const goToSection = (index: number): void => {
    if (screenRefs?.[index] == null || screenRefs?.[index].current == null)
      return;
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 900);
    screenRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipBoard = (id: string): void => {
    const content: string = document.getElementById(id)?.textContent ?? "";
    navigator.clipboard.writeText(content);
  };

  useEffect(() => {
    const handlePopState = (): void => {
      if (!document.body.classList.contains("no-scroll")) return;
      if (!isDetails) {
        document.body.classList.remove("no-scroll");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <QueryContext.Provider
      value={{
        isDetails,
        activeSection,
        setIsDetails,
        copyToClipBoard,
      }}
    >
      <div
        className="crelative flex min-h-screen w-full flex-col"
        onClick={() => closeTooltips()}
      >
        <TopBanner
          activeSection={activeSection}
          scrollPos={scrollPos}
          isNavigating={isNavigating}
          goToSection={goToSection}
        />
        <Screen01AboutMe screenRef={screenRefs[0]} />
        <Screen02Career screenRef={screenRefs[1]} />
        <Screen03Project screenRef={screenRefs[2]} scrollPos={scrollPos} />
        <Screen04Education screenRef={screenRefs[3]} />
        <Footer />
      </div>
      <ContactIcons showContact={showContact} setShowContact={setShowContact} />
      <Outlet />
      <Tooltip
        id="icons-tooltip"
        openOnClick={true}
        closeEvents={{ mouseleave: true }}
      />
    </QueryContext.Provider>
  );
}

export interface ContextEntry {
  isDetails: boolean;
  activeSection: number;
  copyToClipBoard: (id: string) => void;
  setIsDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
