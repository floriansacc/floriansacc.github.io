import jbnulogo from "./styles_css/JBNU_main1.png";
import utbmlogo from "./styles_css/utbmlogo.png";
import lyonlogo from "./styles_css/lyonlogo.png";
import edflogo from "./styles_css/Électricité_de_France_logo.png";
import enedislogo from "./styles_css/enedislogo.png";
import suezlogo from "./styles_css/Logo_SUEZ_ENVIRONNEMENT2.png";
import flophoto1 from "./styles_css/KakaoTalk_20230721_161254019.jpg";
import flophoto2 from "./styles_css/KakaoTalk_20230906_154056285.jpg";
import flophoto3 from "./styles_css/KakaoTalk_20230905_001233073.jpg";
import flophoto4 from "./styles_css/KakaoTalk_20230905_001306860.jpg";

import projectPhoto1 from "./styles_css/project1photo1.png";
import projectPhoto2 from "./styles_css/project1photo2.png";
import co2video from "./styles_css/co2molefraction.mp4";

import kakaoQr from "./styles_css/KakaoTalk_QR.jpg";

export const titleListNavigation = {
  en: "Index",
  fr: "Sommaire",
  kr: "목록",
};

export const listNavigation = {
  en: ["Presentation", "Academic Background", "Work Experience", "Projects"],
  fr: ["Présentation", "Education", "Expérience Professionnelle", "Projets"],
  kr: ["소개", "학력", "경력", "프로젝트"],
  entrySchool: {
    en: "Academic Background",
    fr: "Education",
    kr: "학력",
  },
  entryWork: {
    en: "Work Experience",
    fr: "Expérience Professionnelle",
    kr: "경력",
  },
  entryProject: {
    en: "Projects",
    fr: "Projets",
    kr: "프로젝트",
  },
};

export const test = [
  {
    id: 0,
    url: flophoto1,
  },
  {
    id: 1,
    url: flophoto2,
  },
  {
    id: 2,
    url: flophoto3,
  },
];

export const presentation = {
  en: {
    presTitle: "Presentation",
    src: [flophoto1, flophoto2, flophoto3],
    name: "Florian Sacchetti",
    intro1:
      "My name is Florian SACCHETTI, I am a 26 years-old French people born in Lyon, France",
    intro2:
      "Currently living in Korea, I am looking for a job in the Energy and Environment field",
  },
  fr: {
    presTitle: "Présentation",
    src: [flophoto1, flophoto2, flophoto3],
    name: "Florian Sacchetti",
    intro1:
      "Je m'appelle Florian SACCHETTI, j'ai 26 ans et je suis né à Lyon en France",
    intro2:
      "Je vis actuellement en Corée du Sud et je recherche un emploi dans le secteur de l'énergie et/ou l'environement",
  },
  kr: {
    presTitle: "자기 소개",
    src: [flophoto1, flophoto2, flophoto3],
    name: "사체티 플로리안",
    intro1: "저는 리옹, 프랑스에서 태어난 26살 사체티 플로리안입니다",
    intro2:
      "현재 한국에서 살고 있으며 환경/에너지 분야에서 취직을 하고자 합니다",
  },
};

