export default function FloatingComponent({
  imageBox1,
  imageBox2,
}: FloatingComponentProps) {
  const createElem = (index: number): JSX.Element => {
    return (
      <div
        className={`${
          index === 0
            ? "animate-[wave-1_25s_linear_infinite]"
            : "animate-[wave-2_25s_linear_infinite]"
        } relative flex h-fit w-max flex-row gap-5 transition-[transform,opacity] duration-[1000ms] sm:w-full`}
      >
        {imageBox1.map((e, i) => (
          <div
            className={`${i === 1 ? "" : "mt-12"} w-[100px]`}
            key={`box-1${e}-${i}`}
          >
            <img
              style={{
                animationDelay: `${300 + 300 * i}ms`,
              }}
              className={`relative z-10 aspect-auto animate-[shake_3s_ease-in-out_infinite] rounded-2xl object-contain`}
              src={e}
            />
          </div>
        ))}
      </div>
    );
  };

  const createElem2 = (index: number): JSX.Element => {
    return (
      <div
        className={`${
          index === 0
            ? "animate-[wave-1_25s_linear_infinite]"
            : "animate-[wave-2_25s_linear_infinite]"
        } relative flex h-fit w-max flex-row gap-5 transition-[transform,opacity] duration-[1000ms] sm:w-full`}
      >
        {imageBox2.map((e, i) => (
          <div
            className={`${i === 1 ? "" : "mt-24"} w-[100px]`}
            key={`box-2${e}-${i}`}
          >
            <img
              style={{
                animationDelay: `${(imageBox2.length + 1) * 300 + 300 * i}ms`,
              }}
              className={`relative z-10 aspect-auto animate-[shake_3s_ease-in-out_infinite] rounded-2xl object-contain`}
              src={e}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative z-20 flex w-full flex-nowrap items-end justify-end gap-5 py-4 sm:my-6 sm:h-fit sm:w-full sm:items-center sm:justify-center">
      <div key="elem-1-desktop" className="flex gap-5">
        {createElem(0)}
        {createElem2(0)}
      </div>
      <div key="elem-2-desktop" className="absolute flex gap-5">
        {createElem(1)}
        {createElem2(1)}
      </div>
    </div>
  );
}

interface FloatingComponentProps {
  imageBox1: string[];
  imageBox2: string[];
}
