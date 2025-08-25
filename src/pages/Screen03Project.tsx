import { useContext, MutableRefObject, useEffect, useState } from "react";
import { Link } from "react-router";
import { QueryContext } from "../App";
import CardComponent from "../components/CardComponent";
import FloatingComponent from "../components/FloatingComponent";
import TechnoIcon from "../components/TechnoIcon";
import ChartWrapper from "../components/ChartWrapper";
import { dataLine } from "../data/fakeData";
import {
  ChartType,
  DataBarModel,
  DataBarStackModel,
  DataPieModel,
} from "../models/global-models";
import useGithubFetchRepos from "../services/useGithubFetchRepos";
import useGitLanguageByRepo from "../services/useGitLanguageByRepo";
import { getColorByLanguage } from "../functions/public_method";
import PhoneWrapper from "../components/PhoneWrapper";

const hanaroImagesUrl: string[] = [
  "/assets/disallowed/images/thehanaro_app_image_1.png",
  "/assets/disallowed/images/thehanaro_app_image_2.png",
  "/assets/disallowed/images/thehanaro_app_image_3.png",
  "/assets/disallowed/images/thehanaro_app_image_4.png",
  "/assets/disallowed/images/thehanaro_app_image_5.png",
];

const locaImagesUrl: string[] = [
  "/assets/disallowed/images/locaplace_gallery.jpg",
  "/assets/disallowed/images/locaplace_search.png",
];

