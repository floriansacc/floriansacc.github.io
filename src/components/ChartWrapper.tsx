export default function ChartWrapper({ children }: ChartWrapperProps) {
  return (
    <div className="relative flex select-none flex-col items-start justify-start rounded-md bg-maincolor-700 duration-1000 sm:h-fit sm:min-w-fit sm:items-start sm:overflow-hidden sm:p-1 md:h-fit md:max-w-full md:snap-start md:p-2 lg:h-fit lg:w-[45%] lg:max-w-full lg:p-2">
      {children}
    </div>
  );
}

interface ChartWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
