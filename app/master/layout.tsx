import Header from "@/components/layout/master/admin-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/layout/master/admin-sidebar";

function MasterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 h-full">
          <ScrollArea className="h-full">
            <div className="mx-auto max-w-7xl pt-20 px-4 sm:px-6 lg:px-8">
              <div className="py-8">{children}</div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}

export default MasterLayout;
