import { useState, useEffect, Fragment } from "react";

const menuItems: string[] = ["About me", "Career", "Project", "Education"];

export default function TopBanner({
  activeSection,
  scrollPos,
  goToSection,
}: TopBannerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [thresholdY, setThresholdY] = useState<number>(0);

  const controlNavbar = (): void => {
    if (window.scrollY > lastScrollY) {
      if (window.scrollY > thresholdY) {
        if (isOpen) {
          setIsOpen(false);
        }
        // Set new threshold to current scrollY + 100
        setThresholdY(window.scrollY + 100);
      }
    } else {
      if (!isOpen) {
        setIsOpen(true);
      }
      // Reset threshold to current scrollY + 100
      setThresholdY(window.scrollY + 100);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    controlNavbar();
  }, [scrollPos]);

  return (
    <div
      className={`${isOpen ? "" : "-translate-y-16"} sticky top-0 z-50 flex h-fit w-full items-center bg-gray-800 transition-transform`}
    >
      <div className="flex w-full flex-wrap items-center justify-start gap-6 pl-32 text-xl font-semibold text-white sm:justify-around sm:gap-2 sm:pl-2 sm:text-base md:justify-around md:pl-2">
        {menuItems.map((e, i) => (
          <Fragment key={`menu-item-${i}`}>
            {i !== 0 && (
              <div className="h-6 w-[0.5px] bg-line/50 sm:hidden"></div>
            )}
            <p
              className={`${activeSection === i ? "text-blue-200" : ""} cursor-pointer rounded-full px-4 py-4 transition-all sm:px-2 md:px-2 md:hover:scale-110 md:hover:text-white/90 lg:hover:scale-110 lg:hover:text-white/90`}
              onClick={() => goToSection(i)}
            >
              {e}
            </p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

interface TopBannerProps {
  activeSection: number;
  scrollPos: number;
  goToSection: (index: number) => void;
}
