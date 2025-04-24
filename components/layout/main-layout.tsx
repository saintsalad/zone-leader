"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CLientHeader from "@/components/layout/client-header";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function MainLayout({ children }: { children: React.ReactNode }) {
  const noHeaderPaths = ["/login", "/signup"];
  const pathname = usePathname();

  // Check if current path starts with /master
  const isMasterRoute = pathname?.startsWith("/master");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative h-full bg-background max-w-7xl mx-auto">
        {!noHeaderPaths.includes(pathname) && !isMasterRoute && (
          <CLientHeader />
        )}
        <ScrollArea className="h-full">
          <div className="relative min-h-screen">{children}</div>
        </ScrollArea>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MainLayout;
