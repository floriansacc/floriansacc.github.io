import { useState, useEffect, MutableRefObject } from "react";
import useScreenSize from "../hooks/useScreenSize";
import SkillStackAboutMe from "./SkillStackAboutMe";

export default function Screen01AboutMe({
  screenRef,
  ...props
}: Screen01Props) {
  const [randomTranslation, setRandomTranslation] = useState<number[]>([0, 0]);

  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (isMobile) {
      setRandomTranslation([0, 0]);
      return;
    }

    const rand = Math.floor(Math.random() * 16);
    const rand2 = Math.floor(Math.random() * 16);
    setRandomTranslation([rand, rand2]);
  }, [isMobile]);

  return (
    <div
      ref={screenRef}
      className="flex h-fit min-h-screen w-full flex-col items-center justify-center bg-bgcolor p-4 sm:justify-start sm:px-2 sm:pt-10"
      {...props}
    >
      <div className="flex w-full items-center justify-around sm:flex-col sm:px-2 md:mt-4 md:items-center">
        <div className="mb-10 flex flex-col items-start justify-center gap-4 break-keep px-10 sm:items-center sm:gap-0 sm:px-2 md:flex-wrap lg:w-[65%]">
          {/* <span className="text-2xl font-normal sm:text-center sm:text-xl md:px-6 md:text-xl">
            저는 5년 전부터 한국에서 거주하고 있는 프랑스에서 온{" "}
          </span> */}
          {/* <p className="text-center text-[70px] font-bold sm:text-[32px] md:px-6 md:text-[44px]">
            <span>SACCHETTI Florian</span>
            <br className="md:hidden lg:hidden" />
            입니다
          </p> */}
          <span className="text-center text-[70px] font-bold sm:text-[32px] md:px-6 md:text-[44px]">
            SACCHETTI Florian
          </span>
          <span className="self-center text-[50px] font-semibold italic sm:text-[28px] md:text-[36px]">
            Front-end Developer
          </span>
        </div>
        <div className="flex items-center justify-center lg:w-[35%]">
          <div
            style={{
              backgroundImage: 'url("/assets/allowed/svg/Flag_of_France.svg")',
            }}
            className="relative min-w-[200px] rounded-xl border-2 border-solid border-white bg-contain sm:mb-10 sm:w-[60%] md:w-60 lg:m-2 lg:w-80"
          >
            <div className="gradient-border-center bottom absolute inset-0 h-[1px]"></div>
            <img
              src="/assets/allowed/images/profile_picture.jpeg"
              className={`sticky left-0 top-0 rounded-xl border-2 border-solid border-line/50 sm:translate-x-0 sm:translate-y-0 sm:border-0`}
              style={{
                transform: `translate(-${randomTranslation[0]}px, -${randomTranslation[1]}px)`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between sm:flex-col md:mt-6 md:flex-wrap lg:mt-10">
        <div className="flex w-full flex-col items-start justify-start gap-4 p-2 px-10 sm:w-full sm:flex-col sm:items-center sm:px-2 md:mt-5 md:w-full lg:w-[65%]">
          <div className="relative mb-10 flex flex-col items-start justify-center gap-4 py-4 pl-2 pr-8 text-2xl font-normal sm:w-full sm:px-0 sm:text-xl md:text-xl lg:w-full">
            <div className="gradient-border-center absolute inset-0 -top-1 h-[1px]"></div>
            <span>
              현재 한국에서 프론트엔드 개발자로 활동하고 있습니다.
              {/* <span className="font-bold underline underline-offset-[3px]">
                적극적인 구직 활동에 있어
              </span>{" "}
              새로운 팀과 함께 성장하며 제 역량을 강화할 수 있는 기회를 찾고
              있습니다. */}
            </span>
            <p>
              주로 <span className="git-bg-variable">React</span>,{" "}
              <span className="git-bg-variable">Javascript</span> 기술로 개발을
              시작하여 <span className="git-bg-variable">Flutter</span>,{" "}
              <span className="git-bg-variable">TypeScript</span> 등 다양한 기술
              스텍으로 활용하여 여러 프로젝트를 진행해왔습니다.
            </p>
          </div>
          {/* <div className="relative flex flex-col items-start justify-center gap-4 py-4 pl-2 pr-8 text-2xl font-normal sm:w-full sm:px-0 sm:text-xl md:text-xl lg:w-full">
            <div className="gradient-border-center absolute inset-0 -top-1 h-[1px]"></div>
            <p>
              앱 개발 분야에서 다양한 프로젝트를 경험하고 능숙하게 진행할 수
              있는 역량을 보유하고 있습니다.
            </p>
            <p>
              인생을 살면서 항상 새로운 경험이나 기술을 습득하고 성장하기 위하여
              열정적이며, 한 팀으로서 협력을 통해 효율적인 업무를 수행하기를
              촉구합니다.
            </p>
          </div> */}
        </div>

        <SkillStackAboutMe />
      </div>
    </div>
  );
}

interface Screen01Props extends React.HTMLAttributes<HTMLDivElement> {
  screenRef: MutableRefObject<HTMLDivElement | null>;
}
