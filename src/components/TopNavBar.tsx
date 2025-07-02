import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Button } from "@/components/ui/button";

export function TopNavBar() {
  return (
    <header className="h-20 glass-strong sticky top-0 z-50 border-b border-glow animate-slide-in-right">
      <div className="flex items-center justify-between h-full px-8">
        {/* Left side - Greeting */}
        <div className="flex items-center space-x-4">
          <div className="animate-fade-in-up">
            <h2 className="text-display text-2xl gradient-text">
              Good morning, Alex! 🌟
            </h2>
            <p className="text-cyber text-sm text-muted-foreground">
              Ready to land your dream internship?
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8 animate-fade-in-up animate-delay-200">
          <div className="relative group">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search or jump to..."
              className="w-full h-12 pl-12 pr-16 bg-glass border border-glow rounded-2xl text-white placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-primary transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 bg-muted/20 rounded-lg text-xs text-muted-foreground border border-glow">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4 animate-fade-in-up animate-delay-300">
          {/* Credits badge */}
          <div className="flex items-center space-x-3 px-4 py-2 glass rounded-2xl border border-glow hover-lift group cursor-pointer">
            <div className="relative">
              <CreditCardIcon className="text-warning text-xl group-hover:scale-110 transition-transform" />
              <FlashOnIcon className="absolute -top-1 -right-1 text-xs text-success" />
            </div>
            <div>
              <span className="text-display font-bold text-warning">25</span>
              <span className="text-cyber text-xs text-muted-foreground ml-1">credits</span>
            </div>
          </div>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-12 h-12 glass rounded-2xl border border-glow hover-lift group"
          >
            <NotificationsIcon className="text-xl group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-warning to-destructive rounded-full flex items-center justify-center pulse-glow">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </Button>

          {/* Quick Action */}
          <Button className="btn-neon px-6 py-3 rounded-2xl">
            <FlashOnIcon className="mr-2" />
            <span className="text-cyber">APPLY NOW</span>
          </Button>
        </div>
      </div>
    </header>
  );
}