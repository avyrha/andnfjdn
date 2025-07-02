import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Button } from "@/components/ui/button";

export function TopNavBar() {
  return (
    <header className="h-16 bg-background border-b border-border sticky top-0 z-50 animate-slide-in-right">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - Greeting */}
        <div className="flex items-center">
          <div>
            <h2 className="font-inter font-semibold text-lg text-foreground">
              Good morning, Alex! 👋
            </h2>
            <p className="text-sm text-muted-foreground">
              Ready to land your dream internship?
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="w-full h-9 pl-10 pr-12 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-1.5 py-0.5 bg-muted rounded text-xs text-muted-foreground border">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          {/* Credits badge */}
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-muted rounded-lg">
            <CreditCardIcon className="w-4 h-4 text-primary" />
            <span className="font-inter font-semibold text-sm text-foreground">25 credits</span>
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-9 h-9"
          >
            <NotificationsIcon className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-xs text-destructive-foreground font-bold">3</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}