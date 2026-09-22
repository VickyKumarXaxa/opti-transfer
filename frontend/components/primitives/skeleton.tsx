"use client";

import * as React from "react";
import { cn } from "cn";

import { Skeleton as UISkeleton } from "@/components/ui/skeleton";

function Skeleton({
  className,
  ...props
}: React.ComponentProps<typeof UISkeleton>) {
  return (
    <UISkeleton
      className={cn("bg-edge/45 animate-pulse-glow", className)}
      {...props}
    />
  );
}

export { Skeleton };
