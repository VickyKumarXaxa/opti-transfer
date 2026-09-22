"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Alert as UIAlert,
  AlertAction,
  AlertDescription as UIAlertDescription,
  AlertTitle as UIAlertTitle,
} from "@/components/ui/alert";

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof UIAlert>) {
  return (
    <UIAlert
      variant={variant}
      className={cn(
        "border-edge/80 bg-surface/55 text-foreground shadow-glow-soft",
        "data-[variant=default]:border-info/65 data-[variant=default]:bg-info/12 data-[variant=default]:text-info",
        "data-[variant=destructive]:border-danger/65 data-[variant=destructive]:bg-danger/12 data-[variant=destructive]:text-danger",
        className,
      )}
      {...props}
    />
  );
}

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertTitle>) {
  return (
    <UIAlertTitle
      className={cn(
        "text-foreground text-glow-cyan group-data-[variant=default]/alert:text-info group-data-[variant=destructive]/alert:text-danger",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDescription>) {
  return (
    <UIAlertDescription
      className={cn(
        "text-muted-foreground group-data-[variant=default]/alert:text-info/80 group-data-[variant=destructive]/alert:text-danger/80",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertAction, AlertDescription, AlertTitle };
