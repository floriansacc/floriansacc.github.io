import { createContext, useState } from "react";
import Screen01AboutMe from "./pages/Screen01AboutMe";
import ContactIcons from "./components/ContactIcons";

export const QueryContext = createContext<ContextEntry | null>(null);

export default function App() {
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <QueryContext.Provider value={{}}>
      <div
        className="relative flex h-screen w-screen"
        onClick={showContact ? () => setShowContact(false) : () => {}}
      >
        <Screen01AboutMe />
      </div>
      <ContactIcons showContact={showContact} setShowContact={setShowContact} />
    </QueryContext.Provider>
  );
}

interface ContextEntry {
  // test: string;
}
