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

export const QueryContext = createContext<ContextEntry | null>(null);

export default function App() {
  const [showContact, setShowContact] = useState<{
    kakao: boolean;
    other: boolean;
  }>({ kakao: false, other: false });

  const [scrollPos, setScrollPos] = useState<{
    scrollPosY: number;
    activeSection: number;
  }>({ scrollPosY: 0, activeSection: 0 });
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const screenRefs: MutableRefObject<HTMLDivElement | null>[] = [
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
    screenRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const getScrollPos = (): void => {
    screenRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 200 && rect.top > -rect.height + 200) {
          setScrollPos({ scrollPosY: window.scrollY, activeSection: index });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPos);

    return () => window.removeEventListener("scroll", getScrollPos);
  }, []);

  return (
    <QueryContext.Provider value={{ isDetails, setIsDetails }}>
      <div
        className="crelative flex min-h-screen w-full flex-col"
        onClick={() => closeTooltips()}
      >
        <TopBanner
          activeSection={scrollPos.activeSection}
          goToSection={goToSection}
          scrollPos={scrollPos.scrollPosY}
        />
        <Screen01AboutMe screenRef={screenRefs[0]} />
        <Screen02Career screenRef={screenRefs[1]} />
        <Screen03Project screenRef={screenRefs[2]} />
      </div>
      <ContactIcons showContact={showContact} setShowContact={setShowContact} />
      <Outlet />
    </QueryContext.Provider>
  );
}

export interface ContextEntry {
  isDetails: boolean;
  setIsDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
