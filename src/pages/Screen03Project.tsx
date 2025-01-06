import { useContext, MutableRefObject } from "react";
import { QueryContext } from "../App";
import { Link } from "react-router";
import CardComponent from "../components/CardComponent";
import FloatingComponent from "../components/FloatingComponent";
import TechnoIcon from "../components/TechnoIcon";

export default function Screen03Project({
  screenRef,
  ...props
}: Screen03Props) {
  const context = useContext(QueryContext);

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
        } transition-[transform, opacity] relativeitems-start mb-32 flex gap-8 duration-[750ms] sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[5vw]`}
      >
        <div className="flex items-start gap-6 sm:w-full sm:flex-col sm:gap-2 md:mt-4 md:flex-col md:gap-2">
          <div className="flex flex-col items-start gap-8 sm:gap-2 md:gap-2">
            <div className="ml-4 flex flex-col gap-8 sm:gap-2 md:gap-2">
              <span className="text-[18px] sm:ml-0 sm:self-center">
                개발 기간: 2024-03 ~ 2024.01
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
                to={"/thenanaro"}
              >
                담당한 업무 확인하기
              </Link>
              <span className="w-[70%] text-sm text-maincolor-200 sm:w-full sm:text-xs md:text-xs">
                *앱은 Google Play Store 심사중이오니 앱 이미지 활용하지 못하는
                점을 양해 부탁드립니다
              </span>
              <span className="self-end text-base italic sm:text-sm">
                출처:{" "}
                <a href="https://thehanaro.co.kr" target="_blank">
                  https://thehanaro.co.kr
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

        <div className="flex min-w-[250px] max-w-[350px] flex-[1_1_0%] flex-col sm:mt-2 sm:min-w-0 sm:self-center lg:mt-16">
          <img
            className="mb-1 aspect-auto w-full rounded-xl"
            src="/assets/disallowed/images/project_1_image.png"
          />
          <span className="mr-1 w-full text-sm text-maincolor-400 sm:text-sm">
            *이 이미지는 하나로의료재단의 소유이며, 상업적 목적으로 사용하지
            않을 것이며, 오직 참고 및 개인적인 용도로만 활용할 것입니다
          </span>
          <span className="mr-1 self-end text-sm italic text-maincolor-400 sm:text-sm">
            출처: https://thehanaro.co.kr
          </span>
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
        } transition-[transform, opacity] relative mb-32 flex items-start gap-8 duration-[750ms] sm:w-full sm:flex-col sm:gap-2 md:flex-wrap md:justify-center md:gap-2 lg:mx-[5vw]`}
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
}
