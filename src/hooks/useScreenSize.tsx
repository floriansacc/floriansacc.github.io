import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
      setIsTablet(window.innerWidth <= 1250 && window.innerWidth > 649);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet };
}
