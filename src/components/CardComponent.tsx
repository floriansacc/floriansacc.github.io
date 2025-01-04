export default function CardComponent({
  children,
  className,
  ...props
}: CardComponentProps) {
  return (
    <div
      {...props}
      className={`bg-maincolor-700 m-2 gap-4 break-keep rounded-md p-6 sm:m-0 sm:my-2 ${className}`}
    >
      {children}
    </div>
  );
}

interface CardComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
