"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Sidebar as UISidebar,
  SidebarContent as UISidebarContent,
  SidebarFooter as UISidebarFooter,
  SidebarGroup as UISidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader as UISidebarHeader,
  SidebarInput as UISidebarInput,
  SidebarInset as UISidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider as UISidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger as UISidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

function SidebarProvider({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarProvider>) {
  return (
    <UISidebarProvider
      className={cn("bg-abyss bg-grid text-foreground", className)}
      {...props}
    />
  );
}

function Sidebar({
  className,
  variant = "floating",
  collapsible = "icon",
  ...props
}: React.ComponentProps<typeof UISidebar>) {
  return (
    <UISidebar
      variant={variant}
      collapsible={collapsible}
      className={cn("text-foreground", className)}
      {...props}
    />
  );
}

function SidebarInset({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarInset>) {
  return (
    <UISidebarInset
      className={cn("bg-surface-gradient text-foreground", className)}
      {...props}
    />
  );
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarInput>) {
  return (
    <UISidebarInput
      className={cn(
        "border-edge/80 bg-surface-raised/60 text-foreground hover:border-edge-strong",
        className,
      )}
      {...props}
    />
  );
}

function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarHeader>) {
  return (
    <UISidebarHeader
      className={cn("border-b border-edge/50", className)}
      {...props}
    />
  );
}

function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarFooter>) {
  return (
    <UISidebarFooter
      className={cn("border-t border-edge/40", className)}
      {...props}
    />
  );
}

function SidebarContent({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarContent>) {
  return (
    <UISidebarContent
      className={cn("bg-surface/80 text-foreground", className)}
      {...props}
    />
  );
}

function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UISidebarTrigger>) {
  return (
    <UISidebarTrigger
      className={cn(
        "text-foreground hover:text-neon-cyan hover:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

const SidebarGroup = UISidebarGroup;

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
