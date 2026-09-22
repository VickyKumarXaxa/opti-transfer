"use client";

import * as React from "react";
import { cn } from "cn";

import {
  Combobox as UICombobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent as UIComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput as UIComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";

function Combobox({ ...props }: React.ComponentProps<typeof UICombobox>) {
  return <UICombobox {...props} />;
}

function ComboboxInput({
  className,
  showTrigger = true,
  showClear = true,
  ...props
}: React.ComponentProps<typeof UIComboboxInput>) {
  return (
    <UIComboboxInput
      showTrigger={showTrigger}
      showClear={showClear}
      className={cn(
        "w-full border-edge/80 bg-surface-raised/60 text-foreground hover:border-edge-strong focus-within:shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxContent({
  className,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof UIComboboxContent>) {
  return (
    <UIComboboxContent
      sideOffset={sideOffset}
      className={cn(
        "border border-edge/80 bg-surface-overlay/95 text-foreground shadow-glow-soft",
        className,
      )}
      {...props}
    />
  );
}

export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
