"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Toaster,
  Toast as UIToast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription as UIToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle as UIToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
} from "@/components/ui/toast";

function Toast({ className, ...props }: React.ComponentProps<typeof UIToast>) {
  return (
    <UIToast
      className={cn(
        "border-edge/80 bg-surface-overlay/95 text-foreground shadow-glow-soft",
        "data-[type=success]:border-success/65 data-[type=success]:bg-success/12 data-[type=success]:text-success data-[type=success]:shadow-glow-lime",
        "data-[type=info]:border-info/65 data-[type=info]:bg-info/12 data-[type=info]:text-info",
        "data-[type=warning]:border-warning/70 data-[type=warning]:bg-warning/12 data-[type=warning]:text-warning data-[type=warning]:shadow-glow-amber",
        "data-[type=error]:border-danger/70 data-[type=error]:bg-danger/14 data-[type=error]:text-danger",
        "data-[type=loading]:border-neon-cyan/60 data-[type=loading]:bg-neon-cyan/10 data-[type=loading]:text-neon-cyan",
        className,
      )}
      {...props}
    />
  );
}

function ToastTitle({
  className,
  ...props
}: React.ComponentProps<typeof UIToastTitle>) {
  return (
    <UIToastTitle
      className={cn(
        "group-data-[type=success]/toast:text-success group-data-[type=info]/toast:text-info group-data-[type=warning]/toast:text-warning group-data-[type=error]/toast:text-danger group-data-[type=loading]/toast:text-neon-cyan",
        className,
      )}
      {...props}
    />
  );
}

function ToastDescription({
  className,
  ...props
}: React.ComponentProps<typeof UIToastDescription>) {
  return (
    <UIToastDescription
      className={cn(
        "group-data-[type=success]/toast:text-success/80 group-data-[type=info]/toast:text-info/80 group-data-[type=warning]/toast:text-warning/80 group-data-[type=error]/toast:text-danger/85 group-data-[type=loading]/toast:text-neon-cyan/80",
        className,
      )}
      {...props}
    />
  );
}

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
};
