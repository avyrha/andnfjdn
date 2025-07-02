import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Button } from "@/components/ui/button";

export function TopNavBar() {
  return (
    <header className="h-16 bg-background shadow-elevation-6 sticky top-0 z-50 border-b border-border">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Greeting */}
        <div className="flex items-center">
          <span className="font-inter font-bold text-lg text-foreground">🙌 Good morning, Alex!</span>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <Button 
            variant="outline" 
            className="w-full justify-start bg-input border border-border rounded-[4px] h-8 px-3 text-left"
          >
            <SearchIcon sx={{ fontSize: 18, marginRight: 1 }} />
            <span className="text-muted-foreground text-sm flex-1">Search or jump to...</span>
            <div className="ml-auto px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground border">
              ⌘K
            </div>
          </Button>
        </div>

        {/* Right side - Credits and notifications */}
        <div className="flex items-center space-x-4">
          {/* Credits badge */}
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-[4px] bg-primary/10 border border-primary/20">
            <CreditCardIcon sx={{ fontSize: 18, color: 'hsl(var(--primary))' }} />
            <span className="font-inter font-medium text-sm text-primary">25 credits</span>
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-9 h-9 rounded-[4px] hover:bg-accent"
          >
            <NotificationsIcon sx={{ fontSize: 24 }} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-xs text-destructive-foreground font-bold">3</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}