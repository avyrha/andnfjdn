import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

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
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border sticky top-0 flex flex-col animate-slide-in-left">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">I</span>
          </div>
          <div>
            <h1 className="font-inter font-bold text-lg text-sidebar-foreground">InternEase</h1>
            <p className="text-xs text-sidebar-foreground/60 font-medium">LAND FASTER</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <div className="space-y-1">
          {sidebarItems.map((item, index) => {
            const isItemActive = isActive(item.url);
            const IconComponent = item.icon;
            
            return (
              <NavLink
                key={item.title}
                to={item.url}
                className={`
                  sidebar-item
                  ${isItemActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <IconComponent sx={{ fontSize: 20 }} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-sidebar-accent/50">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AC</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 status-online"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-inter font-medium text-sm text-sidebar-foreground truncate">Alex Chen</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">alex@college.edu</p>
          </div>
        </div>
      </div>
    </aside>
  );
}