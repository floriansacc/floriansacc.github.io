import { LogoModel } from "../models/global-models";
import TechnoIcon from "../components/TechnoIcon";
import CardComponent from "../components/CardComponent";
import { useState } from "react";

const logoList: LogoModel[] = [
  {
    src: "/assets/disallowed/images/flutter_icon.png",
    alt: "Flutter",
  },
  {
    src: "/assets/disallowed/svg/react.svg",
    alt: "React",
  },
  {
    src: "/assets/disallowed/images/javascript_logo.png",
    alt: "Javascript",
  },
  {
    src: "/assets/disallowed/images/typescript_logo.png",
    alt: "Typescript",
  },
  {
    src: "/assets/disallowed/svg/chartjs_logo.svg",
    alt: "Chart.js",
  },
  {
    src: "/assets/disallowed/svg/tailwind_logo.svg",
    alt: "Tailwind",
  },
];

const infoCard: {
  [key: string]: string[];
} = {
  Flutter: [
    "Flutter로 크로스 플랫폼 모바일 구축",
    "위젯 기반 프레임워크를 사용하여 반응형 UI 제작",
    "첫 단계부터 앱 출시까지 경험",
    "Provider 패턴을 사용한 상태 관리",
    "Dart 언어로 개발",
  ],
  React: [
    "웹 애플리케이션 개발 경험",
    "Create React App, Vite을 사용한 프로젝트 구성",
    "재사용 가능한 구성 요소와 상태 관리를 활용",
    "React Hooks를 사용한 함수형 컴포넌트",
    "React Router를 사용한 라우팅",
    "Rest API, 서버 연동 경험",
  ],
  Javascript: ["ES6 문법에 익숙", "함수형 프로그래밍 경험", "비동기 처리 활용"],
  Typescript: [
    "엄중한 타입 검사를 통한 안정적인 개발",
    "팀 사이에 코드 이해도를 높여서 ",
    "Enum, Interface 활용",
  ],
  "Chart.js": [
    "데이터 시각화 경험",
    "다양한 차트 유형 제작",
    "차트 컴포넌트 재사옹 및 커스터마이징",
    "원하는 사이즈로 차트 다운로드 및 CSV Export 기능 구현",
  ],
  Tailwind: ["CSS 프레임워크 활용 경험", "반응형 웹 디자인 구축"],
};

export default function SkillStackAboutMe() {
  const [activeIcon, setActiveIcon] = useState<string>("Flutter");

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center break-keep text-2xl font-normal sm:m-0 sm:my-2 sm:w-full sm:px-0 sm:py-4 sm:text-xl md:max-h-[500px] md:text-xl lg:w-[35%]">
      <p className="mb-2 h-fit w-fit rounded-xl bg-maincolor-900 p-2 font-bold">
        {" "}
        기술 스텍
      </p>
      <div className="flex w-full items-center justify-center gap-8 sm:justify-center">
        <div className="relative flex h-full w-fit flex-col items-center justify-between pl-4 sm:pl-2">
          {logoList.map((e, i) => (
            <div
              className="group flex h-14 w-14 items-center sm:h-11 sm:w-11"
              onClick={() => setActiveIcon(e.alt)}
            >
              <div
                className={`${activeIcon === e.alt ? "bg-maincolor-200" : "bg-maincolor-500"} absolute h-10 w-[2px] transition-all md:group-hover:bg-maincolor-100 lg:group-hover:bg-maincolor-100`}
              ></div>
              <div
                className={`${activeIcon === e.alt ? "animate-[fadeIn_150ms_forwards]" : "hidden"} absolute -right-8 h-0 w-0 border-b-8 border-r-8 border-t-8 border-solid border-b-transparent border-r-maincolor-700 border-t-transparent transition-opacity sm:hidden`}
              ></div>

              <TechnoIcon
                key={`logo-my-stack-${i}`}
                className={`${activeIcon === e.alt ? "brightness-110" : ""} bg-transparent transition-all md:group-hover:brightness-125 lg:group-hover:brightness-125`}
                src={e.src}
                alt={e.alt}
              />
            </div>
          ))}
        </div>
        <div className="flex sm:h-full sm:w-full md:h-full lg:h-full">
          <CardComponent
            noMargin={true}
            className="m-0 h-full sm:w-full sm:max-w-none md:min-w-[250px] lg:w-[300px] lg:max-w-[300px]"
          >
            <ul
              key={`card-skills-${activeIcon}`}
              className="animate-[fadeIn_150ms_forwards] list-inside list-disc"
            >
              {infoCard?.[activeIcon] &&
                infoCard?.[activeIcon].map((e) => (
                  <li className="py-1 text-base">{e}</li>
                ))}
            </ul>
          </CardComponent>
        </div>
      </div>
    </div>
  );
}
