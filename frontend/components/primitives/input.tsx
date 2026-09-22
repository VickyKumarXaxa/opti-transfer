"use client";

import * as React from "react";
import { cn } from "cn";

import { Input as UIInput } from "@/components/ui/input";

function Input({ className, ...props }: React.ComponentProps<typeof UIInput>) {
  return (
    <UIInput
      className={cn(
        "border-edge/80 bg-surface-raised/60 text-foreground hover:border-edge-strong focus-visible:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
