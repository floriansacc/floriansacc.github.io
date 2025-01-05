export default function CardComponent({
  children,
  className,
  ...props
}: CardComponentProps) {
  return (
    <div
      {...props}
      className={`m-2 gap-4 break-keep rounded-md bg-maincolor-700 p-6 sm:m-0 sm:my-2 sm:px-3 sm:py-4 ${className}`}
    >
      {children}
    </div>
  );
}

interface CardComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
