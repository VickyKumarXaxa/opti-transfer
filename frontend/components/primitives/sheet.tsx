"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Sheet as UISheet,
  SheetClose,
  SheetContent as UISheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sheet({ ...props }: React.ComponentProps<typeof UISheet>) {
  return <UISheet {...props} />;
}

function SheetContent({
  className,
  side = "right",
  ...props
}: React.ComponentProps<typeof UISheetContent>) {
  return (
    <UISheetContent
      side={side}
      className={cn("border-edge/80 bg-surface/95 shadow-glow-soft", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
