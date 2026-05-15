export default function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-green-100/50 ${className || ""}`}
      {...props}
    />
  );
}
