import { createContext, useState } from "react";
import Screen01AboutMe from "./pages/Screen01AboutMe";
import ContactIcons from "./components/ContactIcons";
import TopBanner from "./components/TopBanner";
import Screen02Career from "./pages/Screen02Career";

export const QueryContext = createContext<ContextEntry | null>(null);

export default function App() {
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <QueryContext.Provider value={{}}>
      <div
        className="relative flex min-h-screen w-screen flex-col"
        onClick={showContact ? () => setShowContact(false) : () => {}}
      >
        <TopBanner />
        <Screen01AboutMe />
        <Screen02Career />
      </div>
      <ContactIcons showContact={showContact} setShowContact={setShowContact} />
    </QueryContext.Provider>
  );
}

interface ContextEntry {
  // test: string;
}
