import { NavLink, useLocation } from "react-router-dom";
import { 
  Calendar, 
  Settings, 
  User, 
  Book,
  Bell
} from "lucide-react";

const sidebarItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: Calendar, 
    emoji: "📊"
  },
  { 
    title: "Applications", 
    url: "/applications", 
    icon: Calendar, 
    emoji: "📋"
  },
  { 
    title: "HR Contacts", 
    url: "/contacts", 
    icon: User, 
    emoji: "👥"
  },
  { 
    title: "Templates", 
    url: "/templates", 
    icon: Book, 
    emoji: "📝"
  },
  { 
    title: "Resume", 
    url: "/resume", 
    icon: User, 
    emoji: "📄"
  },
  { 
    title: "Settings", 
    url: "/settings", 
    icon: Settings, 
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
    <aside className="w-88 h-screen bg-sidebar border-r border-border sticky top-0 flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-lavender to-sky rounded-xl flex items-center justify-center shadow-soft">
            <span className="text-xl">🚀</span>
          </div>
          <div>
            <h1 className="font-inter font-bold text-lg text-foreground">InternEase</h1>
            <p className="text-sm text-muted-foreground">Land faster</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isItemActive = isActive(item.url);
          
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={`
                flex items-center space-x-4 px-4 py-3 rounded-xl font-inter font-medium
                transition-all duration-200 group
                ${isItemActive 
                  ? 'bg-sidebar-accent text-accent-foreground shadow-soft' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:shadow-soft'
                }
              `}
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-base">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-sidebar-accent/30">
          <div className="w-10 h-10 bg-gradient-to-br from-mint to-lavender rounded-full flex items-center justify-center">
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