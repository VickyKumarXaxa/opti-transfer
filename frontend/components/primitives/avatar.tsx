"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Avatar as UIAvatar,
  AvatarBadge as UIAvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof UIAvatar>) {
  return (
    <UIAvatar
      size={size}
      className={cn("shadow-glow-soft", className)}
      {...props}
    />
  );
}

function AvatarBadge({
  className,
  ...props
}: React.ComponentProps<typeof UIAvatarBadge>) {
  return (
    <UIAvatarBadge className={cn("shadow-glow-cyan", className)} {...props} />
  );
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
};
