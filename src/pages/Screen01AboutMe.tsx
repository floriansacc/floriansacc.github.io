import CardComponent from "../components/CardComponent";

export default function Screen01AboutMe() {
  return (
    <div className="flex h-fit min-h-screen w-full flex-col items-center justify-center bg-bgcolor p-4 sm:justify-start sm:pt-10">
      <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:gap-0">
        <span className="text-center text-[70px] font-bold sm:text-[40px]">
          Florian SACCHETTI
        </span>
        <span className="text-center text-[50px] font-semibold italic sm:text-[32px]">
          Front-end Developer
        </span>
      </div>
      <div className="flex items-start justify-around gap-4 p-2 sm:flex-col-reverse sm:items-center">
        <div className="flex flex-col sm:w-full md:mt-5 md:w-fit lg:w-5/6">
          <CardComponent className="flex flex-col items-start justify-center text-2xl font-normal sm:w-full lg:w-[600px]">
            <p>
              앱 개발 분야에서 다양한 프로젝트를 경험하고 능숙하게 진행할 수
              있는 역량을 보유하고 있습니다.
            </p>
            <p>
              항상 새로운 경험이나 기술을 습득하고 성장하기 위하여 열정적이며,
              한 팀으로서 협력을 통해 효율적인 업무를 수행하기를 촉구합니다.
            </p>
          </CardComponent>
          <CardComponent className="flex flex-col items-start justify-center text-2xl font-normal sm:w-full lg:w-[600px]">
            <p>
              저는 5년 전부터 한국에서 거주하고 있는 프랑스에서 온{" "}
              <span className="font-bold">사체티 플로리안</span>입니다.
            </p>
            <p>
              현재 한국에서 프론트엔드 개발자로 활동하고 있으며 React,
              Javascript로 시작하여 Flutter, TypeScript 등 다양한 기술을
              활용하여 프로젝트를 진행해왔습니다.
            </p>
          </CardComponent>
        </div>
        <div className="aspect-auto overflow-hidden rounded-xl border-2 border-solid border-line bg-cover sm:w-[90%] md:w-80 lg:m-2 lg:w-80">
          <img src="/assets/images/profile_picture.jpeg" className="" />
        </div>
      </div>
    </div>
  );
}
