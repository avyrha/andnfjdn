import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Button } from "@/components/ui/button";

export function TopNavBar() {
  return (
    <header className="h-16 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 animate-slide-in-right">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - Greeting */}
        <div className="flex items-center space-x-3">
          <WavingHandIcon sx={{ fontSize: 24, color: '#f59e0b' }} />
          <div>
            <h2 className="font-inter font-semibold text-lg text-foreground">
              Good morning, Alex!
            </h2>
            <p className="text-sm text-muted-foreground">
              Ready to land your dream internship?
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" sx={{ fontSize: 18 }} />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="w-full h-10 pl-10 pr-16 bg-background border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground border font-mono">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          {/* Credits badge */}
          <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
            <CreditCardIcon sx={{ fontSize: 18 }} className="text-primary" />
            <span className="font-inter font-semibold text-sm text-foreground">25 credits</span>
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-10 h-10 rounded-xl hover:bg-accent"
          >
            <NotificationsIcon sx={{ fontSize: 20 }} />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center shadow-sm">
              <span className="text-xs text-destructive-foreground font-bold">3</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}