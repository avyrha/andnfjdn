import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: DashboardIcon
  },
  { 
    title: "Applications", 
    url: "/applications", 
    icon: MailIcon
  },
  { 
    title: "HR Contacts", 
    url: "/contacts", 
    icon: PeopleIcon
  },
  { 
    title: "Templates", 
    url: "/templates", 
    icon: ArticleIcon
  },
  { 
    title: "Resume", 
    url: "/resume", 
    icon: DescriptionIcon
  },
  { 
    title: "Settings", 
    url: "/settings", 
    icon: SettingsIcon
  }
];

interface AppSidebarProps {
  onClose?: () => void;
}

export function AppSidebar({ onClose }: AppSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <div className="w-full h-screen flex flex-col sidebar-spotify shadow-spotify-lg">
      {/* Logo/Brand with Close Button - Fixed Header */}
      <div className="flex-shrink-0 p-6 border-b border-sidebar-border/30 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-2xl">H</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-sidebar-foreground">Hireely</h1>
            <p className="text-xs text-sidebar-foreground/60 font-medium tracking-wider uppercase">Land Faster</p>
          </div>
        </div>
        
        {/* Close button for mobile - Larger and more prominent */}
        {onClose && (
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden rounded-full hover:bg-sidebar-accent/50 w-12 h-12 flex items-center justify-center"
            onClick={onClose}
          >
            <CloseIcon sx={{ fontSize: 24 }} className="text-sidebar-foreground" />
          </Button>
        )}
      </div>

      {/* Navigation - Scrollable Middle Section */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-6">
          <div className="space-y-3">
            {sidebarItems.map((item, index) => {
              const isItemActive = isActive(item.url);
              const IconComponent = item.icon;
              
              return (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={`
                    sidebar-item-spotify group
                    ${isItemActive ? 'sidebar-item-active-spotify' : 'sidebar-item-inactive-spotify'}
                    animate-fade-in-up delay-${index * 100}
                    py-4 px-4 text-base
                  `}
                  onClick={onClose}
                >
                  <IconComponent sx={{ fontSize: 24 }} />
                  <span className="font-medium">{item.title}</span>
                  {isItemActive && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-scale-in" />
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>

      {/* User Profile - Fixed Footer */}
      <div className="flex-shrink-0 p-6 border-t border-sidebar-border/30">
        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-sidebar-accent/30 hover:bg-sidebar-accent/50 transition-all duration-200 cursor-pointer group">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-semibold text-lg">AC</span>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <div className="status-online" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sidebar-foreground truncate text-lg">Alex Chen</p>
            <p className="text-sm text-sidebar-foreground/60 truncate">alex@college.edu</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <SettingsIcon sx={{ fontSize: 20 }} className="text-sidebar-foreground/60" />
          </div>
        </div>
      </div>
    </div>
  );
}