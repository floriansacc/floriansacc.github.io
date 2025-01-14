import { useState, useEffect } from "react";
import { BsFiletypeCsv, BsArrowsFullscreen, BsImage } from "react-icons/bs";
import ChartPie from "./Charts/ChartPie";
import ChartBar from "./Charts/ChartBar";
import ChartBarStack from "./Charts/ChartBarStack";
import ChartLine from "./Charts/ChartLine";
import {
  ChartType,
  DataBarModel,
  DataBarStackModel,
  DataLineModel,
} from "../models/global-models";

export default function ChartWrapper<T extends ChartType>({
  divId,
  chartType,
  entryData,
  hasFullscreen = true,
  hasCsv = true,
  hasImageDl = true,
}: ChartWrapperProps<T>) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const chart = (): JSX.Element | undefined => {
    switch (chartType) {
      case ChartType.pie:
        return (
          <ChartPie
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData}
            graphTitle="Pie Example"
          />
        );

      case ChartType.bar:
        return (
          <ChartBar
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData}
            graphTitle="Bar Example"
          />
        );

      case ChartType.barStack:
        return (
          <ChartBarStack
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData}
            graphTitle="BarStack Example"
          />
        );

      case ChartType.line:
        return (
          <ChartLine
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData}
            graphTitle="Line Example"
          />
        );
    }
  };

  const getFullscreen = (id: string): void => {
    const div: HTMLElement | null = document.getElementById(
      `graph-to-fs-${id}`,
    );
    const originalDiv: HTMLElement | null = div;

    if (div === null || originalDiv === null) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        div.style.justifyContent = originalDiv.style.justifyContent;
        setIsFullScreen(false);
      });
    } else {
      div.requestFullscreen();
      setIsFullScreen(true);
      div.style.justifyContent = "center";
    }
  };

  const exitHhandler = (): void => {
    if (!document.fullscreenElement) {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", exitHhandler);
    return () => document.removeEventListener("fullscreenchange", exitHhandler);
  }, []);

  return (
    <div
      id={`graph-to-fs-${divId}`}
      className={`${
        isFullScreen
          ? "max-h-full max-w-full"
          : "h-fit sm:h-fit sm:min-w-fit md:h-fit md:max-w-full lg:h-fit lg:w-[45%] lg:max-w-full"
      } relative flex select-none flex-col rounded-md bg-maincolor-700 duration-700 sm:items-start sm:overflow-hidden sm:p-1 md:snap-start md:p-2 lg:p-2`}
    >
      <div
        className={`${isFullScreen ? "hidden" : ""} relative mb-2 flex h-10 w-full justify-end gap-2`}
      >
        <button
          className={`${hasCsv ? "" : "pointer-events-none opacity-25"} border-graphorange text-graphorange hover:bg-graphorange box-border rounded-md border border-solid bg-maincolor-800/75 px-2 transition-colors hover:border-maincolor-900 hover:text-maincolor-900`}
        >
          <BsFiletypeCsv className="m-0 p-0 text-xl" />
        </button>
        <button
          className={`${hasImageDl ? "" : "pointer-events-none opacity-25"} border-graphorange text-graphorange hover:bg-graphorange box-border rounded-md border border-solid bg-maincolor-800/75 px-2 transition-colors hover:border-maincolor-900 hover:text-maincolor-900`}
        >
          <BsImage className="m-0 p-0 text-xl" />
        </button>
        <button
          className={`${hasFullscreen ? "" : "pointer-events-none opacity-25"} border-graphorange text-graphorange hover:bg-graphorange box-border rounded-md border border-solid bg-maincolor-800/75 px-2 transition-colors hover:border-maincolor-900 hover:text-maincolor-900 sm:hidden`}
          onClick={() => getFullscreen(divId)}
        >
          <BsArrowsFullscreen className="m-0 p-0 text-xl" />
        </button>
      </div>
      <div
        className={`${isFullScreen ? "items-center justify-center" : "items-start justify-start"} flex h-full w-full flex-col overflow-hidden`}
      >
        {chart()}
        {chartType === ChartType.barStack && (
          <div className="flex w-full justify-center" id="BarStack Example">
            <ul className={`max-h-fit sm:max-h-fit`}></ul>
          </div>
        )}
      </div>
    </div>
  );
}

interface ChartWrapperProps<T extends ChartType>
  extends React.HTMLAttributes<HTMLDivElement> {
  divId: string;
  hasFullscreen?: boolean;
  hasCsv?: boolean;
  hasImageDl?: boolean;
  chartType: T;
  entryData: EntryDataMap[T];
}

type EntryDataMap = {
  [ChartType.pie]: any[];
  [ChartType.bar]: DataBarModel[];
  [ChartType.barStack]: DataBarStackModel[];
  [ChartType.line]: DataLineModel[];
};
