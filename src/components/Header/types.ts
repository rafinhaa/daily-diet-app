import { PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren & {
  title?: string;
  type: "primary" | "secondary" | "info";
};
