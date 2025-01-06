import {
  useState,
  useEffect,
  useRef,
  createContext,
  MutableRefObject,
} from "react";
import Screen01AboutMe from "./pages/Screen01AboutMe";
import ContactIcons from "./components/ContactIcons";
import TopBanner from "./components/TopBanner";
import Screen02Career from "./pages/Screen02Career";
import Screen03Project from "./pages/Screen03Project";
import { Outlet } from "react-router";
import Screen04Education from "./pages/Screen04Education";
import Footer from "./pages/Footer";
import { Tooltip } from "react-tooltip";

export const QueryContext = createContext<ContextEntry | null>(null);

export default function App() {
  const [showContact, setShowContact] = useState<{
    kakao: boolean;
    other: boolean;
  }>({ kakao: false, other: false });

  const [scrollPos, setScrollPos] = useState<ScrollModel>({
    scrollPosY: 0,
    activeSection: 0,
    isNavigating: false,
  });
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const screenRefs: MutableRefObject<HTMLDivElement | null>[] = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

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
    setScrollPos((prev) => ({
      ...prev,
      isNavigating: true,
    })),
      setTimeout(
        () =>
          setScrollPos((prev) => ({
            ...prev,
            isNavigating: false,
          })),
        900,
      );
    screenRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const getScrollPos = (): void => {
    screenRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 200 && rect.top > -rect.height + 200) {
          setScrollPos((prev) => ({
            ...prev,
            scrollPosY: window.scrollY,
            activeSection: index,
          }));
        }
      }
    });
  };

  const copyToClipBoard = (id: string): void => {
    const content: string = document.getElementById(id)?.textContent ?? "";
    navigator.clipboard.writeText(content);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPos);

    return () => window.removeEventListener("scroll", getScrollPos);
  }, []);

  return (
    <QueryContext.Provider value={{ isDetails, setIsDetails, copyToClipBoard }}>
      <div
        className="crelative flex min-h-screen w-full flex-col"
        onClick={() => closeTooltips()}
      >
        <TopBanner goToSection={goToSection} scrollPos={scrollPos} />
        <Screen01AboutMe screenRef={screenRefs[0]} />
        <Screen02Career screenRef={screenRefs[1]} />
        <Screen03Project screenRef={screenRefs[2]} />
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
  copyToClipBoard: (id: string) => void;
  setIsDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ScrollModel {
  scrollPosY: number;
  activeSection: number;
  isNavigating: boolean;
}
