import { useContext, MutableRefObject, useEffect, useState } from "react";
import { Link } from "react-router";
import { QueryContext } from "../App";
import CardComponent from "../components/CardComponent";
import FloatingComponent from "../components/FloatingComponent";
import TechnoIcon from "../components/TechnoIcon";
import ChartWrapper from "../components/ChartWrapper";
import { dataBar, dataLine } from "../data/fakeData";
import {
  ChartType,
  DataBarStackModel,
  DataPieModel,
} from "../models/global-models";
import useGithubFetch from "../services/useGithubFetch";

const imagesUrl: string[] = [
  "/assets/disallowed/images/thehanaro_app_image_1.png",
  "/assets/disallowed/images/thehanaro_app_image_2.png",
  "/assets/disallowed/images/thehanaro_app_image_3.png",
  "/assets/disallowed/images/thehanaro_app_image_4.png",
  "/assets/disallowed/images/thehanaro_app_image_5.png",
];

export default function Screen03Project({
  screenRef,
  scrollPos,
  ...props
}: Screen03Props) {
  const context = useContext(QueryContext);
  const [isOnView, setIsOnView] = useState<boolean>(false);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [languageUsed, setLanguageUsed] = useState<DataPieModel[]>([]);
  const [dateStart, setDateStart] = useState<DataBarStackModel[]>([]);

  const { githubInfo } = useGithubFetch();

  useEffect(() => {
    if (!githubInfo) return;

    const map: DataBarStackModel[] = [];

    const sortedRepos = githubInfo?.repos.toSorted(
      (a, b) => a.createdDate.getFullYear() - b.createdDate.getFullYear(),
    );

    sortedRepos.map((e) => {
      let color = "";
      switch (e.language) {
        case "TypeScript":
          color = "#3178c6";
          break;
        case "JavaScript":
          color = "#F0DB4F";
          break;
        case "Dart":
          color = "#00B4AB";
          break;

        default:
          color = "";
          break;
      }
      if (color != "") {
        return map.push({
          data: [{ x: e.createdDate.getFullYear().toString(), y: 1 }],
          label: e.repoName,
          bgColor: color,
        });
      }
    });

    setDateStart(map);
  }, [githubInfo]);

  useEffect(() => {
    if (!githubInfo) return;
    const newMap: { [key: string]: number } = {};
    githubInfo.repos.map((e) => {
      if (e.language) {
        return (newMap[e.language] = (newMap[e.language] || 0) + 1);
      }
    });

    setLanguageUsed(() => {
      return Object.entries(newMap).map(([key, value]) => {
        let color = "";
        switch (key) {
          case "TypeScript":
            color = "#3178c6";
            break;
          case "JavaScript":
            color = "#F0DB4F";
            break;
          case "Dart":
            color = "#00B4AB";
            break;

          default:
            color = "#4A90E2";
            break;
        }
        return { label: key, value: value, color: color };
      });
    });
  }, [githubInfo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % imagesUrl.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const div: DOMRect | undefined = document
      .getElementById("project-web-hanaro")
      ?.getBoundingClientRect();
    if (!div) return;

    if (window.innerHeight - div.y - 85 > 0) {
      setIsOnView(true);
    }
  }, [scrollPos]);

  return (
    <div
      ref={screenRef}
      {...props}
      className="flex h-fit min-h-screen w-full flex-col items-start justify-start overflow-x-hidden bg-bgcolor p-4 sm:justify-start sm:px-2 sm:py-4 sm:pt-10 md:items-center"
    >
      <div
        style={{ "--color": "white" } as React.CSSProperties}
        className="gradient-border-to-right h-[2px] w-[98%] bg-line"
      ></div>
      <div className="mb-20 mt-10 self-start pl-10 text-[70px] font-bold sm:text-[40px]">
        Projects
      </div>

      {/* Project 1 */}

      <div
        className={`${
          context?.activeSection === 2
            ? "md:translate-y-0 md:opacity-100 lg:translate-y-0 lg:opacity-100"
            : (context?.activeSection ?? 0) > 2
              ? "md:-translate-y-24 md:opacity-0 lg:-translate-y-24 lg:opacity-0"
              : "md:translate-y-24 md:opacity-0 lg:translate-y-24 lg:opacity-0"
        } transition-[transform, opacity] relative mb-32 flex items-start gap-8 duration-[750ms] sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[1vw]`}
      >
        <div className="flex items-start gap-6 sm:w-full sm:flex-col sm:gap-2 md:mt-4 md:flex-col md:gap-2">
          <div className="flex flex-col items-start gap-8 sm:gap-2 md:gap-2">
            <div className="ml-4 flex flex-col gap-8 sm:gap-2 md:gap-2">
              <span className="text-[18px] sm:ml-0 sm:self-center">
                개발 기간: 2024-03 ~ 2025.01
              </span>
              <div className="flex items-center gap-6 sm:flex-wrap sm:gap-4">
                <span className="text-5xl font-bold sm:text-2xl md:text-3xl">
                  더하나로
                </span>
                <span className="rounded-md bg-maincolor-200 p-1.5 text-sm text-black md:text-xs">
                  모바일 앱
                </span>
                <div className="flex items-center justify-self-end">
                  <TechnoIcon
                    src="/assets/disallowed/images/flutter_icon.png"
                    alt="Flutter"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/svg/figma_icon.svg"
                    alt="Figma"
                  />
                </div>
              </div>
            </div>
            <CardComponent className="flex flex-col items-start md:max-w-[400px] lg:max-w-[500px]">
              <span className="text-2xl font-medium sm:text-xl md:text-xl">
                맞춤형 건강 정보를 더욱 효율적으로 제공하며, 건강검진과
                건강체크를 언제 어디서나 쉽고 편리하게 이용할 수 있는
                서비스입니다.
              </span>
              <Link
                className="box-border rounded-md border-2 border-solid border-maincolor-200 bg-hanarogreen/75 p-4 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:bg-maincolor-200 md:hover:text-black lg:mt-4 lg:hover:bg-maincolor-200 lg:hover:text-black"
                to={"/thehanaro"}
              >
                담당한 업무 확인하기
              </Link>
              <span className="w-[70%] text-sm text-maincolor-200 sm:w-full sm:text-xs md:text-xs">
                *앱은 Google Play Store 심사중이오니 앱 이미지 활용하지 못하는
                점을 양해 부탁드립니다
              </span>
              <span className="self-end text-sm italic sm:text-sm">
                출처:{" "}
                <a href="https://thehanaro.com" target="_blank">
                  https://thehanaro.com
                </a>
              </span>
            </CardComponent>
          </div>
          <div className="relative m-2 flex min-h-[400px] min-w-[300px] max-w-[400px] flex-[1_2_0%] items-center self-start overflow-hidden rounded-md bg-maincolor-700 sm:m-0 sm:min-h-[300px] sm:w-full sm:min-w-0 sm:max-w-full sm:items-end md:min-h-[300px] md:items-end">
            <FloatingComponent
              imageBox1={[
                "/assets/disallowed/images/card_chartjs.png",
                "/assets/disallowed/images/card_react.png",
              ]}
              imageBox2={[
                "/assets/disallowed/images/card_flutter.png",
                "/assets/disallowed/images/card_github.png",
              ]}
            />
          </div>
        </div>

        <div className="m-0 flex min-w-[250px] max-w-[350px] flex-[1_1_0%] flex-col items-center justify-center overflow-hidden p-0 sm:mt-2 sm:w-full sm:min-w-0 sm:self-center lg:mt-16">
          <div
            style={{
              transform: `translate(-${carouselIndex * 100}%, 0px`,
            }}
            className="flex aspect-auto h-full w-full items-center rounded-xl transition-transform duration-[800ms] ease-in-out"
          >
            {imagesUrl.map((url, i) => (
              <div
                key={url}
                className="flex w-full flex-shrink-0 items-center justify-center p-2"
              >
                <img
                  src={url}
                  className={`${carouselIndex === i ? "" : "opacity-0"} aspect-auto h-full rounded-md transition-opacity duration-[1200ms]`}
                  alt="The Hanaro App"
                />
              </div>
            ))}
          </div>
          <span className="mr-1 w-full text-sm text-maincolor-400 sm:text-sm">
            *이 이미지는 하나로의료재단의 소유이며, 상업적 목적으로 사용하지
            않을 것이며, 오직 참고 및 개인적인 용도로만 활용할 것입니다
          </span>
          <span className="mr-1 self-end text-sm italic text-maincolor-400 sm:text-sm">
            출처: 더하나로 애플리케이션
          </span>
        </div>
      </div>

      {/* Hanaro Web */}
      <div
        className={`${isOnView ? "" : "translate-x-96 opacity-0"} ${context?.activeSection === 2 ? "" : "opacity-0"} transition-[transform, opacity] relative mb-32 flex items-start gap-0 duration-[750ms] sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:ml-[1vw]`}
        id="project-web-hanaro"
      >
        <div className="flex items-start gap-6 sm:w-full sm:flex-col sm:gap-2 md:mt-4 md:flex-col md:gap-2 lg:w-fit">
          <div className="flex flex-col items-start gap-8 sm:gap-2 md:gap-2">
            <div className="flex flex-col gap-8 pl-4 sm:gap-2 md:gap-2">
              <span className="text-[18px] sm:ml-0 sm:self-center">
                개발 기간: 2024-06 ~ 2024.12
              </span>
              <div className="flex flex-wrap items-center gap-6 sm:flex-wrap sm:gap-4">
                <span className="text-5xl font-bold sm:text-2xl md:text-3xl">
                  더하나로 웹 페이지
                </span>
                <span className="rounded-md bg-maincolor-200 p-1.5 text-sm text-black md:text-xs">
                  웹
                </span>
                <div className="flex items-center justify-self-end">
                  <TechnoIcon
                    src="/assets/disallowed/svg/react.svg"
                    alt="React"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/svg/chartjs_logo.svg"
                    alt="ChartJs"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/svg/tailwind_logo.svg"
                    alt="Tailwind"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/svg/figma_icon.svg"
                    alt="Figma"
                  />
                </div>
              </div>
            </div>
            <CardComponent className="flex flex-col items-start md:max-w-[400px] lg:max-w-[500px]">
              <span className="text-2xl font-medium sm:text-xl md:text-xl">
                모바일 앱에 대한
              </span>
              <ul className="list-disc pl-2 text-2xl font-medium sm:pl-5 sm:text-xl md:pl-4 md:text-xl">
                <li>
                  <span className="git-bg-variable">소개</span> 페이지: 새로운
                  사용자에게 앱의 기능과 목적 소개
                </li>
                <li>
                  <span className="git-bg-variable">관리자</span> 페이지: 앱의
                  콘텐츠, 사용자 및 설정 관리
                </li>
                <li>
                  <span className="git-bg-variable">통계</span>{" "}
                  페이지(애널리틱스): 사용자 활동, 앱 사용량, 트래픽 데이터
                  시각화
                </li>
              </ul>
              <span className="text-2xl font-medium sm:text-xl md:text-xl"></span>
              <span className="text-2xl font-medium sm:text-xl md:text-xl">
                개발 및 디자인 작업 동시에 진행하였습니다.
              </span>
              <Link
                className="box-border rounded-md border-2 border-solid border-maincolor-200 bg-hanarogreen/75 p-4 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:bg-maincolor-200 md:hover:text-black lg:mt-4 lg:hover:bg-maincolor-200 lg:hover:text-black"
                to={"/thehanaro"}
              >
                담당한 업무 확인하기
              </Link>
            </CardComponent>
          </div>
        </div>
        <div className="flex w-full justify-center gap-4 rounded-md sm:flex-col md:h-[500px] md:w-[80%] md:snap-y md:flex-col md:justify-start md:overflow-y-scroll lg:w-[80%] lg:flex-wrap">
          <ChartWrapper<ChartType.pie>
            graphTitle="Main language by personnal repos"
            hasCsv={false}
            hasImageDl={false}
            chartType={ChartType.pie}
            entryData={languageUsed}
            divId="pie-1"
          />
          <ChartWrapper<ChartType.barStack>
            graphTitle="Repos start year"
            chartType={ChartType.barStack}
            entryData={dateStart}
            divId="barStack-1"
          />
          <ChartWrapper<ChartType.bar>
            graphTitle="Bar Example"
            hasImageDl={false}
            hasFullscreen={false}
            chartType={ChartType.bar}
            entryData={dataBar}
            divId="bar-1"
          />
          <ChartWrapper<ChartType.line>
            graphTitle="Line Example"
            hasCsv={false}
            hasFullscreen={false}
            entryData={dataLine}
            chartType={ChartType.line}
            divId="line-1"
          />
        </div>
      </div>

      {/* Project 2 */}

      <div
        className={`${
          context?.activeSection === 2
            ? "md:translate-y-0 md:opacity-100 lg:translate-y-0 lg:opacity-100"
            : (context?.activeSection ?? 0) > 2
              ? "md:-translate-y-24 md:opacity-0 lg:-translate-y-24 lg:opacity-0"
              : "md:translate-y-24 md:opacity-0 lg:translate-y-24 lg:opacity-0"
        } transition-[transform, opacity] relative mb-32 flex items-start gap-8 duration-[750ms] sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[1vw]`}
      >
        <div className="flex items-start gap-6 sm:w-full sm:flex-col sm:gap-2 md:mt-4 md:flex-col md:gap-2">
          <div className="flex flex-col items-start gap-8 sm:gap-2 md:gap-2">
            <div className="ml-4 flex flex-col gap-8 sm:gap-2 md:gap-2">
              <span className="text-[18px] sm:ml-0 sm:self-center">
                개발 기간: 2023-09 ~ 2024-04
              </span>
              <div className="flex items-center gap-6 sm:flex-wrap sm:gap-4">
                <span className="text-5xl font-bold sm:text-2xl md:text-3xl">
                  날씨 앱
                </span>
                <span className="rounded-md bg-maincolor-200 p-1.5 text-sm text-black md:text-xs">
                  웹
                </span>
                <div className="flex items-center justify-self-end">
                  <TechnoIcon
                    src="/assets/disallowed/svg/react.svg"
                    alt="React"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/svg/tailwind_logo.svg"
                    alt="Tailwind"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/images/html_logo.png"
                    alt="HTML"
                  />
                  <TechnoIcon
                    src="/assets/disallowed/svg/css_logo.svg"
                    alt="CSS"
                  />
                </div>
              </div>
            </div>
            <CardComponent className="flex flex-col items-start md:max-w-[400px] lg:max-w-[500px]">
              <span className="text-2xl font-medium sm:text-xl md:text-xl">
                기상청 및 한국환경공단의 공공 API를 활용하여 날씨를 보여주는
                웹사이트입니다.
              </span>
              <div className="flex w-full items-center gap-4 lg:mt-4">
                <a
                  href="https://floriansacc.github.io/News-weather"
                  target="_blank"
                  className="box-border rounded-md border-2 border-solid border-maincolor-200 bg-maincolor-800/75 p-4 py-2 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:bg-maincolor-200 md:hover:text-black lg:hover:bg-maincolor-200 lg:hover:text-black"
                >
                  앱 열기
                </a>
                <a
                  href="https://github.com/floriansacc/News-weather"
                  target="_blank"
                >
                  <img
                    className="h-10 w-10 rounded-full transition-all duration-200 md:hover:scale-125 lg:hover:scale-125"
                    src="/assets/disallowed/svg/github-mark-white.svg"
                  />
                </a>
              </div>
            </CardComponent>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative m-2 flex min-h-[400px] min-w-[300px] max-w-[400px] flex-[1_2_0%] flex-col items-center self-start overflow-hidden rounded-md bg-maincolor-700 sm:m-0 sm:mt-2 sm:min-h-[300px] sm:w-full sm:min-w-0 sm:max-w-full sm:items-end md:mt-10 md:min-h-[300px] md:items-end"
          >
            <source
              type="video/mp4"
              src="/assets/allowed/videos/project_2_video.mp4"
            />
          </video>
        </div>
        <div className="flex min-w-[250px] max-w-[350px] flex-[1_1_0%] flex-col sm:mt-2 sm:w-full sm:min-w-0 sm:max-w-full sm:self-center sm:px-4 lg:mt-16">
          <img
            className="mb-1 aspect-auto w-full rounded-xl"
            src="/assets/allowed/images/project_2_image.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

/**
 <div className="min-w[300px] mt-16 max-w-[700px] flex-1 sm:hidden md:hidden md:max-w-[300px]">
          <img
            src="/assets/allowed/images/project_2_image_desktop.png"
            className="aspect-auto rounded-xl"
          />
        </div>
 */

interface Screen03Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
  scrollPos: number;
}
