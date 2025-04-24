import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Database } from "@/database.types";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label?: string;
  description?: string;
}

export type Zone = Database["public"]["Tables"]["zones"]["Row"];
export type Route = Database["public"]["Tables"]["routes"]["Row"];