export const schoolDetails = {
  jbnuimg: jbnulogo,
  jbnuExchangeimg: jbnulogo,
  utbmimg: utbmlogo,
  lyonimg: lyonlogo,
  enjbnu: [
    "2021-2023",
    "Jeonbuk National University - South Korea",
    `Environment and Energy Department (Master's Degree)`,
    "Carbon Dioxyde Storage",
    "Reservoir Simulation",
    "Carbon Neutral",
    "Basics of coding (Python, Matlab, HTML/CSS, JavaScript)",
    "Professor: Youngsoo Lee",
  ],

  frjbnu: [
    "2021-2023",
    "Université Nationale Jeonbuk - Corée du Sud",
    "Département Energie et Environement (Master)",
    "Stockage de dioxide de carbon",
    "Simulation de reservoir",
    "Neutralité carbone",
    "Base de la programmation (Python, Matlab, HTML/CSS, JavaScript)",
    "Professeur tuteur: Youngsoo Lee",
  ],

  krjbnu: [
    "2021-2023",
    "전북대학교 - 대한민국",
    `환경에너지융합학과 (석사)`,
    "이산화탄소지중저장",
    "저류층 시뮬레이션",
    "탄소중립",
    "코딩 (Python, Matlab, HTML/CSS, JavaScript)",
    "지도 교수: 이영수 교수",
  ],

  enjbnuExchange: [
    "2019-2021",
    "Jeonbuk National University - South Korea",
    `Exchange Program`,
    "Korean Language",
  ],

  frjbnuExchange: [
    "2019-2021",
    "Université Nationale Jeonbuk - Corée du Sud",
    `Programme d'échange`,
    "Etude de la langue coréenne",
  ],

  krjbnuExchange: [
    "2019-2021",
    "전북대학교 - 대한민국",
    `교환 학생`,
    "한국어학당",
  ],

  enutbm: [
    "2017-2021",
    "University of Technology of Belfort-Montbeliard - France",
    `Electrical Engineering (Master's Degree)`,
    "Power Electronics",
    "Electric Power Quality",
    "Renewable Energies",
  ],

  frutbm: [
    "2017-2021",
    "Université de Technologie de Belfort-Montbeliard - France",
    `Energie (Diplome d'ingénieur)`,
    `Electronique de puissance`,
    `Qualité de l'énergie`,
    "Energie renouvelable",
  ],

  krutbm: [
    "2017-2021",
    "UTBM, 벨포르 프랑스",
    "에너지공학과 (석사) ",
    "전력 전자",
    "전력 품질",
    "재생 에너지",
  ],

  enlyon: [
    "2015-2017",
    "University Claude Bernard Lyon 1 - France",
    `Maintenance Engineering (Undergraduate Degree)`,
    "Electricity, Electronics, Thermodynamic and Mechanic engineering basics",
  ],

  frlyon: [
    "2015-2017",
    "Université Claude Bernard Lyon 1 - France",
    `Génie Industriel et Maintenance (Diplome Universitaire de Technologie)`,
    `Etude de l'électricité, électronique, thermodynamique et mécanique`,
  ],

  krlyon: [
    "2015-2017",
    "끌로드 베흐노 리용 1 대학",
    "산업-유지관리공학 (전문학사)",
    "전기, 전자, 열역학, 기계공학 기초 교육",
  ],
};

export const workDetails = {
  edfimage: edflogo,
  enedisimage: enedislogo,
  suezimage: suezlogo,
  enedf: [
    "2018-2019",
    "EDF (French Electricity Produer) - Nuclear Power Plant, Bugey, France",
    "Six-month Internship",
    "Electrical Research and Development Department",
    "Propositon of modification on the lubrication shaft system by electric panel",
  ],
  fredf: [
    "2018-2019",
    "EDF (Electricité de France) - Centrale nucléaire du Bugey, France",
    "Stage de six mois",
    `Département électrique`,
    `Proposition de modification du système de lubrification de l'arbre de transmission par distributeur électrique`,
  ],
  kredf: [
    "2018-2019",
    "EDF (프랑스 전력공사) - 원자력 발전소, Bugey, 프랑스",
    "인턴십 (6개월)",
    "전기 개발 부서",
    " 배전반을 통해서 구동축의 윤활방식 변경 제안",
  ],

  enenedis: [
    "2017",
    "ENEDIS (French Operator of Electricity Distribution Grid) - Design Office, Lyon, France",
    "Three-month Intership",
    "Analysis of damage on electrical substation with different flood scenario",
  ],
  frenedis: [
    "2017",
    `ENEDIS (Distributeur d'électricité) - Bureau d'office, Lyon, France`,
    "Stage de trois mois",
    `Analyse des dommages causés par les différents scénarios d'inondation sur les postes électriques`,
  ],
  krenedis: [
    "2017",
    "ENEDIS (프랑스 배전공사) - 개발부서, 리옹, 프랑스",
    "인턴십 (3개월)",
    "홍수 시나리오에 따른 발전소 훼손 평가",
  ],

  ensuez: [
    "2017, 2018",
    "Suez Environment - Waste Management Office, Lyon, France",
    "Part-time Job",
    "Administrative work",
  ],
  frsuez: [
    "2017, 2018",
    `Suez Environment - Bureau de gestion des déchets, Lyon, France`,
    "Part-time Job",
    "Travail administratif",
  ],
  krsuez: [
    "2017, 2018",
    "수에즈 인바이론먼트 - 폐기물 처리 사무실, 리옹, 프랑스",
    "알바",
    "사무실 근무",
  ],
};

