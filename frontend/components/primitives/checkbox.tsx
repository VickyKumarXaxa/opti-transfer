"use client";

import * as React from "react";
import { cn } from "cn";

import { Checkbox as UICheckbox } from "@/components/ui/checkbox";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof UICheckbox>) {
  return (
    <UICheckbox
      className={cn(
        "border-edge/80 bg-surface-raised/50 data-checked:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export { Checkbox };
