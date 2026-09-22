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
        "data-[variant=default]:border-info/65 data-[variant=default]:bg-info/12 data-[variant=default]:text-info",
        "data-[variant=secondary]:border-success/65 data-[variant=secondary]:bg-success/12 data-[variant=secondary]:text-success",
        "data-[variant=destructive]:border-danger/65 data-[variant=destructive]:bg-danger/12 data-[variant=destructive]:text-danger",
        "data-[variant=outline]:border-warning/65 data-[variant=outline]:bg-warning/12 data-[variant=outline]:text-warning",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
