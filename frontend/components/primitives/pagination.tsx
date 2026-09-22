"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink as UIPaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Pagination({
  className,
  ...props
}: React.ComponentProps<typeof UIPagination>) {
  return <UIPagination className={cn("text-subtle", className)} {...props} />;
}

function PaginationLink({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof UIPaginationLink>) {
  return (
    <UIPaginationLink
      isActive={isActive}
      className={cn(
        isActive
          ? "border-edge-strong bg-surface-raised/60 text-neon-cyan shadow-glow-soft"
          : "hover:bg-surface-raised/45 hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
