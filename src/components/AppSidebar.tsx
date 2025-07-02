import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside className="w-64 h-screen sidebar-spotify sticky top-0 flex flex-col animate-slide-in-left">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-sidebar-border/30">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-2xl">I</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-sidebar-foreground">InternEase</h1>
            <p className="text-xs text-sidebar-foreground/60 font-medium tracking-wider uppercase">Land Faster</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
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
                `}
              >
                <IconComponent sx={{ fontSize: 22 }} />
                <span className="font-medium">{item.title}</span>
                {isItemActive && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-scale-in" />
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border/30">
        <div className="flex items-center space-x-3 p-4 rounded-2xl bg-sidebar-accent/30 hover:bg-sidebar-accent/50 transition-all duration-200 cursor-pointer group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-semibold text-lg">AC</span>
            </div>
            <div className="absolute -bottom-1 -right-1">
              <div className="status-online" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sidebar-foreground truncate">Alex Chen</p>
            <p className="text-sm text-sidebar-foreground/60 truncate">alex@college.edu</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <SettingsIcon sx={{ fontSize: 18 }} className="text-sidebar-foreground/60" />
          </div>
        </div>
      </div>
    </aside>
  );
}