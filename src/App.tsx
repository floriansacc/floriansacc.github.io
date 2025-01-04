import { createContext, MutableRefObject, useRef, useState } from "react";
import Screen01AboutMe from "./pages/Screen01AboutMe";
import ContactIcons from "./components/ContactIcons";
import TopBanner from "./components/TopBanner";
import Screen02Career from "./pages/Screen02Career";

export const QueryContext = createContext<ContextEntry | null>(null);

export default function App() {
  const [showContact, setShowContact] = useState<boolean>(false);
  const [showKakao, setShowKakao] = useState<boolean>(false);

  const screenRefs: MutableRefObject<HTMLDivElement | null>[] = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const closeTooltips = (): void => {
    if (showContact) {
      setShowContact(false);
    }
    if (showKakao) {
      setShowKakao(false);
    }
  };

  const goToSection = (index: number): void => {
    if (screenRefs?.[index] == null || screenRefs?.[index].current == null)
      return;
    screenRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <QueryContext.Provider value={{}}>
      <div
        className="relative flex min-h-screen w-full flex-col"
        onClick={() => closeTooltips()}
      >
        <TopBanner goToSection={goToSection} />
        <Screen01AboutMe screenRef={screenRefs[0]} />
        <Screen02Career screenRef={screenRefs[1]} />
      </div>
      <ContactIcons
        showContact={showContact}
        setShowContact={setShowContact}
        showKakao={showKakao}
        setShowKakao={setShowKakao}
      />
    </QueryContext.Provider>
  );
}

interface ContextEntry {
  // test: string;
}
