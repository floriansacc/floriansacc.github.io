import { useState, useContext } from "react";
import { QueryContext } from "../App";
import { FaRegCopy, FaChevronUp } from "react-icons/fa";

export default function ContactIcons({
  showContact,
  setShowContact,
}: ContactIconsProps) {
  const context = useContext(QueryContext);
  const [hideIcon, setHideIcon] = useState<boolean>(false);

  const openKakaoTooltip = (): void => {
    if (showContact.kakao) {
      setShowContact((prev) => ({ ...prev, kakao: false }));
    } else {
      if (showContact.other) {
        setShowContact((prev) => ({ ...prev, other: false }));
      }
      setShowContact((prev) => ({ ...prev, kakao: true }));
    }
  };

  const openShowContact = (): void => {
    if (showContact.other) {
      setShowContact((prev) => ({ ...prev, other: false }));
    } else {
      if (showContact.kakao) {
        setShowContact((prev) => ({ ...prev, kakao: false }));
      }
      setShowContact((prev) => ({ ...prev, other: true }));
    }
  };

  return (
    <div className="no-scrollbar fixed bottom-5 right-10 flex flex-col gap-4 sm:right-3 sm:gap-6">
      <div
        className={`${hideIcon ? "sm:invisible sm:h-0 sm:opacity-0" : ""} relative transition-all sm:duration-300`}
      >
        <button
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-maincolor-500 font-bold transition-all duration-200 hover:animate-none sm:h-9 sm:w-9 sm:text-sm md:animate-[scaleUpDown_5s_infinite] md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)] lg:animate-[scaleUpDown_5s_infinite] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)]"
          onClick={() => openShowContact()}
        >
          <span className="rounded-full bg-maincolor-900 p-1.5">연락</span>
        </button>
        <div
          className={`${
            showContact.other
              ? "visible opacity-100"
              : "invisible translate-x-60 scale-0 opacity-0"
          } absolute right-24 top-1/2 flex h-fit min-h-fit w-fit -translate-y-1/2 flex-col gap-2 rounded-xl bg-gray-500 p-4 font-semibold text-white transition-all duration-300 sm:right-12 sm:w-[75vw] sm:gap-6`}
        >
          <div className="inline-flex h-fit items-center gap-2 sm:flex-col md:break-keep lg:break-keep">
            <span className="font-bold sm:whitespace-nowrap">이메일:</span>
            <div className="flex items-center gap-2 sm:flex-wrap sm:justify-end sm:gap-0 sm:break-all">
              <a href="mailto:floriansacchetti" target="_blank">
                <span id="email-flo">florian.sacchetti@gmail.com</span>
              </a>
              <FaRegCopy
                className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
                data-tooltip-id="icons-tooltip"
                data-tooltip-content={"Copied to clipboard"}
                data-tooltip-delay-hide={500}
                onClick={() => {
                  context?.copyToClipBoard("email-flo");
                }}
              />
            </div>
          </div>
          <div className="inline-flex h-fit items-center gap-2 sm:flex-col md:break-keep lg:break-keep">
            <span className="font-bold sm:whitespace-nowrap">휴대폰:</span>
            <div className="flex items-center gap-2 sm:flex-wrap sm:justify-end sm:gap-0 sm:break-all">
              <a href="tel:010-8391-7997">
                <span id="phone-flo">010-8391-7997</span>
              </a>
              <FaRegCopy
                className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
                data-tooltip-id="icons-tooltip"
                data-tooltip-content={"Copied to clipboard"}
                data-tooltip-delay-hide={500}
                onClick={() => context?.copyToClipBoard("kakao-flo")}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${hideIcon ? "sm:h-0" : ""} relative flex flex-col items-center gap-4 transition-[height] sm:gap-6 sm:overflow-y-hidden sm:overflow-x-visible sm:rounded-b-2xl sm:duration-300`}
      >
        <a
          href="http://qr.kakao.com/talk/9DzDCSUIxhosfgCLWffciyNPw6k-"
          target="_blank"
          className="h-12 w-12 sm:h-9 sm:w-9 lg:hidden"
        >
          <img
            alt="Kakao Florian Sacchetti"
            src="/assets/disallowed/images/kakao_logo.png"
            className="aspect-auto rounded-xl transition-all duration-200 md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_#FEE50080] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_#FEE50080]"
          />
        </a>
        <div className="relative h-12 w-12 sm:hidden sm:h-9 sm:w-9 md:hidden">
          <img
            alt="Kakao Florian Sacchetti"
            src="/assets/disallowed/images/kakao_logo.png"
            className="aspect-auto cursor-pointer rounded-xl transition-all duration-200 md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_#FEE50080] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_#FEE50080]"
            onClick={() => openKakaoTooltip()}
          />
          <div
            className={`${
              showContact.kakao
                ? "visible opacity-100"
                : "invisible translate-x-40 scale-0 opacity-0"
            } absolute right-24 top-1/2 flex h-fit min-h-fit w-fit -translate-y-1/2 flex-col gap-2 rounded-xl bg-gray-500 p-4 font-semibold text-white transition-all duration-300 sm:right-12 sm:w-[75vw] sm:gap-6`}
          >
            <span className="font-bold sm:whitespace-nowrap">카카오ID:</span>
            <div className="flex items-center gap-2 sm:flex-wrap sm:justify-end sm:gap-0 sm:break-all">
              <span id="kakao-flo">floriansacchetti</span>
              <FaRegCopy
                className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
                data-tooltip-id="icons-tooltip"
                data-tooltip-content={"Copied to clipboard"}
                data-tooltip-delay-hide={500}
                onClick={() => context?.copyToClipBoard("kakao-flo")}
              />
            </div>
            <img
              src="/assets/allowed/images/kakao_qr_code.jpg"
              className="h-32 w-32 self-center rounded-md"
            />
          </div>
        </div>
        <a
          href="https://github.com/floriansacc"
          target="_blank"
          className="h-12 w-12 sm:h-9 sm:w-9"
        >
          <img
            alt="GitHub Florian Sacchetti"
            src="/assets/disallowed/svg/github-mark-white.svg"
            className="aspect-auto rounded-full transition-all duration-200 md:hover:scale-125 md:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)] lg:hover:scale-125 lg:hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)]"
          />
        </a>
        <div className="mt-2 h-28 w-[2px] bg-gradient-to-b from-white from-40% sm:hidden"></div>
      </div>

      <FaChevronUp
        className={`${hideIcon ? "rotate-180" : ""} h-9 w-9 p-2 transition-transform md:hidden lg:hidden`}
        onClick={() => {
          setHideIcon(!hideIcon);
          setShowContact((prev) => ({ ...prev, other: false }));
        }}
      />
    </div>
  );
}

interface ContactIconsProps {
  showContact: {
    kakao: boolean;
    other: boolean;
  };
  setShowContact: React.Dispatch<
    React.SetStateAction<{
      kakao: boolean;
      other: boolean;
    }>
  >;
}
