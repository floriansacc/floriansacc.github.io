import { FaRegCopy, FaPhoneSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex h-fit min-h-[50vh] w-full flex-col items-start justify-start bg-bgcolor p-4 pb-32 pt-20 sm:items-center sm:justify-start sm:px-2 sm:py-4 sm:pt-10 md:items-center">
      <div
        style={{ "--color": "white" } as React.CSSProperties}
        className="gradient-border-to-right h-[2px] w-[98%] bg-line"
      ></div>
      <div className="flex w-full flex-col items-center">
        <div className="mb-32 mt-10 self-start pl-10 text-[70px] font-bold text-white sm:mb-10 sm:text-[40px] md:mb-16">
          Contacts
        </div>
        <div className="text-4xl font-semibold italic sm:text-2xl md:text-3xl">
          구직 활동을 적극적으로 하고 있으니
        </div>
        <div className="mb-10 text-4xl font-semibold italic sm:text-2xl md:text-3xl">
          언제든 편하게 연락주시면 감사하겠습니다.
        </div>
        <div className="grid w-fit grid-flow-row grid-cols-[min-content_1fr] content-start items-center gap-4 rounded-md bg-maincolor-900 p-10 sm:w-full sm:p-4 md:text-xl lg:text-xl">
          <div className="w-12 justify-items-center">
            <img
              className="h-8 w-8 rounded-md bg-maincolor-100 p-1"
              src="/assets/svg/gmail_icon.svg"
            />
          </div>
          <div className="flex items-center gap-2 sm:flex-wrap sm:justify-start sm:gap-0 sm:break-all">
            <span id="email-flo">florian.sacchetti@gmail.com</span>
            <FaRegCopy
              className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
              data-tooltip-id="icons-tooltip"
              data-tooltip-content={"Copied to clipboard"}
              data-tooltip-delay-hide={500}
              onClick={() => {
                //   copyToClipBoard("email-flo");
              }}
            />
          </div>
          <div className="w-12 justify-items-center">
            <img className="h-8 w-8" src="/assets/images/kakao_logo.png" />
          </div>
          <div className="flex items-center gap-2 sm:flex-wrap sm:justify-start sm:gap-0 sm:break-all">
            <span id="kakao-flo">floriansacchetti</span>
            <FaRegCopy
              className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
              data-tooltip-id="icons-tooltip"
              data-tooltip-content={"Copied to clipboard"}
              data-tooltip-delay-hide={500}
              // onClick={() => copyToClipBoard("kakao-flo")}
            />
          </div>
          <div className="w-12 justify-items-center">
            <FaPhoneSquare className="h-8 w-8 justify-items-center" />
          </div>

          <div className="flex items-center gap-2 sm:flex-wrap sm:justify-start sm:gap-0 sm:break-all">
            <span id="phone-flo">010-8391-7997</span>
            <FaRegCopy
              className="h-8 w-8 rounded-xl p-1.5 transition-all hover:scale-105 hover:bg-white/25"
              data-tooltip-id="icons-tooltip"
              data-tooltip-content={"Copied to clipboard"}
              data-tooltip-delay-hide={500}
              // onClick={() => copyToClipBoard("kakao-flo")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
