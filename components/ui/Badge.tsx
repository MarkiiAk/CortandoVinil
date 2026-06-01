import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-dm tracking-wider uppercase px-2.5 py-1 bg-cafe-claro/10 text-cafe-claro",
        className
      )}
    >
      {children}
    </span>
  );
}
