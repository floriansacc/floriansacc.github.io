import { useState, useEffect } from "react";
import {
  BsFiletypeCsv,
  BsArrowsFullscreen,
  BsImage,
  BsInfoCircle,
} from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import ChartPie from "./Charts/ChartPie";
import ChartBar from "./Charts/ChartBar";
import ChartBarStack from "./Charts/ChartBarStack";
import ChartLine from "./Charts/ChartLine";
import {
  ChartType,
  DataBarModel,
  DataBarStackModel,
  DataLineModel,
  DataPieModel,
} from "../models/global-models";

export default function ChartWrapper<T extends ChartType>({
  divId,
  graphTitle,
  chartType,
  entryData,
  hasFullscreen = true,
  hasCsv = true,
  hasImageDl = true,
}: ChartWrapperProps<T>) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isTutorialClosed, setIsTutorialClosed] = useState<TutoState>({
    csv: localStorage.getItem("csvTuto") === "true",
    image: localStorage.getItem("imageTuto") === "true",
    fullscreen: localStorage.getItem("fullscreenTuto") === "true",
  });

  (!isTutorialClosed.csv && hasCsv) ||
    (!isTutorialClosed.image && hasImageDl) ||
    (!isTutorialClosed.fullscreen && hasFullscreen);

  const tutorialText = (): string[] => {
    if (!isTutorialClosed.csv && hasCsv) {
      return ["CSV 다운로드", "그래프 데이터가 CSV로 출력할 수 있는 기능"];
    } else if (!isTutorialClosed.image && hasImageDl) {
      return [
        "이미지 다운로드",
        "원하는 사이즈로 그래프를 이미지로 다운르도할 수 있는 기능",
      ];
    } else if (!isTutorialClosed.fullscreen && hasFullscreen) {
      return ["전체화면", "그래프를 잘 볼 수 있도록 전체 화면으로 전환 기능"];
    } else {
      return [];
    }
  };

  const chart = (): JSX.Element | undefined => {
    switch (chartType) {
      case ChartType.pie:
        return (
          <ChartPie
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData as DataPieModel[]}
            graphTitle={graphTitle}
          />
        );

      case ChartType.bar:
        return (
          <ChartBar
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData as DataBarModel[]}
            graphTitle={graphTitle}
          />
        );

      case ChartType.barStack:
        return (
          <ChartBarStack
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData as DataBarStackModel[]}
            graphTitle={graphTitle}
          />
        );

      case ChartType.line:
        return (
          <ChartLine
            isFullScreen={isFullScreen}
            divId={divId}
            entryData={entryData as DataLineModel[]}
            graphTitle={graphTitle}
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

  const setTutorialOff = (): void => {
    if (!isTutorialClosed.csv && hasCsv) {
      localStorage.setItem("csvTuto", "true");
      setIsTutorialClosed((prev) => ({ ...prev, csv: true }));
    }
    if (!isTutorialClosed.image && hasImageDl) {
      localStorage.setItem("imageTuto", "true");
      setIsTutorialClosed((prev) => ({ ...prev, image: true }));
    }
    if (!isTutorialClosed.fullscreen && hasFullscreen) {
      localStorage.setItem("fullscreenTuto", "true");
      setIsTutorialClosed((prev) => ({
        ...prev,
        fullscreen: true,
      }));
    }
  };

  const openTutorial = (entry: string): void => {
    if (entry === "csv" && isTutorialClosed.csv) {
      setIsTutorialClosed((prev) => ({ ...prev, csv: false }));
    }
    if (entry === "image" && isTutorialClosed.image) {
      setIsTutorialClosed((prev) => ({ ...prev, image: false }));
    }
    if (entry === "fullscreen" && isTutorialClosed.fullscreen) {
      setIsTutorialClosed((prev) => ({
        ...prev,
        fullscreen: false,
      }));
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
        <div
          className={`${hasCsv && hasImageDl && hasFullscreen ? "hidden" : ""} ${
            (!isTutorialClosed.csv && hasCsv) ||
            (!isTutorialClosed.image && hasImageDl) ||
            (!isTutorialClosed.fullscreen && hasFullscreen)
              ? "visible opacity-100"
              : "invisible -translate-y-12 scale-0 opacity-0"
          } absolute top-20 z-40 flex h-fit min-h-fit w-fit flex-col gap-2 rounded-xl bg-gray-500 p-4 pt-3 font-semibold text-white transition-all duration-300 sm:right-12 sm:w-[75vw] sm:gap-6`}
        >
          <IoCloseOutline
            className="absolute right-1 top-1 h-8 w-8 rounded-xl p-1 transition-colors hover:bg-white/25"
            onClick={setTutorialOff}
          />
          <div className="flex flex-col">
            {tutorialText().map((e, i) =>
              i === 0 ? (
                <div className="mb-4 flex w-full items-center justify-center gap-4 text-xl font-semibold">
                  {!isTutorialClosed.csv && hasCsv && (
                    <BsFiletypeCsv className="box-border border-graphorange text-graphorange" />
                  )}
                  {!isTutorialClosed.image && hasImageDl && (
                    <BsImage className="box-border border-graphorange text-graphorange" />
                  )}
                  {!isTutorialClosed.fullscreen && hasFullscreen && (
                    <BsArrowsFullscreen className="box-border border-graphorange text-graphorange" />
                  )}
                  <p>{e}</p>
                </div>
              ) : (
                <p className="text-base">{e}</p>
              ),
            )}
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <span>{graphTitle}</span>
        </div>
        <div className="relative">
          <button
            className={`${hasCsv ? "" : "pointer-events-none opacity-25"} box-border h-full rounded-md border border-solid border-graphorange bg-maincolor-800/75 px-2 text-graphorange transition-colors hover:border-maincolor-900 hover:bg-graphorange hover:text-maincolor-900`}
          >
            <BsFiletypeCsv className="m-0 p-0 text-xl" />
          </button>
          {hasCsv && !hasImageDl && !hasFullscreen && (
            <BsInfoCircle
              className="absolute -bottom-6 right-1 cursor-pointer rounded-full transition-colors hover:border-maincolor-900 hover:bg-graphorange hover:text-maincolor-900"
              onClick={() => openTutorial("csv")}
            />
          )}
        </div>
        <div className="relative">
          <button
            className={`${hasImageDl ? "" : "pointer-events-none opacity-25"} box-border h-full rounded-md border border-solid border-graphorange bg-maincolor-800/75 px-2 text-graphorange transition-colors hover:border-maincolor-900 hover:bg-graphorange hover:text-maincolor-900`}
          >
            <BsImage className="m-0 p-0 text-xl" />
          </button>
          {hasImageDl && !hasCsv && !hasFullscreen && (
            <BsInfoCircle
              className="absolute -bottom-6 right-1 cursor-pointer rounded-full transition-colors hover:border-maincolor-900 hover:bg-graphorange hover:text-maincolor-900"
              onClick={() => openTutorial("image")}
            />
          )}
        </div>
        <div className="relative">
          <button
            className={`${hasFullscreen ? "" : "pointer-events-none opacity-25"} box-border h-full rounded-md border border-solid border-graphorange bg-maincolor-800/75 px-2 text-graphorange transition-colors hover:border-maincolor-900 hover:bg-graphorange hover:text-maincolor-900 sm:hidden`}
            onClick={() => getFullscreen(divId)}
          >
            <BsArrowsFullscreen className="m-0 p-0 text-xl" />
          </button>
          {hasFullscreen && !hasImageDl && !hasCsv && (
            <BsInfoCircle
              className="absolute -bottom-6 right-1 cursor-pointer rounded-full transition-colors hover:border-maincolor-900 hover:bg-graphorange hover:text-maincolor-900"
              onClick={() => openTutorial("fullscreen")}
            />
          )}
        </div>
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
  graphTitle: string;
  hasFullscreen?: boolean;
  hasCsv?: boolean;
  hasImageDl?: boolean;
  chartType: T; // T is constrained to ChartType
  entryData: EntryDataMap[T]; // Entry data type depends on the chart type
}

type EntryDataMap = {
  [ChartType.pie]: DataPieModel[];
  [ChartType.bar]: DataBarModel[];
  [ChartType.barStack]: DataBarStackModel[];
  [ChartType.line]: DataLineModel[];
};

interface TutoState {
  csv: boolean;
  image: boolean;
  fullscreen: boolean;
}
