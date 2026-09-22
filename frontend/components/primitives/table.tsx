"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Table as UITable,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Table({ className, ...props }: React.ComponentProps<typeof UITable>) {
  return (
    <UITable
      className={cn(
        "[&_tr]:border-edge/70 [&_thead]:bg-surface-raised/35",
        className,
      )}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
