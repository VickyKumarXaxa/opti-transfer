"use client";

import * as React from "react";
import { cn } from "cn";

import { Separator as UISeparator } from "@/components/ui/separator";

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof UISeparator>) {
  return <UISeparator className={cn("bg-edge/70", className)} {...props} />;
}

export { Separator };
