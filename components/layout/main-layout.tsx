"use client";

import React from "react";
import CLientHeader from "@/components/layout/client-header";
import { usePathname } from "next/navigation";

function MainLayout({ children }: { children: React.ReactNode }) {
  const noHeader = ["/login", "/signup"];
  const pathname = usePathname();
  return (
    <div>
      {!noHeader.includes(pathname) && <CLientHeader />}
      {children}
    </div>
  );
}

export default MainLayout;
