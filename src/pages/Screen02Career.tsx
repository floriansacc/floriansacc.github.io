import { MutableRefObject } from "react";

export default function Screen02Career({ screenRef, ...props }: Screen02Props) {
  return (
    <div ref={screenRef} className="flex h-screen w-full bg-bgcolor" {...props}>
      <div>Career</div>
    </div>
  );
}

interface Screen02Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}
