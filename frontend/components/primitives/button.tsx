"use client";

import * as React from "react";
import { cn } from "cn";

import { Button as UIButton, buttonVariants } from "@/components/ui/button";

function Button({
  className,
  variant = "secondary",
  size = "default",
  ...props
}: React.ComponentProps<typeof UIButton>) {
  return (
    <UIButton
      variant={variant}
      size={size}
      className={cn("shadow-glow-soft", className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
