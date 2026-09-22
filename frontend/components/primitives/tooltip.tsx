"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Tooltip as UITooltip,
  TooltipContent as UITooltipContent,
  TooltipProvider as UITooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function TooltipProvider({
  delay = 120,
  ...props
}: React.ComponentProps<typeof UITooltipProvider>) {
  return <UITooltipProvider delay={delay} {...props} />;
}

function Tooltip({ ...props }: React.ComponentProps<typeof UITooltip>) {
  return <UITooltip {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof UITooltipContent>) {
  return (
    <UITooltipContent
      sideOffset={sideOffset}
      className={cn(
        "border border-info/65 bg-info/12 text-info shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
