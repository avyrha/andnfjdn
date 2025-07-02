import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const sidebarItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: DashboardIcon,
    emoji: "🚀"
  },
  { 
    title: "Applications", 
    url: "/applications", 
    icon: MailIcon,
    emoji: "📤"
  },
  { 
    title: "HR Contacts", 
    url: "/contacts", 
    icon: PeopleIcon,
    emoji: "👥"
  },
  { 
    title: "Templates", 
    url: "/templates", 
    icon: ArticleIcon,
    emoji: "✨"
  },
  { 
    title: "Resume", 
    url: "/resume", 
    icon: DescriptionIcon,
    emoji: "📄"
  },
  { 
    title: "Settings", 
    url: "/settings", 
    icon: SettingsIcon,
    emoji: "⚙️"
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
    <aside className="w-72 h-screen glass-strong sticky top-0 flex flex-col border-r border-glow animate-slide-in-left">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-glow">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-animated rounded-2xl flex items-center justify-center pulse-glow">
              <RocketLaunchIcon className="text-white text-2xl" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-display text-2xl gradient-text">InternEase</h1>
            <p className="text-cyber text-xs text-muted-foreground uppercase tracking-wider">
              LAND FASTER
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-cyber">
        {sidebarItems.map((item, index) => {
          const isItemActive = isActive(item.url);
          const IconComponent = item.icon;
          
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={`
                group flex items-center space-x-4 px-4 py-4 rounded-2xl font-medium
                transition-all duration-300 hover-lift text-sm
                animate-fade-in-up animate-delay-${(index + 1) * 100}
                ${isItemActive 
                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30 glow-primary' 
                  : 'text-muted-foreground hover:text-white hover:bg-glass'
                }
              `}
            >
              <div className="relative">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                {isItemActive && (
                  <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm"></div>
                )}
              </div>
              <span className="text-cyber font-medium uppercase tracking-wide">
                {item.title}
              </span>
              {isItemActive && (
                <div className="ml-auto w-2 h-2 bg-primary rounded-full pulse-glow"></div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-glow">
        <div className="glass rounded-2xl p-4 hover-lift cursor-pointer group">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-warning to-accent rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-display font-semibold text-white truncate">Alex Chen</p>
              <p className="text-cyber text-xs text-muted-foreground truncate">alex@college.edu</p>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-cyber text-xs text-success">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}