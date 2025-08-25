import { useContext, MutableRefObject } from "react";
import { QueryContext } from "../App";
import CardComponent from "../components/CardComponent";
import TechnoIcon from "../components/TechnoIcon";
import { LogoModel } from "../models/global-models";

const logoList: { [key: string]: LogoModel } = {
  flutter: {
    src: "/assets/disallowed/images/flutter_icon.png",
    alt: "Flutter",
  },
  nextJs: { src: "/assets/disallowed/svg/next_js_logo.svg", alt: "Next.js" },
  react: { src: "/assets/disallowed/svg/react.svg", alt: "React" },
  html: { src: "/assets/disallowed/images/html_logo.png", alt: "HTML" },
  css: { src: "/assets/disallowed/svg/css_logo.svg", alt: "CSS" },
  chartjs: { src: "/assets/disallowed/svg/chartjs_logo.svg", alt: "Chart.js" },
  figma: { src: "/assets/disallowed/svg/figma_icon.svg", alt: "Figma" },
};

const careerInfo: CareerModel[] = [
  {
    date: "2025.02 ~ 현재",
    name: "(주)플래어",
    role: "프론트엔드 개발 (모바일 및 웹)",
    skillsImage: [logoList.flutter, logoList.nextJs],
    details: [
      <ul
        key="career-2-details-1"
        className="list-inside list-disc text-xl font-medium sm:text-base"
      >
        <p className="mb-2 font-bold">모바일 개발</p>
        <li>
          <span className="git-bg-variable">카카오맵 API</span>를 활용한 지도
          기반 공간 탐색
        </li>
        <li>
          다국어 지원: <span className="git-bg-variable">한/영 앱 구성</span> 및{" "}
          <span className="git-bg-variable">자동 번역</span>
        </li>
        <li>
          <span className="git-bg-variable">결제 시스템 구현/연동</span> (웹뷰
          기반, iOS/Android 각각 대응)
        </li>
        <li>
          Firebase Firestore 기반{" "}
          <span className="git-bg-variable">실시간 채팅 기능</span> 구현
        </li>
        <li>본인 인증(NICE) 및 계좌 인증 기능 개발</li>
        <li>
          Firebase 메시징을 통한 푸시 알림 및 이에 대한 라우팅, UI 업데이트
        </li>
        <li>App Store / Google Play Store 관리, 배포 및 업데이트</li>
        <li>기술: Flutter, Figma</li>
      </ul>,
      <ul
        key="career-2-details-2"
        className="list-inside list-disc text-xl font-medium sm:text-base"
      >
        <p className="mb-2 font-bold">웹 개발</p>
        <li>
          <span className="git-bg-variable">Next.js 기반 SSR</span> 관리자
          웹페이지 설계 및 개발
        </li>
        <li>
          <span className="git-bg-variable">랜딩 페이지 개발</span> (앱 다운로드
          유도 및 기능 소개 포함)
        </li>
        <li>기술: Next.js</li>
      </ul>,
    ],
  },
  {
    date: "2024-03 ~ 2025.02",
    name: "(주)위릿 (Wiilit)",
    role: "프론트엔드 개발 (모바일 및 웹)",
    skillsImage: [
      logoList.flutter,
      logoList.react,
      logoList.html,
      logoList.css,
      logoList.chartjs,
      logoList.figma,
    ],
    details: [
      <ul
        key="career-1-details-1"
        className="list-inside list-disc text-xl font-medium sm:text-base"
      >
        <p className="mb-2 font-bold">모바일 개발</p>
        <li>
          의료 분야 모바일 앱을{" "}
          <span className="git-bg-variable">첫 단계부터 출시까지</span> 개발
          작업
        </li>
        <li>
          <span className="git-bg-variable">서버 API</span> 및 외부{" "}
          <span className="git-bg-variable">Rest API</span>
          연동해여 데이터 가져오기 및 전송 구현
        </li>
        <li>
          기기 내 <span className="git-bg-variable">데이터베이스</span>를
          활용하여(SQLite) 사용자의 데이터 저장 및 활용 실시
        </li>
        <li>기술: Flutter, Figma</li>
      </ul>,
      <ul
        key="career-1-details-2"
        className="list-inside list-disc text-xl font-medium sm:text-base"
      >
        <p className="mb-2 font-bold">웹 개발</p>
        <li>
          <span className="git-bg-variable">관리자 페이지</span>를 제작해
          관리자가 사용자 데이터를 손쉽게 조회, 수정, 삭제할 수 있게 설계
        </li>
        <li>
          사용자의 데이터를 직관적으로 볼 수 있도록{" "}
          <span className="git-bg-variable">다양한 차트와 그래프</span>를
          제공해주는 <span className="git-bg-variable">통계 페이지</span>
          (Analytics)를 제작
        </li>
        <li>
          모바일 앱에 대한 <span className="git-bg-variable">소개 페이지</span>
          를 제작하여 사용자에게 앱의 주요 기능과 혜택을 효과적으로 전달
        </li>
        <li>기술: React, JavaScript, HTML, CSS, Chart.js</li>
      </ul>,
    ],
  },
  {
    date: "2023.11 ~ 2024.03",
    name: "(주)웨더피아 (Weatherpia)",
    role: "연구원 · 기후변화연구소",
    skillsImage: [],
    details: [
      <ul
        key="career-2-details-1"
        className="list-inside list-disc text-xl font-medium sm:text-base"
      >
        <li>국내 및 국제 기후변화 사업 구축/관리 (GCF, CTCN, 기상청 등)</li>
      </ul>,
    ],
  },
];

