export default function TechnoIcon({ className, ...props }: TechnoIconsProps) {
  return (
    <img
      className={`h-14 w-14 rounded-md bg-maincolor-950 p-2 sm:h-11 sm:w-11 ${className}`}
      {...props}
    />
  );
}

interface TechnoIconsProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
