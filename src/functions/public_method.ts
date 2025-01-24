export const getColorByLanguage = ({
  entry,
  hasDefaultColor: defaultColor = false,
}: GetColorByLanguageProps): string => {
  let color;
  switch (entry) {
    case "TypeScript":
      color = "#3178c6";
      break;
    case "JavaScript":
      color = "#F0DB4F";
      break;
    case "Dart":
      color = "#00B4AB";
      break;
    case "HTML":
      color = "#E34F26";
      break;
    case "CSS":
      color = "#1572B6";
      break;

    default:
      color = defaultColor ? "#fff" : "";
      break;
  }
  return color;
};

interface GetColorByLanguageProps {
  entry: string;
  hasDefaultColor?: boolean;
}
