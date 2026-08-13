import type { ComponentPropsWithoutRef } from "react";

export type ButtonLabelTone = "gradient" | "light";

export type ButtonLabelProps = ComponentPropsWithoutRef<"span"> & {
  tone?: ButtonLabelTone;
};