export const projectDetails = {
  photoproj1: [projectPhoto1, projectPhoto2],
  videoproj1: [co2video],
  descriptionPhoto: {
    fr: [
      "Modèle du reservoir vue de coté (haut) et vue de dessus (bas)",
      ` Evolution de la propagation du CO2 dans le reservoir en fonction du temps d'injection`,
    ],
    en: [
      "Reservoir model from the side (top) and above (bottom)",
      ` Evolution of the CO2 propagation inside the grid with injection time`,
    ],
    kr: [
      "사이드로(위), 위로(아래) 보이는 저류층 모델",
      ` 주입 시간에 따른 저류층 내의 CO2 확산`,
    ],
  },
  enproj1: [
    "Simulation study of CO2 geological storage in reservoir with hydraulic fractured horizontal well (Graduation thesis)",
    "Feasibility study of CO2 sequestration in tight sand reservoir by CO2 injection through horizontal well treated by hydraulic fracturing.",
    "Analysis of the CO2 migration in the reservoir to assess surface leakage risks.",
    "Influence of the different trapping mechanisms on CO2.",
  ],
  frproj1: [
    `Simulation de stockage géologique du CO2 en réservoir équipé d'un puit horizontal fracturé hydrauliquement (mémoire)`,
    `Étude de faisabilité de la séquestration du CO2 dans un réservoir de gas compact par injection dans un puit horizontal traité par fracturation hydraulique.`,
    `Evaluation du risque de fuite par l'analyse du mouvement du CO2 dans le réservoir.`,
    `Influence des différents mécanismes de piégeage de CO2.`,
  ],
  krproj1: [
    "수압 파쇄 수평정을 이용한 저류층에서의 이산화탄소 지중저장 시뮬레이션 연구 (학위논문)",
    `수압 파쇄로 처리된 수평정을 통해서 CO2 주입으로 지중저장 타당성 연구`,
    `지상 누출 및 저류층 내의 CO2 확산 분석평가`,
    `CO2 저장에 대한 트랩 메커니즘의 영향`,
  ],
  foldfrproj1: ["En savoir plus", "En savoir moins"],
  foldenproj1: [`Learn more`, "Learn less"],
  foldkrproj1: ["자세히 보기", "접기"],
  abstractfrproj1: [
    "Extrait (anglais)",
    `The excessive utilization of fossil fuels led to significant emissions of greenhouse gases, increasing the atmospheric carbon dioxide (CO2) concentration to alarming levels and contributing to global warming and climate change.`,
    `The global temperature in 2022 reached +1.16 degrees Celsius compared to pre-industrial levels and is on the trend to exceed the limit of +1.5 degrees Celsius fixed by the Paris Agreement in 2015. Following this, many countries, including Korea, announced plans for carbon neutrality by 2050 or earlier, meaning net carbon emissions of zero. The share of natural gas and oil as a primary energy source is kept high compared to other energy sources, and the consumption of natural gas is expected to increase until 2050, despite a decrease during the COVID-19 pandemic. One key technology that could help countries reduce their greenhouse gas emissions is Carbon Capture, Utilization, and Storage (CCUS). With this technology, CO2 is captured from large emission sources such as power plants, industries, and processing facilities. Carbon utilization (CCS) produces valuable items from CO2. In carbon sequestration (CCS), CO2 is sequestrated by permanent storage in geological formations such as depleted oil and gas reservoirs and saline aquifers. The CO2 can also be used for Enhanced Oil and Gas Recovery (EOR and EGR) to increase hydrocarbon production.`,
    `According to the International Energy Agency (IEA), the CCUS technology will account for around 18 percent of the reduction of greenhouse gas emissions in 2050. In search for more storage site possibilities to reach the fixed target of CO2 emission reduction, the attention is also focused on unconventional hydrocarbon reservoirs such as low permeability reservoirs. Among them, shale gas and tight sand reservoirs are recently studied for CO2 sequestration through different trapping mechanisms such as hysteresis trapping and adsorption of CO2 on rocks. Drilled by horizontal wells and enhanced by hydraulic fracturing, these reservoirs are already equipped with the equipment necessary for CO2 injection.`,
    `This study aims to evaluate the CO2 sequestration feasibility in a depleted tight sand reservoir located in British Colombia, Canada. The carbon dioxide injection process was incorporated into a production model where production has previously been matched. The study focused on one horizontal well treated by hydraulic fracturing, where 17 fracture stages were made, each separated by 47 meters. The injection rate has been optimized by adjusting the operational constraint to enable a stable and constant injection for ten years. We found that the surface gas injection can be maintained constant at a rate of 15,000 m3/day (28 tons of CO2 per day) for approximately ten years before reaching the bottom-hole pressure constraint. During the ten years, 100,000 tons of CO2 were injected. The constant injection of CO2 for an extended period was preferred over a larger but unstable rate since the greenhouse gas emission should be matched to store the CO2 efficiently. We also found that the CO2 does not propagate far in the matrix and mainly remains in the area where permeability has been enhanced through hydraulic fracturing. In a conventional reservoir, the injected CO2 would migrate to the top of the reservoir and encounters the cap rock. The difference in matrix permeability (average of 0.2 nD) compared to the fracture permeability (average of 15.97 mD) in our model is the main reason for the small propagation of CO2. Although this no-migration of CO2 is an obstacle to the CO2 amount that can be injected in the reservoir, it also effectively reduces the possibility of CO2 leakage to the surface, an important factor to consider for storage sites when designing a CCS project. A long-term simulation (100 years) confirmed the minor movement of CO2 in the matrix.`,
    `The injected CO2 is trapped in the reservoir by structural trapping, hysteresis trapping, and solubility trapping. We found that structural trapping is the primary trapping mechanism, accounting for 76 to 87 percent of the CO2 trapping. The residual trapping accounted for 10 percent of the sequestrated CO2, and the different models tested showed a similar trapping amount. The CO2 dissolved in water accounted for 2.9 to 14.3 percent of the CO2 trapping, with the ideal model of solubility showing the highest CO2 solubility. We also confirmed that a dual porosity model is essential to predict the movement of CO2 in the reservoir accurately. Despite a decrease in the total amount of CO2 stored in the reservoir, the residual trapping and dissolution of CO2 were relatively higher in the dual porosity, and the propagation of CO2 in the matrix fracture was higher than in the single porosity model. However, only a few tests have been made. Thus, a more sophisticated model is required to confirm the results.`,
    `In future studies, applying mineral trapping, water vaporization, and CO2 adsorption to the current model would help to predict the storage of CO2 accurately.`,
  ],
  abstractenproj1: [
    "Abstract",
    `The excessive utilization of fossil fuels led to significant emissions of greenhouse gases, increasing the atmospheric carbon dioxide (CO2) concentration to alarming levels and contributing to global warming and climate change.`,
    `The global temperature in 2022 reached +1.16 degrees Celsius compared to pre-industrial levels and is on the trend to exceed the limit of +1.5 degrees Celsius fixed by the Paris Agreement in 2015. Following this, many countries, including Korea, announced plans for carbon neutrality by 2050 or earlier, meaning net carbon emissions of zero. The share of natural gas and oil as a primary energy source is kept high compared to other energy sources, and the consumption of natural gas is expected to increase until 2050, despite a decrease during the COVID-19 pandemic. One key technology that could help countries reduce their greenhouse gas emissions is Carbon Capture, Utilization, and Storage (CCUS). With this technology, CO2 is captured from large emission sources such as power plants, industries, and processing facilities. Carbon utilization (CCS) produces valuable items from CO2. In carbon sequestration (CCS), CO2 is sequestrated by permanent storage in geological formations such as depleted oil and gas reservoirs and saline aquifers. The CO2 can also be used for Enhanced Oil and Gas Recovery (EOR and EGR) to increase hydrocarbon production.`,
    `According to the International Energy Agency (IEA), the CCUS technology will account for around 18 percent of the reduction of greenhouse gas emissions in 2050. In search for more storage site possibilities to reach the fixed target of CO2 emission reduction, the attention is also focused on unconventional hydrocarbon reservoirs such as low permeability reservoirs. Among them, shale gas and tight sand reservoirs are recently studied for CO2 sequestration through different trapping mechanisms such as hysteresis trapping and adsorption of CO2 on rocks. Drilled by horizontal wells and enhanced by hydraulic fracturing, these reservoirs are already equipped with the equipment necessary for CO2 injection.`,
    `This study aims to evaluate the CO2 sequestration feasibility in a depleted tight sand reservoir located in British Colombia, Canada. The carbon dioxide injection process was incorporated into a production model where production has previously been matched. The study focused on one horizontal well treated by hydraulic fracturing, where 17 fracture stages were made, each separated by 47 meters. The injection rate has been optimized by adjusting the operational constraint to enable a stable and constant injection for ten years. We found that the surface gas injection can be maintained constant at a rate of 15,000 m3/day (28 tons of CO2 per day) for approximately ten years before reaching the bottom-hole pressure constraint. During the ten years, 100,000 tons of CO2 were injected. The constant injection of CO2 for an extended period was preferred over a larger but unstable rate since the greenhouse gas emission should be matched to store the CO2 efficiently. We also found that the CO2 does not propagate far in the matrix and mainly remains in the area where permeability has been enhanced through hydraulic fracturing. In a conventional reservoir, the injected CO2 would migrate to the top of the reservoir and encounters the cap rock. The difference in matrix permeability (average of 0.2 nD) compared to the fracture permeability (average of 15.97 mD) in our model is the main reason for the small propagation of CO2. Although this no-migration of CO2 is an obstacle to the CO2 amount that can be injected in the reservoir, it also effectively reduces the possibility of CO2 leakage to the surface, an important factor to consider for storage sites when designing a CCS project. A long-term simulation (100 years) confirmed the minor movement of CO2 in the matrix.`,
    `The injected CO2 is trapped in the reservoir by structural trapping, hysteresis trapping, and solubility trapping. We found that structural trapping is the primary trapping mechanism, accounting for 76 to 87 percent of the CO2 trapping. The residual trapping accounted for 10 percent of the sequestrated CO2, and the different models tested showed a similar trapping amount. The CO2 dissolved in water accounted for 2.9 to 14.3 percent of the CO2 trapping, with the ideal model of solubility showing the highest CO2 solubility. We also confirmed that a dual porosity model is essential to predict the movement of CO2 in the reservoir accurately. Despite a decrease in the total amount of CO2 stored in the reservoir, the residual trapping and dissolution of CO2 were relatively higher in the dual porosity, and the propagation of CO2 in the matrix fracture was higher than in the single porosity model. However, only a few tests have been made. Thus, a more sophisticated model is required to confirm the results.`,
    `In future studies, applying mineral trapping, water vaporization, and CO2 adsorption to the current model would help to predict the storage of CO2 accurately.`,
  ],
  abstractkrproj1: [
    "초록",
    `산업혁명 이후에 화석연료가 과도하게 사용되어 온실가스가 대량으로 배출되었고, 이로 인한 대기중 이산화탄소 (CO2) 농도 증가는 지구 온난화 및 기후변화를 발생시켰다.`,
    `2022년 기준 지구표면의 온도 상승은 1.16℃에 도달하였으며 2015년 파리 협정에서 정한 온도 상승 제한인 1.5℃에 다가가고 있다. 이에 따라, 대한민국을 포함한 여러 국가가 탄소 순배출이 0인 탄소중립 목표를 선언하였다.
      코로나19 위기 시대를 제외하고 1차 에너지인 석유 및 천연가스의 공급량은 다른 수단에 비하여 상대적으로 높으며 2050년까지 천연가스의 몫이 꾸준히 증가할 전망이 나온다. 온실가스 배출을 상쇄할 수 있는 기술 중 CCUS(이산화탄소 포집, 활용∙저장) 기술은 유망한 기법 중 하나이다. 이 기법을 통해 온실가스 배출지에서 CO2를 포집하여 유용한 물질로 전환하거나(CCU) 고갈된 유∙가스전이나 염대수층에 주입하여 영구적으로 지중저장이 가능하다(CCS). 또한 생산량을 높이기 위하여 활용하는 오일∙가스회수증진(EOR, EGR) 기법을 통하여 CO2가 쓰이기도 한다.`,
    `국제에너지기구(IEA)에 따르면 2050년까지 CCUS 기술은 온실가스의 총 감축량의 18%를 담당한다고 평가된다. 이를 달성하기 위하여 가스전이나 염대수층 등 전통 저류층 뿐만 아니라 저투과성 지층의 비전통 저류층도 관심이 끌리고 있다. 이 중 셰일가스 및 치밀가스 저류층은 생산 과정을 위하여 수평정을 갖는 데다 수압 파쇄로 처리되어 있기 때문에 CO2를 주입하기 위해 필요한 설비를 갖고 있어 주입정으로 전환하는 과정이 가능하다.
      본 연구에서는 캐나다 브리티시 컬럼비아(British Columbia) 주에 위치한 치밀가스 저류층에 CO2 지중저장 가능성 및 타당성을 평가하고자 한다. CO2 주입 모델은 앞서 만들어진 생산 모델을 이어서 구축하였고, 저류층 모델은 수평정이 하나이며 47미터 간격으로 생긴 17개의 단계로 구성하였다. CO2를 효율적으로 저장하기 위해 주입량을 산출할 때 주입량이 크지만 불안정한 단기간 주입을 선택하지 않고 장기간 주입 계획을 선택하였고, 장기간 동안 안정적이고 일정하게 CO2를 주입하기 위해 주입조건 조절을 통해 주입량을 최적화하였다.`,
    `결과적으로 10년동안 하루당 15,000m3(하루당 28톤)의 CO2 주입이 가능하며 총 10만톤의 CO2를 주입할 수 있었다. 10년이 지난 이후는 설정한 bottom-hole 압력 조건에 도달하여 주입량이 줄어든다. 구축한 모델에 주입한 CO2는 수압 파쇄에 의하여 투과도가 증가한 영역인 균열 영역에 머물며 이동하지 않은 것으로 확인되었다. 또한 균열 투과도(평균 15.97mD)와 암석 투과도(평균 0.2nD) 차이가 크기 때문에 이동하지 않아 전통 탄화수소 저류층보다 저장이 가능한 CO2 양이 제한되지만 저장소를 결정하기에 중요한 요인인 CO2 누출을 효과적으로 방지하는 것을 확인하였고, 장기간 시뮬레이션을 통하여 암석 내의 이동이 없는 것을 확인하였다.`,
    `주입한 CO2는 구조 트랩, 잔류 트랩, 용해 트랩 메커니즘에 의하여 격리된 것으로 보인다. 구조 트랩이 76-87%로 가장 큰 양을 차지하며 잔류 트랩이 10%, 용해 트랩이 2.9-14.3%를 차지하는 것으로 나타났다. 용해 트랩 양은 용해 모델에 따라서 큰 폭으로 변동되었으나 이상모델이 가장 높았으며 CO2를 용해하는 데에 정확한 모델로 알려진 모델이 가장 적은 양을 보였다. 추후 연구에서는 광물화 트랩, 물 기화(water vaporization), 이원공극(dual porosity), CO2 흡착이라는 현상을 감안하는 모델로 정밀한 CO2 격리를 예측할 수 있을 것으로 기대된다.`,
  ],
};