export default function Screen03Project({
  screenRef,
  scrollPos,
  ...props
}: Screen03Props) {
  const context = useContext(QueryContext);
  const [isOnView, setIsOnView] = useState<boolean>(false);
  const [carouselIndexLo, setCarouselIndexLo] = useState<number>(0);
  const [carouselIndexHa, setCarouselIndexHa] = useState<number>(0);

  const [mainLanguageRepo, setMainLanguageRepo] = useState<DataPieModel[]>([]);
  const [repoDateStart, setRepoDateStart] = useState<DataBarStackModel[]>([]);
  const [languageByRepo, setLanguageByRepo] = useState<DataBarModel>({
    mainLabels: [],
    datasets: [],
  });

  const { githubInfo } = useGithubFetchRepos();

  const { languagesInRepo } = useGitLanguageByRepo({
    githubInfo: githubInfo,
  });

  useEffect(() => {
    if (!githubInfo) return;

    const map: DataBarStackModel[] = [];

    const sortedRepos = githubInfo?.repos.toSorted(
      (a, b) => a.createdDate.getFullYear() - b.createdDate.getFullYear(),
    );

    sortedRepos.map((e) => {
      const color: string = getColorByLanguage({ entry: e.language });
      if (color != "") {
        return map.push({
          data: [{ x: e.createdDate.getFullYear().toString(), y: 1 }],
          label: e.repoName,
          bgColor: color,
        });
      }
    });

    setRepoDateStart(map);
  }, [githubInfo]);

  useEffect(() => {
    if (!githubInfo) return;
    const newMap: { [key: string]: number } = {};
    githubInfo.repos.map((e) => {
      if (e.language) {
        return (newMap[e.language] = (newMap[e.language] || 0) + 1);
      }
    });

    setMainLanguageRepo(() => {
      return Object.entries(newMap).map(([key, value]) => {
        return {
          label: key,
          value: value,
          color: getColorByLanguage({ entry: key, hasDefaultColor: true }),
        };
      });
    });
  }, [githubInfo]);

  useEffect(() => {
    if (!languagesInRepo) return;

    languagesInRepo;

    const languageToRemove: string[] = [
      "Objective-C",
      "Ruby",
      "Kotlin",
      "Swift",
    ];

    const allLanguages = new Set<string>();
    Object.values(languagesInRepo).forEach((repo) => {
      Object.keys(repo?.languages ?? {}).forEach((language) => {
        if (!languageToRemove.includes(language)) {
          allLanguages.add(language);
        }
      });
    });

    setLanguageByRepo({
      mainLabels: Object.keys(languagesInRepo),
      datasets: Array.from(allLanguages).map((e) => ({
        label: e,
        data: Object.keys(languagesInRepo).map(
          (label) => languagesInRepo[label]?.languages[e] || 0,
        ),
        bgColor: getColorByLanguage({ entry: e, hasDefaultColor: true }),
      })),
    });
  }, [languagesInRepo]);

  useEffect(() => {
    const locaInterval = setInterval(() => {
      setCarouselIndexLo((prev) => (prev + 1) % locaImagesUrl.length);
    }, 3000);

    const hanaroInterval = setInterval(() => {
      setCarouselIndexHa((prev) => (prev + 1) % hanaroImagesUrl.length);
    }, 3000);

    return () => {
      clearInterval(locaInterval);
      clearInterval(hanaroInterval);
    };
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
      className="bg-bgcolor flex h-fit min-h-screen w-full flex-col items-start justify-start overflow-x-hidden p-4 sm:justify-start sm:px-2 sm:py-4 sm:pt-10 md:items-center"
    >
      <div
        style={{ "--color": "white" } as React.CSSProperties}
        className="gradient-border-to-right bg-line h-[2px] w-[98%]"
      ></div>
      <div className="mt-10 mb-20 self-start pl-10 text-[70px] font-bold sm:text-[40px]">
        Projects
      </div>

      {/* Locaplace Project */}

      <div
        className={`${
          context?.activeSection === 2
            ? "md:translate-y-0 md:opacity-100 lg:translate-y-0 lg:opacity-100"
            : (context?.activeSection ?? 0) > 2
              ? "md:-translate-y-24 md:opacity-0 lg:-translate-y-24 lg:opacity-0"
              : "md:translate-y-24 md:opacity-0 lg:translate-y-24 lg:opacity-0"
        } transition-[transform, opacity] relative mb-32 flex items-start gap-8 duration-750 sm:w-full sm:flex-col sm:items-center sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[1vw]`}
      >
        <div className="flex items-start gap-6 sm:w-full sm:flex-col sm:gap-2 md:mt-4 md:flex-col md:gap-2">
          <div className="flex flex-col items-start gap-8 sm:gap-2 md:gap-2">
            <div className="ml-4 flex flex-col gap-8 sm:gap-2 md:gap-2">
              <span className="text-[18px] sm:ml-0 sm:self-center">
                개발 기간: 2025.02 ~ 현재
              </span>
              <div className="flex items-start gap-6 sm:flex-wrap sm:gap-4">
                <span className="bg-gradient-2 bg-clip-text text-5xl font-bold text-transparent sm:text-2xl md:text-3xl">
                  로카플레이스
                  <br />
                  LOCAPLACE
                </span>
                <span className="bg-maincolor-200 mt-3 rounded-md p-1.5 text-sm text-black md:text-xs">
                  모바일 앱
                </span>
                <div className="flex items-center justify-self-end">
                  <TechnoIcon
                    src="/assets/disallowed/images/flutter_icon.png"
                    alt="Flutter"
                  />
                </div>
              </div>
            </div>
            <CardComponent className="flex flex-col items-start md:max-w-[400px] lg:max-w-[500px]">
              <span className="text-2xl font-medium sm:text-xl md:text-xl">
                검색부터 예약, 결제까지 한 번에. 누구나 쉽고 빠르게 공간을
                이용할 수 있도록, 로카플레이스는 간편한 계약 서비스를 제공합니다
              </span>
              {/* <Link
                className="box-border rounded-md border-2 border-solid border-maincolor-200 bg-locamint/75 p-4 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:bg-maincolor-200 md:hover:text-black lg:mt-4 lg:hover:bg-maincolor-200 lg:hover:text-black"
                to={"/locaplace"}
              >
                담당한 업무 확인하기
              </Link> */}
              <span className="self-end text-sm italic sm:text-sm">
                출처:{" "}
                <a
                  className="text-blue-400 underline"
                  href="https://locaplace.net"
                  target="_blank"
                >
                  locaplace.net
                </a>
              </span>
            </CardComponent>
          </div>
          <div className="m-0 flex max-w-[300px] min-w-[250px] flex-[1_1_0%] flex-col items-center justify-center overflow-hidden p-0 sm:mt-2 sm:w-full sm:min-w-0 sm:self-center lg:mt-16">
            <div
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${180 * carouselIndexLo}deg)`,
              }}
              className="flex aspect-auto h-full w-full items-center rounded-xl transition-transform duration-800 ease-in-out"
            >
              {/* Front Image */}
              <img
                src={locaImagesUrl?.[0]}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
                className={`relative aspect-auto h-full rounded-md`}
                alt="App Gallery"
              />

              {/* Back Image */}
              <img
                src={locaImagesUrl?.[1]}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className={`absolute aspect-auto h-full rounded-md`}
                alt="App Search"
              />
            </div>
            <span className="text-maincolor-400 mr-1 w-full text-sm sm:text-sm">
              *이 이미지는 플래어의 소유이며, 상업적 목적으로 사용하지 않을
              것이며, 오직 참고 및 개인적인 용도로만 활용할 것입니다
            </span>
            <span className="text-maincolor-400 mr-1 self-end text-sm italic sm:text-sm">
              출처: 로카플레이스 애플리케이션
            </span>
          </div>
        </div>

        <PhoneWrapper className="lg:mt-16" />
      </div>

      {/* The Hanaro Project */}

      <div
        className={`${
          context?.activeSection === 2
            ? "md:translate-y-0 md:opacity-100 lg:translate-y-0 lg:opacity-100"
            : (context?.activeSection ?? 0) > 2
              ? "md:-translate-y-24 md:opacity-0 lg:-translate-y-24 lg:opacity-0"
              : "md:translate-y-24 md:opacity-0 lg:translate-y-24 lg:opacity-0"
        } transition-[transform, opacity] relative mb-32 flex items-start gap-8 duration-750 sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[1vw]`}
      >
        <div className="flex items-start gap-6 sm:w-full sm:flex-col sm:gap-2 md:mt-4 md:flex-col md:gap-2">
          <div className="flex flex-col items-start gap-8 sm:gap-2 md:gap-2">
            <div className="ml-4 flex flex-col gap-8 sm:gap-2 md:gap-2">
              <span className="text-[18px] sm:ml-0 sm:self-center">
                개발 기간: 2024-03 ~ 2025.01
              </span>
              <div className="items-startç flex gap-6 sm:flex-wrap sm:gap-4">
                <span className="text-5xl font-bold sm:text-2xl md:text-3xl">
                  더하나로
                </span>
                <span className="bg-maincolor-200 mt-3 rounded-md p-1.5 text-sm text-black md:text-xs">
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
                className="border-maincolor-200 bg-hanarogreen/75 md:hover:bg-maincolor-200 lg:hover:bg-maincolor-200 box-border rounded-md border-2 border-solid p-4 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:text-black lg:mt-4 lg:hover:text-black"
                to={"/thehanaro"}
              >
                담당한 업무 확인하기
              </Link>

              <span className="self-end text-sm italic sm:text-sm">
                출처:{" "}
                <a
                  className="text-blue-400 underline"
                  href="https://thehanaro.com"
                  target="_blank"
                >
                  thehanaro.com
                </a>
              </span>
            </CardComponent>
          </div>
          <div className="bg-maincolor-700 relative m-2 flex min-h-[400px] max-w-[400px] min-w-[300px] flex-[1_2_0%] items-center self-start overflow-hidden rounded-md sm:m-0 sm:min-h-[300px] sm:w-full sm:max-w-full sm:min-w-0 sm:items-end md:min-h-[300px] md:items-end">
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

        <div className="m-0 flex max-w-[350px] min-w-[250px] flex-[1_1_0%] flex-col items-center justify-center overflow-hidden p-0 sm:mt-2 sm:w-full sm:min-w-0 sm:self-center lg:mt-16">
          <div
            style={{
              transform: `translate(-${carouselIndexHa * 100}%, 0px`,
            }}
            className="flex aspect-auto h-full w-full items-center rounded-xl transition-transform duration-800 ease-in-out"
          >
            {hanaroImagesUrl.map((url, i) => (
              <div
                key={url}
                className="flex w-full shrink-0 items-center justify-center p-2"
              >
                <img
                  src={url}
                  className={`${carouselIndexHa === i ? "" : "opacity-0"} aspect-auto h-full rounded-md transition-opacity duration-1200`}
                  alt="The Hanaro App"
                />
              </div>
            ))}
          </div>
          <span className="text-maincolor-400 mr-1 w-full text-sm sm:text-sm">
            *이 이미지는 하나로의료재단의 소유이며, 상업적 목적으로 사용하지
            않을 것이며, 오직 참고 및 개인적인 용도로만 활용할 것입니다
          </span>
          <span className="text-maincolor-400 mr-1 self-end text-sm italic sm:text-sm">
            출처: 더하나로 애플리케이션
          </span>
        </div>
      </div>

      {/* Hanaro Web */}
      <div
        className={`${isOnView ? "" : "translate-x-96 opacity-0"} ${context?.activeSection === 2 ? "" : "opacity-0"} transition-[transform, opacity] relative mb-32 flex items-start gap-0 duration-750 sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:ml-[1vw]`}
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
                <span className="bg-maincolor-200 rounded-md p-1.5 text-sm text-black md:text-xs">
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
                className="border-maincolor-200 bg-hanarogreen/75 md:hover:bg-maincolor-200 lg:hover:bg-maincolor-200 box-border rounded-md border-2 border-solid p-4 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:text-black lg:mt-4 lg:hover:text-black"
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
            entryData={mainLanguageRepo}
            divId="pie-1"
          />
          <ChartWrapper<ChartType.barStack>
            graphTitle="Repos start year"
            chartType={ChartType.barStack}
            entryData={repoDateStart}
            divId="barStack-1"
          />
          <ChartWrapper<ChartType.bar>
            graphTitle="Languages by personnal repos"
            hasImageDl={false}
            hasFullscreen={false}
            chartType={ChartType.bar}
            entryData={languageByRepo}
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
        } transition-[transform, opacity] relative mb-32 flex items-start gap-8 duration-750 sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[1vw]`}
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
                <span className="bg-maincolor-200 rounded-md p-1.5 text-sm text-black md:text-xs">
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
                  className="border-maincolor-200 bg-maincolor-800/75 md:hover:bg-maincolor-200 lg:hover:bg-maincolor-200 box-border rounded-md border-2 border-solid p-4 py-2 text-xl text-white transition-all sm:p-2 sm:py-2 sm:text-base md:p-2 md:py-1 md:text-base md:hover:text-black lg:hover:text-black"
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
            className="bg-maincolor-700 relative m-2 flex min-h-[400px] max-w-[400px] min-w-[300px] flex-[1_2_0%] flex-col items-center self-start overflow-hidden rounded-md sm:m-0 sm:mt-2 sm:min-h-[300px] sm:w-full sm:max-w-full sm:min-w-0 sm:items-end md:mt-10 md:min-h-[300px] md:items-end"
          >
            <source
              type="video/mp4"
              src="/assets/allowed/videos/project_2_video.mp4"
            />
          </video>
        </div>
        <div className="flex max-w-[350px] min-w-[250px] flex-[1_1_0%] flex-col sm:mt-2 sm:w-full sm:max-w-full sm:min-w-0 sm:self-center sm:px-4 lg:mt-16">
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
