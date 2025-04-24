"use client";

import React from "react";
import CLientHeader from "@/components/layout/client-header";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

function MainLayout({ children }: { children: React.ReactNode }) {
  const noHeaderPaths = ["/login", "/signup"];
  const pathname = usePathname();

  // Check if current path starts with /master
  const isMasterRoute = pathname?.startsWith("/master");

  return (
    <div className="relative h-full bg-background">
      {!noHeaderPaths.includes(pathname) && !isMasterRoute && <CLientHeader />}
      <ScrollArea className="h-full">
        <div className="relative min-h-screen">{children}</div>
      </ScrollArea>
    </div>
  );
}

export default MainLayout;
