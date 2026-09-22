"use client";

import * as React from "react";
import { cn } from "cn";

import {
  AlertDialog as UIAlertDialog,
  AlertDialogAction as UIAlertDialogAction,
  AlertDialogCancel as UIAlertDialogCancel,
  AlertDialogContent as UIAlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function AlertDialog({ ...props }: React.ComponentProps<typeof UIAlertDialog>) {
  return <UIAlertDialog {...props} />;
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogContent>) {
  return (
    <UIAlertDialogContent
      className={cn(
        "border border-edge/60 bg-surface/95 shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogAction({
  variant = "secondary",
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogAction>) {
  return (
    <UIAlertDialogAction
      variant={variant}
      className={cn(className)}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogCancel>) {
  return (
    <UIAlertDialogCancel
      className={cn("border-edge/70", className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
