import { MutableRefObject } from "react";

export default function Screen04Education({
  screenRef,
  ...props
}: Screen04Props) {
  return (
    <div
      ref={screenRef}
      {...props}
      className="flex h-fit min-h-screen w-full flex-col items-start justify-start bg-bgcolor p-4 sm:justify-start sm:px-2 sm:py-4 sm:pt-10 md:items-center"
    >
      <div
        style={{ "--color": "white" } as React.CSSProperties}
        className="gradient-border-to-right h-[2px] w-[98%] bg-line"
      ></div>
      <div className="mb-20 mt-10 self-start pl-10 text-[70px] font-bold sm:text-[40px]">
        Education
      </div>
      <div></div>
    </div>
  );
}

interface Screen04Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}
