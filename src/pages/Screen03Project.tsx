import { MutableRefObject } from "react";
import CardComponent from "../components/CardComponent";

export default function Screen03Project({
  screenRef,
  ...props
}: Screen03Props) {
  return (
    <div ref={screenRef} {...props} className="">
      <div className="flex h-fit min-h-screen w-full flex-col items-center justify-start bg-bgcolor p-4 sm:justify-start sm:pt-10">
        <div className="gradient-border-to-right h-[2px] w-[98%] bg-line"></div>
        <div className="self-start pl-10 text-[70px] font-bold sm:text-[40px]">
          Projects
        </div>
        <CardComponent className="flex flex-col items-start">
          <span className="ml-4 text-[18px] sm:ml-0 sm:self-center">
            2024-03 ~ 2024.01
          </span>
          <div className="flex items-center gap-6">
            <span className="font-semibol text-3xl">더하나로</span>
            <span className="rounded-md bg-maincolor-950 p-1.5 text-sm">
              모바일 앱
            </span>
          </div>
        </CardComponent>
      </div>
    </div>
  );
}

interface Screen03Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}
