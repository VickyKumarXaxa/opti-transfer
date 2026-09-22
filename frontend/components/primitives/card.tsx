"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Card as UICard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof UICard>) {
  return (
    <UICard
      size={size}
      className={cn(
        "border border-edge/60 bg-surface-gradient shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
