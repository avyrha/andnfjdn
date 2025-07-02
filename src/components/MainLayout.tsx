import { AppSidebar } from "./AppSidebar";
import { TopNavBar } from "./TopNavBar";
import { useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="flex w-full">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <AppSidebar />
        </div>

        {/* Mobile Sidebar Overlay - Full Screen Coverage */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop with higher z-index */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"
              onClick={() => setSidebarOpen(false)}
            />
            {/* Sidebar with even higher z-index */}
            <div className="absolute left-0 top-0 h-full w-80 z-20 animate-slide-in-left">
              <AppSidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0">
          <TopNavBar onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}