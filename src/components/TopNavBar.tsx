import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface TopNavBarProps {
  onMenuClick?: () => void;
}

export function TopNavBar({ onMenuClick }: TopNavBarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="h-16 glass-effect border-b border-border/30 sticky top-0 z-50 animate-slide-in-right">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger Menu */}
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full hover:bg-accent/50 w-10 h-10"
            onClick={onMenuClick}
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </Button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="font-bold text-xl text-foreground">InternEase</span>
          </div>

          {/* Profile Menu with Notifications */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:bg-accent/50 w-10 h-10"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">AC</span>
              </div>
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs text-destructive-foreground font-bold">3</span>
              </div>
            </Button>

            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 top-12 w-64 bg-card border border-border/50 rounded-2xl shadow-spotify-lg backdrop-blur-xl z-50 animate-scale-in">
                <div className="p-4">
                  {/* Profile Info */}
                  <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-border/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">AC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Alex Chen</p>
                      <p className="text-sm text-muted-foreground">alex@college.edu</p>
                    </div>
                  </div>

                  {/* Credits */}
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-xl mb-4">
                    <div className="flex items-center space-x-2">
                      <CreditCardIcon sx={{ fontSize: 18 }} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Credits</span>
                    </div>
                    <span className="font-bold text-primary">25</span>
                  </div>

                  {/* Notifications */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Notifications</span>
                      <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-full">3</span>
                    </div>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs font-medium text-foreground">Google replied</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs font-medium text-foreground">Application sent</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-lg">
                        <p className="text-xs font-medium text-foreground">Resume updated</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Center - Search */}
          <div className="flex-1 max-w-md mx-8">
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
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full backdrop-blur-sm">
              <CreditCardIcon sx={{ fontSize: 18 }} className="text-primary" />
              <span className="font-semibold text-sm text-foreground">25 credits</span>
            </div>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon"
              className="relative w-12 h-12 rounded-full hover:bg-accent/50 transition-all duration-200"
            >
              <NotificationsIcon sx={{ fontSize: 20 }} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-xs text-destructive-foreground font-bold">3</span>
              </div>
            </Button>

            {/* Profile */}
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200">
              <span className="text-primary-foreground font-semibold">AC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close profile menu */}
      {showProfileMenu && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setShowProfileMenu(false)}
        />
      )}
    </header>
  );
}