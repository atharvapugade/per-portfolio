import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glow-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
