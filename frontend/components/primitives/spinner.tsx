"use client";

import * as React from "react";
import { cn } from "cn";

import { Spinner as UISpinner } from "@/components/ui/spinner";

function Spinner({
  className,
  ...props
}: React.ComponentProps<typeof UISpinner>) {
  return <UISpinner className={cn("text-neon-cyan", className)} {...props} />;
}

export { Spinner };
