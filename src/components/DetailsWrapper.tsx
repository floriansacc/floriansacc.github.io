import { useContext, useEffect } from "react";
import { QueryContext } from "../App";
import { useNavigate } from "react-router";
import { IoIosClose } from "react-icons/io";

export default function DetailsWrapper({ children }: DetailsWrapperProps) {
  const context = useContext(QueryContext);

  const navigate = useNavigate();

  useEffect(() => {
    context?.setIsDetails(true);
    document.body.classList.add("no-scroll");
  }, []);

  const closePage = (): void => {
    document.body.classList.remove("no-scroll");
    context?.setIsDetails(false);
    navigate("/");
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePage();
    }
  };

  return (
    <>
      <div
        onClick={handleClickOutside}
        className={`fixed top-1/2 left-1/2 z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-32 py-24 pt-10 sm:px-0 sm:py-0 md:px-[5vw] md:py-[3vh]`}
      >
        {/* <div
        onClick={handleClickOutside}
        className="absolute left-0 top-0 z-40 h-screen w-screen backdrop-blur-xs"
      ></div> */}
        <div
          className={`bg-maincolor-950 shadow-dim relative z-49 h-fit min-h-96 w-full rounded-md px-20 py-8 transition-all duration-300 sm:px-4 md:px-6`}
        >
          {children}
        </div>
      </div>
      <div
        className="md:hover:bg-maincolor-950 lg:hover:bg-maincolor-950 fixed top-10 right-10 z-50 flex cursor-pointer items-center gap-0 rounded-xl bg-white px-2 py-1 text-black transition-all select-none sm:top-2 sm:right-2 sm:rounded-full sm:py-2 md:right-5 md:rounded-full md:py-2 md:hover:text-white lg:hover:text-white"
        onClick={closePage}
      >
        <span className="sm:hidden md:hidden">Close</span>
        <IoIosClose className="h-8 w-8" />
      </div>
    </>
  );
}

interface DetailsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
