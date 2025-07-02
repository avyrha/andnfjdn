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
    <aside className="w-64 h-screen bg-sidebar shadow-elevation-6 sticky top-0 flex flex-col rounded-[4px]">
      {/* Logo/Brand */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-warning rounded-[4px] flex items-center justify-center">
            <span className="text-xl">🚀</span>
          </div>
          <div>
            <h1 className="font-inter font-bold text-lg text-foreground">InternEase</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">LAND FASTER</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        {sidebarItems.map((item) => {
          const isItemActive = isActive(item.url);
          const IconComponent = item.icon;
          
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-[4px] font-inter font-medium
                transition-all duration-200 mb-1 text-sm
                ${isItemActive 
                  ? 'bg-primary text-primary-foreground shadow-elevation-2' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }
              `}
            >
              <IconComponent sx={{ fontSize: 24 }} />
              <span className="text-sm uppercase tracking-wide">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3 p-3 rounded-[4px] bg-sidebar-accent">
          <div className="w-10 h-10 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center">
            <span className="text-lg">😊</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-inter font-medium text-sm text-foreground truncate">Alex Chen</p>
            <p className="text-xs text-muted-foreground truncate">alex@college.edu</p>
          </div>
        </div>
      </div>
    </aside>
  );
}