"use client";

import * as React from "react";
import { cn } from "cn";

import { Textarea as UITextarea } from "@/components/ui/textarea";

function Textarea({
  className,
  ...props
}: React.ComponentProps<typeof UITextarea>) {
  return (
    <UITextarea
      className={cn(
        "border-edge/80 bg-surface-raised/60 text-foreground hover:border-edge-strong focus-visible:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
