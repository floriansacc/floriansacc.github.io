export default function ContactIcons(props: ContactIconsProps) {
  return (
    <div className="absolute bottom-5 right-10 flex flex-col items-center gap-4">
      <div className="relative inline-flex">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 font-bold transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)]"
          onClick={() => props.setShowContact(!props.showContact)}
        >
          <span>연락</span>
        </button>
        <div
          className={`${
            props.showContact
              ? "visible opacity-100"
              : "invisible translate-x-40 scale-0 opacity-0"
          } absolute right-24 top-1/2 flex h-40 w-fit -translate-y-1/2 flex-col gap-2 rounded-xl bg-gray-500 p-2 transition-all duration-300`}
        >
          {/* //TODO copy to clipboard */}
          <span>이메일: florian.sacchetti@gmail.com</span>
          <span>kakao id: floriansacchetti</span>
        </div>
      </div>

      <a
        href="http://qr.kakao.com/talk/9DzDCSUIxhosfgCLWffciyNPw6k-"
        target="_blank"
        className="h-12 w-12"
      >
        <img
          alt="Kakao Florian Sacchetti"
          src="/assets/images/kakao_logo.png"
          className="aspect-auto rounded-xl transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_0.5em_#FEE50080]"
        />
      </a>
      <a
        href="https://github.com/floriansacc"
        target="_blank"
        className="h-12 w-12"
      >
        <img
          alt="GitHub Florian Sacchetti"
          src="/assets/svg/github-mark-white.svg"
          className="aspect-auto rounded-full transition-all duration-200 hover:scale-125 hover:drop-shadow-[0_0_0.5em_rgb(255,255,255,0.5)]"
        />
      </a>
      <div className="mt-2 h-40 w-[2px] bg-gradient-to-b from-white from-40%"></div>
    </div>
  );
}

interface ContactIconsProps {
  showContact: boolean;
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>; //  (showContact: boolean) => void;
}
