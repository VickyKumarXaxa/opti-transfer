"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Select as UISelect,
  SelectContent as UISelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger as UISelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Select({ ...props }: React.ComponentProps<typeof UISelect>) {
  return <UISelect {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof UISelectTrigger>) {
  return (
    <UISelectTrigger
      size={size}
      className={cn(
        "border-edge/80 bg-surface-raised/60 text-foreground hover:border-edge-strong focus-visible:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

function SelectContent({
  className,
  ...props
}: React.ComponentProps<typeof UISelectContent>) {
  return (
    <UISelectContent
      className={cn(
        "border border-edge/80 bg-surface-overlay/95 text-foreground shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
