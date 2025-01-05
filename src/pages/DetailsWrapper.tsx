import { useContext, useEffect } from "react";
import { QueryContext } from "../App";
import { useNavigate } from "react-router";

export default function DetailsWrapper({ children }: DetailsWrapperProps) {
  const context = useContext(QueryContext);

  const navigate = useNavigate();

  useEffect(() => {
    context?.setIsDetails(true);
    document.body.classList.add("no-scroll");
  }, []);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      context?.setIsDetails(false);
      document.body.classList.remove("no-scroll");
      // setTimeout(() => {
      navigate(-1);
      // }, 500);
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed left-1/2 top-1/2 z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-32 py-24 pt-10`}
    >
      {/* <div
        onClick={handleClickOutside}
        className="absolute left-0 top-0 z-40 h-screen w-screen backdrop-blur-sm"
      ></div> */}
      <div
        className={`${
          context?.isDetails ? "scale-100" : "scale-50"
        } relative z-50 h-fit min-h-96 w-full bg-maincolor-900 px-20 py-8 shadow-dim transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
}

interface DetailsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