export default function Screen02Career({ screenRef, ...props }: Screen02Props) {
  const context = useContext(QueryContext);

  return (
    <div
      ref={screenRef}
      className="bg-bgcolor flex h-fit min-h-screen w-full flex-col items-center justify-start p-4 sm:justify-start sm:px-2 sm:py-4 sm:pt-10"
      {...props}
    >
      <div
        style={{ "--color": "white" } as React.CSSProperties}
        className="gradient-border-to-right bg-line h-[2px] w-[98%]"
      ></div>
      <div className="mt-10 self-start pl-10 text-[70px] font-bold sm:mb-8 sm:text-[40px]">
        Career
      </div>
      <div
        className={`relative flex h-fit w-full flex-wrap justify-start justify-items-start sm:flex-col`}
      >
        {careerInfo.map((e, i) => (
          <CardComponent
            key={`career-${i}`}
            style={
              {
                "--anim-index": `${i * 50 + 50}px`,
              } as React.CSSProperties
            }
            className={`flex ${
              context?.activeSection === 1
                ? "md:translate-y-0 md:opacity-100 lg:translate-y-0 lg:opacity-100"
                : (context?.activeSection ?? 0) > 1
                  ? "md:-translate-y-(--anim-index) md:opacity-0 lg:-translate-y-(--anim-index) lg:opacity-0"
                  : `md:translate-y-(--anim-index) md:opacity-0 lg:translate-y-(--anim-index) lg:opacity-0`
            } transition-[transform, opacity] flex-col items-start duration-1000 ease-in-out sm:w-full md:w-[45%] md:min-w-[500px] md:flex-1 lg:min-h-[430px] lg:w-[45%]`}
          >
            <span className="ml-4 text-[18px] sm:ml-0 sm:self-center sm:text-base">
              {e.date}
            </span>
            <div className="flex w-full items-center justify-between gap-4 sm:flex-col sm:items-start md:flex-wrap">
              <span className="text-3xl font-bold sm:text-2xl">{e.name}</span>
              <div className="flex flex-wrap items-center gap-5 sm:flex-wrap">
                {e.skillsImage.map((logo, index) => (
                  <TechnoIcon
                    key={`logo-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            </div>
            <span className="mb-4 text-2xl font-bold sm:text-xl">{e.role}</span>
            {e.details.map((e) => e)}
          </CardComponent>
        ))}
      </div>
    </div>
  );
}

interface Screen02Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}

interface CareerModel {
  date: string;
  name: string;
  role: string;
  skillsImage: LogoModel[];
  details: JSX.Element[];
}
