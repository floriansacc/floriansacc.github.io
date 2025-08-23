import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, Draggable } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Draggable);

export default function PhoneWrapper({ className }: PhoneWrapperProps) {
  const [isTouching, setIsTouching] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const wheelEventEndTimeout = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const handleOnTouchEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsTouching(false);
      timeoutRef.current = null;
    }, 1500);
  };

  useEffect(() => {
    if (isTouching) return;

    const handleStopOnScroll = () => {
      setIsTouching(true);
      if (wheelEventEndTimeout.current) {
        clearTimeout(wheelEventEndTimeout.current);
      }
      wheelEventEndTimeout.current = setTimeout(() => {
        setIsTouching(false);
      }, 100);
    };

    document.addEventListener("wheel", handleStopOnScroll);

    const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });

    const divHeight = ref.current?.clientHeight ?? 0;

    if ((ref.current?.scrollTop ?? 0) < divHeight / 2) {
      tl.to(ref.current, {
        duration: 10,
        scrollTo: { y: divHeight },
        ease: "linear",
      });
    } else {
      tl.to(ref.current, {
        duration: 10,
        scrollTo: { y: 0 },
        ease: "linear",
      });
    }

    tl.play();

    return () => {
      document.removeEventListener("wheel", handleStopOnScroll);

      tl.kill();
    };
  }, [isTouching]);

  return (
    <div className={`${className} no-scrollbar relative w-[300px]`}>
      <img
        className="pointer-events-none sticky top-0 z-[21] w-full select-none"
        src="/assets/disallowed/images/iphone_16_pro_frame.png"
      />

      <div className="absolute top-0 h-[calc(100%)] p-2.5">
        <div
          ref={ref}
          id="long-image-1"
          className="no-scrollbar relative top-0 z-20 h-full w-full overflow-scroll bg-red-100"
          style={{ borderRadius: "clamp(1px, 10vw, 50px)" }}
        >
          <img
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={handleOnTouchEnd}
            src="/assets/disallowed/images/locaplace_long_screen.png"
          />
        </div>
      </div>
    </div>
  );
}

interface PhoneWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
