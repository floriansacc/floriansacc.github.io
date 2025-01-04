import { useState, useEffect, Fragment } from "react";

const menuItems: string[] = ["About me", "Career", "Project", "Education"];

export default function TopBanner() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlNavbar = (): void => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`${isOpen ? "" : "-translate-y-16"} sticky top-0 flex h-fit w-screen items-center bg-gray-800 transition-transform`}
    >
      <div className="flex w-full items-center justify-start gap-6 px-4 py-4 pl-32 text-xl font-semibold text-white">
        {menuItems.map((e, i) => (
          <Fragment key={`menu-item-${i}`}>
            {i !== 0 && <div className="h-6 w-[0.5px] bg-line/50"></div>}
            <p className="cursor-pointer rounded-full transition-all md:hover:scale-110 md:hover:text-white/90 lg:hover:scale-110 lg:hover:text-white/90">
              {e}
            </p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
