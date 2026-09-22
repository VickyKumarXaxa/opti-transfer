"use client";

import * as React from "react";
import { cn } from "cn";

import { Badge as UIBadge, badgeVariants } from "@/components/ui/badge";

function Badge({
  className,
  variant = "secondary",
  ...props
}: React.ComponentProps<typeof UIBadge>) {
  return (
    <UIBadge
      variant={variant}
      className={cn(
        "border-edge/80 bg-surface-raised/70 text-foreground",
        "data-[variant=default]:border-info/55 data-[variant=default]:bg-info/14 data-[variant=default]:text-info",
        "data-[variant=secondary]:border-success/55 data-[variant=secondary]:bg-success/12 data-[variant=secondary]:text-success",
        "data-[variant=destructive]:border-danger/60 data-[variant=destructive]:bg-danger/14 data-[variant=destructive]:text-danger",
        "data-[variant=outline]:border-warning/55 data-[variant=outline]:bg-warning/10 data-[variant=outline]:text-warning",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
