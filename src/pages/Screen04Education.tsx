import { useContext, MutableRefObject } from "react";
import { QueryContext } from "../App";
import CardComponent from "../components/CardComponent";

const educationInfo: EducationModel[] = [
  {
    date: "2021 ~ 2023",
    department: "환경에너지융합학과",
    degree: "석사",
    score: "4.45/4.5",
    univName: "전북대학교",
    country: "대한민국",
    details: [
      "이산화탄소지중저장",
      "저류층 시뮬레이션",
      "탄소중립",
      "공대 프로그래밍 기초 (Python, Matlab)",
      "웹 기초 (HTML/CSS, JavaScript)",
    ],
    image: "/assets/disallowed/images/jbnu_logo.png",
  },
  {
    date: "2017 ~ 2021",
    department: "에너지공학과",
    degree: "석사",
    score: "3.31/4.0",
    univName: "University of Technology of Belfort-Montbeliard",
    country: "벨포르 (프랑스)",
    details: [
      "전력 전자, 전력 품질",
      "연료전지 및 배터리 설계",
      "Matlab, Simulink 프로그래밍",
      "재생 에너지",
    ],
    image: "/assets/disallowed/images/utbm_logo.png",
    isDarkIcon: true,
  },
  {
    date: "2015 ~ 2017",
    department: "산업공학 및 유지관리 공학",
    degree: "전문학사",
    score: "3.35/4.0",
    univName: "University Claude Bernard Lyon 1",
    country: "리옹 (프랑스)",
    details: ["전기, 전자, 열역학, 기계공학 기초 교육"],
    image: "/assets/disallowed/images/lyon_logo.png",
    isDarkIcon: true,
  },
];

export default function Screen04Education({
  screenRef,
  ...props
}: Screen04Props) {
  const context = useContext(QueryContext);

  return (
    <div
      ref={screenRef}
      {...props}
      className="relative flex h-fit min-h-screen w-full flex-col items-start justify-start bg-bgcolor p-4 sm:justify-start sm:px-2 sm:py-4 sm:pt-10 md:items-center"
    >
      <div
        style={{ "--color": "white" } as React.CSSProperties}
        className="gradient-border-to-right h-[2px] w-[98%] bg-line"
      ></div>
      <div className="mb-20 mt-10 self-start pl-10 text-[70px] font-bold sm:text-[40px]">
        Education
      </div>
      <div className={`relative flex w-full justify-end`}>
        <div className="flex w-fit flex-wrap justify-start justify-items-start sm:flex-col">
          {educationInfo.map((e, i) => (
            <CardComponent
              key={`${e.univName}-${i}`}
              style={
                {
                  "--imagebg": `url(${e.image})`,
                  "--opacitybg": e.isDarkIcon ? "0.15" : "0.07",
                  "--anim-index": `${i * 50 + 50}px`,
                } as React.CSSProperties
              }
              className={`${
                context?.activeSection === 3
                  ? "md:translate-y-0 md:opacity-100 lg:translate-y-0 lg:opacity-100"
                  : (context?.activeSection ?? 0) > 3
                    ? "md:-translate-y-[var(--anim-index)] md:opacity-0 lg:-translate-y-[var(--anim-index)] lg:opacity-0"
                    : "md:translate-y-[var(--anim-index)] md:opacity-0 lg:translate-y-[var(--anim-index)] lg:opacity-0"
              } academic-box transition-[transform, opacity] h-fit duration-1000 ease-in-out sm:w-full md:w-[45%] md:min-w-[500px] md:flex-1 lg:min-h-[430px] lg:w-[45%]`}
            >
              <img
                src={e.image}
                className={`${e.isDarkIcon ? "rounded-md bg-white p-2" : ""} absolute right-2 top-2 aspect-auto h-14 rounded-md sm:h-11`}
              />
              <span className="ml-4 text-[18px] sm:ml-0 sm:self-center sm:text-base">
                {e.date}
              </span>
              <div className="mb-4 mt-8 flex w-full items-center justify-between gap-4 sm:flex-col sm:items-start md:flex-wrap">
                <span className="sm:text-1xl text-3xl font-bold md:text-xl">
                  {e.univName} - {e.country}
                </span>
              </div>

              <span className="mb-4 text-2xl font-bold sm:text-xl md:text-xl">
                {e.department}
              </span>
              <div className="sm:text-md mb-4 flex gap-4 text-xl font-normal text-maincolor-100">
                <span>학위: {e.degree}</span>
                <span>학점: {e.score}</span>
              </div>

              <ul className="list-inside list-disc text-xl font-medium sm:text-base">
                {e.details.map((detail, i) => (
                  <li key={`detail-${detail}-${i}`}>{detail}</li>
                ))}
              </ul>
            </CardComponent>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Screen04Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}

interface EducationModel {
  details: string[];
  univName: string;
  department: string;
  degree: string;
  score: string;
  date: string;
  image: string;
  country: string;
  isDarkIcon?: boolean;
}
