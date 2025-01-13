import { useState, MutableRefObject, useEffect } from "react";

export default function useScrollTracking({ screenRefs }: ScrollTrackingProps) {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollPos, setScrollPos] = useState<number>(0);

  const getScrollPos = (): void => {
    screenRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 250 && rect.top > -rect.height + 250) {
          setScrollPos(window.scrollY);
          setActiveSection(index);
        }
      }
    });
  };

  useEffect(() => {
    getScrollPos();
    window.addEventListener("scroll", getScrollPos);

    return () => window.removeEventListener("scroll", getScrollPos);
  }, []);

  return { activeSection, scrollPos };
}

interface ScrollTrackingProps {
  screenRefs: MutableRefObject<HTMLDivElement | null>[];
}

export interface ScrollModel {
  scrollPosY: number;
  isNavigating: boolean;
}
