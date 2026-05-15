"use client";

import { cn } from "@/lib/utils"; // Assuming utils exists or I'll just use string template

export default function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-green-100/50 ${className}`}
      {...props}
    />
  );
}
