import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopNavBar() {
  return (
    <header className="h-16 bg-background border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - User info and credits */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-mint to-sky rounded-full flex items-center justify-center">
              <span className="text-sm">😊</span>
            </div>
            <span className="font-inter font-medium text-foreground">Good morning, Alex!</span>
          </div>
          
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-mint/20 border border-mint/30">
            <span className="text-lg">💳</span>
            <span className="font-inter font-medium text-sm text-mint-foreground">25 credits left</span>
          </div>
        </div>

        {/* Right side - Search and notifications */}
        <div className="flex items-center space-x-4">
          {/* Command palette trigger */}
          <Button 
            variant="outline" 
            className="relative px-4 py-2 bg-input/50 hover:bg-input border-border/50 rounded-xl font-inter"
          >
            <span className="text-muted-foreground text-sm">Search or jump to...</span>
            <div className="ml-8 px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
              ⌘K
            </div>
          </Button>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-10 h-10 rounded-xl hover:bg-sidebar-accent"
          >
            <Bell className="h-5 w-5 text-sidebar-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-xs text-destructive-foreground font-bold">3</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}