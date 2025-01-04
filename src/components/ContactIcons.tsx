import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { FaRegCopy, FaChevronUp } from "react-icons/fa";

export default function ContactIcons({
  showContact,
  setShowContact,
}: ContactIconsProps) {
  const [hideIcon, setHideIcon] = useState<boolean>(false);

  const copyToClipBoard = (id: string): void => {
    const content: string = document.getElementById(id)?.textContent ?? "";
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="no-scrollbar absolute bottom-5 right-10 flex flex-col gap-4 sm:right-3 sm:gap-6">
      <div
        className={`${hideIcon ? "invisible opacity-0 sm:h-0" : ""} relative transition-all`}
      >
        <button
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 font-bold transition-all duration-200 sm:h-9 sm:w-9 sm:text-sm md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)]"
          onClick={() => setShowContact(!showContact)}
        >
          <span>연락</span>
        </button>
        <div
          className={`${
            showContact
              ? "visible opacity-100"
              : "invisible translate-x-60 scale-0 opacity-0"
          } absolute right-24 top-1/2 flex h-40 min-h-fit w-fit -translate-y-1/2 flex-col gap-2 rounded-xl bg-gray-500 p-4 font-semibold text-white transition-all duration-300 sm:right-12 sm:w-[75vw] sm:gap-6`}
        >
          <div className="inline-flex h-fit items-center gap-2 sm:flex-col md:break-keep lg:break-keep">
            <span className="font-bold sm:whitespace-nowrap">이메일:</span>
            <div className="flex items-center gap-2 sm:flex-wrap sm:justify-end sm:gap-0 sm:break-all">
              <span id="email-flo">florian.sacchetti@gmail.com</span>
              <FaRegCopy
                className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
                data-tooltip-id="icons-tooltip"
                data-tooltip-content={"Copied to clipboard"}
                data-tooltip-delay-hide={500}
                onClick={() => {
                  copyToClipBoard("email-flo");
                }}
              />
            </div>
          </div>
          <div className="inline-flex h-fit items-center gap-2 sm:flex-col md:break-keep lg:break-keep">
            <span className="font-bold sm:whitespace-nowrap">kakao id:</span>
            <div className="flex items-center gap-2 sm:flex-wrap sm:justify-end sm:gap-0 sm:break-all">
              <span id="kakao-flo">floriansacchetti</span>
              <FaRegCopy
                className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
                data-tooltip-id="icons-tooltip"
                data-tooltip-content={"Copied to clipboard"}
                data-tooltip-delay-hide={500}
                onClick={() => copyToClipBoard("kakao-flo")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${hideIcon ? "sm:h-0" : ""} relative flex flex-col items-center gap-4 transition-[height] sm:gap-6 sm:overflow-y-hidden sm:overflow-x-visible sm:rounded-b-2xl`}
      >
        <a
          href="http://qr.kakao.com/talk/9DzDCSUIxhosfgCLWffciyNPw6k-"
          target="_blank"
          className="h-12 w-12 sm:h-9 sm:w-9"
        >
          <img
            alt="Kakao Florian Sacchetti"
            src="/assets/images/kakao_logo.png"
            className="aspect-auto rounded-xl transition-all duration-200 md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_#FEE50080] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_#FEE50080]"
          />
        </a>
        <a
          href="https://github.com/floriansacc"
          target="_blank"
          className="h-12 w-12 sm:h-9 sm:w-9"
        >
          <img
            alt="GitHub Florian Sacchetti"
            src="/assets/svg/github-mark-white.svg"
            className="aspect-auto rounded-full transition-all duration-200 md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)]"
          />
        </a>
        <div className="mt-2 h-40 w-[2px] bg-gradient-to-b from-white from-40% sm:hidden"></div>

        <Tooltip
          id="icons-tooltip"
          openOnClick={true}
          closeEvents={{ mouseleave: true }}
        />
      </div>
      <FaChevronUp
        className={`${hideIcon ? "rotate-180" : ""} h-9 w-9 p-2 transition-transform md:hidden lg:hidden`}
        onClick={() => {
          setHideIcon(!hideIcon);
          setShowContact(false);
        }}
      />
    </div>
  );
}

interface ContactIconsProps {
  showContact: boolean;
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>; //  (showContact: boolean) => void;
}
