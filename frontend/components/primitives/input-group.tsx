"use client";

import * as React from "react";
import { cn } from "cn";

import {
  InputGroup as UIInputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

function InputGroup({
  className,
  ...props
}: React.ComponentProps<typeof UIInputGroup>) {
  return (
    <UIInputGroup
      className={cn(
        "border-edge/80 bg-surface-raised/60 text-foreground hover:border-edge-strong has-[[data-slot=input-group-control]:focus-visible]:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
