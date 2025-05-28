import { cn } from "@/lib/utils";

export function SparklesCore({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div className="relative w-full h-full">
        {/* Sparkle effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
      </div>
    </div>
  );
}
