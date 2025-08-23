import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import DetailsWrapper from "../../components/DetailsWrapper";

export default function LocaplaceDetails() {
  const [openFolder, setOpenFolder] = useState<{
    mobile: boolean;
    web: boolean;
  }>({ mobile: true, web: true });

  return (
    <DetailsWrapper>
      <div className="flex flex-col gap-4 break-keep text-justify sm:mb-24 md:mb-10">
        <img
          className="my-10 max-w-[500px] self-center px-20"
          src="/assets/disallowed/svg/hanaro_logo.svg"
        />
        <span className="text-xl font-semibold">
          개발은 '더하나로' (2차)라는 앱을 만드는 작업이었으며 이 개발은
          프론트엔드 2명, 백엔드 1명, 디자인 2명을 구성으로 진행하였습니다.
        </span>

        <h3 className="">분야</h3>
        <span>
          앱은 의료 관련 앱이며 주로 건강검진 및 자기 몸 관리를 위한 앱입니다.
        </span>
        <span>
          기존의 더하나로 1차 앱이 존재하였음에도 불구하고 새로운 처음부터 다시
          시작하여서 첫 개발부터 출시까지 담당하고 경험하였습니다.
        </span>
        <div
          className={`${openFolder.mobile ? "h-auto" : "h-11"} flex flex-col gap-4 overflow-hidden rounded-md bg-maincolor-800 transition-[height] duration-300`}
        >
          <button
            className="flex select-none items-center justify-between bg-maincolor-200 px-4 py-2 text-xl font-bold text-black transition-all md:hover:text-maincolor-700"
            onClick={() =>
              setOpenFolder((prev) => ({ ...prev, mobile: !prev.mobile }))
            }
          >
            <p>모바일 개발</p>
            <FaChevronUp
              className={`${openFolder.mobile ? "rotate-180" : ""} transition-all duration-300`}
            />
          </button>
          <ol className="flex flex-col gap-4 px-4 py-2">
            <li>
              맡은 역할은 프론트엔드 기능 구현을 운영 서버와 연결하고 보다
              원활한 개발을 위하여 API 모델, 받는 방식 등을 백엔드와 합의해서
              표준화했습니다.
            </li>
            <li>
              디자인 구현은 디자인 팀한테 제작한 대로 구현하였으며 개발하면서
              사용자의 편의를 향상하기 위해서 디자인 팀과 의견을 나눠서
              개선하도록 했습니다.
            </li>
            <li>
              기능 중에 휴대폰 내의 건강데이터인 걸음수, 활동 시간 및 칼로리소모
              연동을 진행했습니다.
            </li>
            <li>
              기존 앱이나 다른 크로스 플랫폼으로 만들어진 앱이 Android의
              건강데이터를 가져오기 위하여 Google에서 제공해줬던 Google Fit
              API를 사용하였으나 이는 deprecated 되어서 새로운 프로젝트에서 더
              이상 활용하지 못하기 때문에 새로운 API인 헬스 커넥트를 이용한
              건강데이터 가져오는 기능을 설계하였습니다.
            </li>
            <li>
              이를 개발하면서 iOS 및 Android가 가지고 있는 특징을 고려해 각종
              permission 및 데이터 처리 방식을 관리해서 개발했으며 여러 가지
              휴대폰으로 테스트하면서 최종 개발을 마쳤습니다.
            </li>
            <li>
              또한 앱 안에는 매일 다양한 미션을 제공할 수 있도록 개발했습니다.
            </li>
            <li>
              이는 페이지 확인하기, 정보 기록하기 및 퀴즈 풀기 등 여러 가지
              미션이 있으며 이를 세분화된 모델을 활용하여 미션 조건이 충족되면
              API를 통하여 서버에게 미션 결과 등록을 보낸 후에 응답에 따라
              처리했습니다.
            </li>
            <li>
              서버에서 부정행위 및 이중 결과 등록을 확인하기 때문에 '성공'이
              아닌 결과를 받을 수 있어 성공하지 않았을 경우도 토스트나 메시지
              띄우는 방식으로 설계하였습니다.
            </li>
            <li>
              사용자의 결과를 나타낼 수 있는 그래프 기능도 FL Chart이라는
              패키지를 활용하여 만들어봤습니다.
            </li>
            <li>
              표시할 데이터가 다양한 것을(수면시간, 체중, 총 걸음수 등) 감안해
              개발 및 추후 유지보수의 편의를 위한 복합적인 컴포넌트를 만드는
              방식으로 개발했습니다.
            </li>
            <li>
              앱 개발 단계에서 앱 내 데이터베이스 구축하기로 하였으니 MySQL
              기반인 데이터베이스 운영하면서 DB에 관한 기본 지식을 얻었으며 이를
              바탕으로 계속 기기 내 데이터베이스를 개선해왔습니다.
            </li>
            <li>
              앱 성능을 높이고 개발을 고도화하기 위해서 지속적인 성능 개선 및
              리팩토링을 진행하였습니다.
            </li>
            <li>
              주요 개선 사항은 컴포넌트화, package화 (다른 프로젝트에서 바로
              활용할 수 있도록), 새로운 기술(mixin, provider 개선, 등등) 활용도
              높였습니다.
            </li>
            <li>
              이 앱을 개발하면서 Firebase Messaging 연동, 다중 소셜 로그인 구현,
              카카오톡 메시지 공유, 딥링크 등 추가 기능을 활용할 수 있었습니다.
            </li>
            <li>
              앱 출시 단계에서 원활한 출시를 위하여 각 플랫폼의 permission를
              정리하고 Android의 AndroidManifest.xml 및 Apple의 Info.plist를
              정리했습니다.
            </li>
            <li>
              이 전에도 TestFlight 업로드 및 빌드를 관리하기도 하고 앱 심사를
              위한 Apple 및 Google의 요구 사항을 수행하기도 했습니다.
            </li>
            <li>
              이 덕분에 App Store의 심사 때 백엔드 문제 하나만 제외하면 심사를
              순조롭게 통과했습니다.
            </li>
            <li>
              두번째 프로젝트는 기존에 출시되어 있었던 앱의 유지 보수를 했으며
              이는 앱 부분적인 리팩토링 및 개선을 했습니다.
            </li>
            <li>
              주로 Provider(Bloc) 개선, Router 설정, 기존 앱에 없었던 구체적인
              모델 만들기, API 및 서버 status code에 대한 오류 처리를 했습니다.
            </li>
            <li>
              웹 개발은 개발하는 모바일 앱의 운영, 홍보 및 통계분석을 위해서
              진행하였습니다.
            </li>
            <li>
              관리자가 앱을 운영할 수 있게 하는 관리자 페이지를 개발했습니다.
            </li>
            <li>
              주로 구현한 기능은 in-app 메시지 보내기, 공지사항 운영 (추가,
              삭제, 수정), 앱의 Webview 관리입니다.
            </li>
          </ol>
        </div>
        <div
          className={`${openFolder.web ? "h-auto" : "h-11"} flex flex-col gap-4 overflow-hidden rounded-md bg-maincolor-800 transition-[height] duration-300`}
        >
          <button
            className="flex select-none items-center justify-between bg-maincolor-200 px-4 py-2 text-xl font-bold text-black transition-all md:hover:text-maincolor-700"
            onClick={() =>
              setOpenFolder((prev) => ({ ...prev, web: !prev.web }))
            }
          >
            <p>웹 개발</p>
            <FaChevronUp
              className={`${openFolder.web ? "rotate-180" : ""} transition-all duration-300`}
            />
          </button>
          <ol className="flex flex-col gap-4 px-4 py-2">
            <li>
              웹은 React 프레임워크로 개발했으며 Vite, Tailwind도 활용했습니다.
            </li>
            <li>
              백엔드인 PHP와 연동하기 위해서 Laravel을 구축되었고 백엔드를 많이
              다루지 않았으나 기본적인 Controller 및 Navigator를 위한 사이트맵을
              만들었습니다.
            </li>
            <li>
              통계 페이지는 Google Analytics같은 통계분석을 위한 페이지며 앱에
              대한 접속자(성별, 연령별, 기기별)를 나타내는 페이지입니다.
            </li>
            <li>
              통계는 그래프로 나오도록 Chart.js를 활용해서 데이터를 나타내는
              각종 그래프(Bar, Stacked bar, Line, Pie, Doughnut)를 만들어
              구축하였습니다.
            </li>
            <li>
              그래프를 뿐만 여러 기간을 설정할 수 있도록 구축하였고, 그래프마다
              원하는 사이즈의 이미지로 저장하는 기능을 만든 데다 그래프의
              데이터를 CSV로 다운로드할 수 있는 기능도 설계했습니다.
            </li>
            <li>소개 페이지는 앱을 고객에게 앱을 소개해주는 역할을 합니다.</li>
            <li>
              해당 페이지는 간단하게 구축되어 있는데도 여러 가지 애니메이션들을
              만들고자 했습니다.
            </li>
            <div className="flex gap-8 sm:flex-col md:flex-col">
              <div className="flex w-full items-start gap-2 sm:justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-[500px] sm:max-h-none sm:w-[45%] sm:max-w-none md:max-h-[400px] lg:w-1/2"
                >
                  <source
                    type="video/mp4"
                    src="/assets/disallowed/videos/project_1_video_1.mp4"
                  />
                </video>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-[500px] sm:max-h-none sm:w-[45%] sm:max-w-none md:max-h-[400px] lg:w-1/2"
                >
                  <source
                    type="video/mp4"
                    src="/assets/disallowed/videos/project_1_video_2.mp4"
                  />
                </video>
              </div>
              <div className="flex max-w-[300px] flex-col self-end">
                <span className="mr-1 w-full text-sm text-maincolor-200 sm:text-sm">
                  *이 이미지는 하나로의료재단의 소유이며, 상업적 목적으로
                  사용하지 않을 것이며, 오직 참고 및 개인적인 용도로만 활용할
                  것입니다
                </span>
                <span className="mr-1 self-end text-sm italic text-maincolor-200 sm:text-sm">
                  출처:{" "}
                  <a href="https://thehanaro.com" target="_blank">
                    https://thehanaro.com
                  </a>
                </span>
              </div>
            </div>
            <li>
              해당 웹의 프론트엔드 작업은 혼자 수행하였으며 웹에 대한 지식을
              많이 얻었습니다.
            </li>
            <li>
              또한 페이지 만든 다음에 잘 작동하는 상태에서도 계속 성능을
              향상하기 위하여 작업했습니다 (React의 re-rendering을 최소화하고,
              useMemo를 활용하는 등).
            </li>
          </ol>
        </div>

        <p>
          웹 소개 페이지 주소:
          <br />
          <a
            className="underline"
            href="https://thehanaro.co.kr"
            target="_blank"
          >
            https://thehanaro.co.kr
          </a>
        </p>

        <p className="text-start">
          (임시 주소이며 서버 이전 시 <br />
          <a
            className="underline"
            href="https://thehanaro.com/"
            target="_blank"
          >
            https://thehanaro.com/
          </a>
          로 확인 바랍니다)
        </p>
      </div>
    </DetailsWrapper>
  );
}