export const footerInfo = {
  enfooter: [
    "Contact",
    "E-mail:",
    "florian.sacchetti@gmail.com",
    "Phone:",
    "+82 (0)10-8391-7997",
    "Kakao:",
    "Instagram:",
  ],
  frfooter: [
    "Contact",
    "E-mail :",
    "florian.sacchetti@gmail.com",
    "Telephone :",
    "+82 (0)10-8391-7997",
    "Kakao :",
    "Instagram :",
  ],
  krfooter: [
    "연락처",
    "이메일:",
    "florian.sacchetti@gmail.com",
    "전화번화:",
    "010-8391-7997",
    "카카오:",
    "인스타그램:",
  ],
  kakaoImg: kakaoQr,
  instaImg:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/225px-Instagram_logo_2022.svg.png",
  enAppear: [
    "Scan the QR code to add my Kakao profil. ",
    "Click on it to go back",
  ],
  frAppear: [
    "Scannez le QR code pour ajouter mon profil Kakao. ",
    "Cliquez dessus pour revenir en arrière",
  ],
  krAppear: [
    "QR 코드를 통해서 카카오 프로필을 추가하세요. ",
    "QR 코드를 클릭하여 뒤로 돌아오기",
  ],
  frsignature: [`Cette page a été codé exclusement et intégralement par moi`],
  ensignature: [`This page has been coded exclusively and fully by me`],
  krsignature: [`이 웹사이트 전체로 본인의 작업으로 설계한 것이다.`],
};
