import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/master/admin-mobile-sidebar";
import { UserNav } from "@/components/layout/master/admin-user-nav";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6 lg:gap-8 ">
          <div className="hidden lg:block">
            <Link href={"#"} className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60 blur-lg" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white shadow-lg">
                  SX
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground tracking-tight">
                  Strivyx
                </span>
                <span className="text-xs text-muted-foreground">
                  Admin Dashboard
                </span>
              </div>
            </Link>
          </div>
          <div className={cn("block md:!hidden")}>
            <MobileSidebar />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search zones, players..."
              className="pl-8 bg-background shadow-none border-muted w-[300px]"
            />
            <kbd className="pointer-events-none absolute right-2 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted/50"
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
              3
            </span>
          </Button>
          <div className="h-6 w-px bg-border" />
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
