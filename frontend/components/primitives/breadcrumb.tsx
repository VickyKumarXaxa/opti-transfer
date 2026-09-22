"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem as UIBreadcrumbItem,
  BreadcrumbLink as UIBreadcrumbLink,
  BreadcrumbList as UIBreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Breadcrumb({
  className,
  ...props
}: React.ComponentProps<typeof UIBreadcrumb>) {
  return <UIBreadcrumb className={cn("text-subtle", className)} {...props} />;
}

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<typeof UIBreadcrumbList>) {
  return (
    <UIBreadcrumbList className={cn("text-subtle", className)} {...props} />
  );
}

function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<typeof UIBreadcrumbItem>) {
  return <UIBreadcrumbItem className={cn(className)} {...props} />;
}

function BreadcrumbLink({
  className,
  ...props
}: React.ComponentProps<typeof UIBreadcrumbLink>) {
  return (
    <UIBreadcrumbLink
      className={cn("hover:text-neon-cyan hover:text-glow-cyan", className)}
      {...props}
    />
  );
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
