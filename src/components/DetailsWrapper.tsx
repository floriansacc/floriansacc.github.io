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
    context?.setIsDetails(false);
    document.body.classList.remove("no-scroll");
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
        className={`fixed left-1/2 top-1/2 z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-32 py-24 pt-10 sm:px-0 sm:py-0 md:px-[5vw] md:py-[3vh]`}
      >
        {/* <div
        onClick={handleClickOutside}
        className="absolute left-0 top-0 z-40 h-screen w-screen backdrop-blur-sm"
      ></div> */}
        <div
          className={`${
            context?.isDetails
              ? "md:scale-100 lg:scale-100"
              : "md:scale-50 lg:scale-50"
          } relative z-[49] h-fit min-h-96 w-full rounded-md bg-maincolor-950 px-20 py-8 shadow-dim transition-all duration-300 sm:px-4 md:px-6`}
        >
          {children}
        </div>
      </div>
      <div
        className="fixed right-10 top-10 z-50 flex cursor-pointer select-none items-center gap-0 rounded-xl bg-white px-2 py-1 text-black transition-all sm:right-2 sm:top-2 sm:rounded-full sm:py-2 md:right-5 md:rounded-full md:py-2 md:hover:bg-maincolor-950 md:hover:text-white lg:hover:bg-maincolor-950 lg:hover:text-white"
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
