import { MutableRefObject } from "react";

export default function Screen04Education({
  screenRef,
  ...props
}: Screen04Props) {
  return (
    <div ref={screenRef} {...props} className="">
      <div></div>
    </div>
  );
}

interface Screen04Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}
