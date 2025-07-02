import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface TopNavBarProps {
  onMenuClick?: () => void;
}

export function TopNavBar({ onMenuClick }: TopNavBarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="h-16 glass-effect border-b border-border/30 sticky top-0 z-50 animate-slide-in-right">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden rounded-full hover:bg-accent/50"
          onClick={onMenuClick}
        >
          <MenuIcon sx={{ fontSize: 20 }} />
        </Button>

        {/* Left side - Logo for mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">I</span>
          </div>
          <span className="font-bold text-lg text-foreground">InternEase</span>
        </div>

        {/* Center - Search (Desktop only) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className={`relative w-full transition-all duration-200 ${isSearchFocused ? 'scale-105' : ''}`}>
            <SearchIcon 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground transition-colors duration-200" 
              sx={{ fontSize: 18 }} 
            />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="w-full h-12 pl-12 pr-16 bg-input/50 border border-border/50 rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 backdrop-blur-sm"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <kbd className="absolute right-4 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-muted/50 rounded-lg text-xs text-muted-foreground border border-border/30 font-mono">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Credits badge */}
          <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full backdrop-blur-sm">
            <CreditCardIcon sx={{ fontSize: 18 }} className="text-primary" />
            <span className="font-semibold text-sm text-foreground">25 credits</span>
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-accent/50 transition-all duration-200"
          >
            <NotificationsIcon sx={{ fontSize: 20 }} />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xs text-destructive-foreground font-bold">3</span>
            </div>
          </Button>

          {/* Profile picture for mobile */}
          <div className="md:hidden w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-semibold text-sm">AC</span>
          </div>
        </div>
      </div>
    </header>
  );
}