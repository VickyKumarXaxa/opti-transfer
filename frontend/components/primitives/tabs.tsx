"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Tabs as UITabs,
  TabsContent as UITabsContent,
  TabsList as UITabsList,
  TabsTrigger as UITabsTrigger,
  tabsListVariants,
} from "@/components/ui/tabs";

function Tabs({ ...props }: React.ComponentProps<typeof UITabs>) {
  return <UITabs {...props} />;
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof UITabsList>) {
  return (
    <UITabsList
      className={cn(
        "border border-edge/80 bg-surface-raised/55 text-subtle",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UITabsTrigger>) {
  return (
    <UITabsTrigger
      className={cn(
        "data-active:text-neon-cyan data-active:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof UITabsContent>) {
  return (
    <UITabsContent className={cn("text-foreground", className)} {...props} />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants };
