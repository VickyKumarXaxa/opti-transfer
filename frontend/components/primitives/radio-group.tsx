"use client";

import * as React from "react";
import { cn } from "cn";

import {
  RadioGroup as UIRadioGroup,
  RadioGroupItem as UIRadioGroupItem,
} from "@/components/ui/radio-group";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof UIRadioGroup>) {
  return (
    <UIRadioGroup className={cn("text-foreground", className)} {...props} />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof UIRadioGroupItem>) {
  return (
    <UIRadioGroupItem
      className={cn(
        "border-edge/80 bg-surface-raised/50 data-checked:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export { RadioGroup, RadioGroupItem };
