import { Button } from "@/components/ui/button";
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';
import ReplyIcon from '@mui/icons-material/Reply';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineering Intern",
    dateSent: "2024-01-15",
    status: "sent",
    icon: CheckCircleIcon,
    iconColor: "text-success",
    bgColor: "bg-success/20",
    recruiter: "Sarah Chen"
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Product Management Intern",
    dateSent: "2024-01-14",
    status: "replied",
    icon: ReplyIcon,
    iconColor: "text-primary",
    bgColor: "bg-primary/20",
    recruiter: "Alex Rodriguez"
  },
  {
    id: 3,
    company: "Apple",
    role: "Design Intern",
    dateSent: "2024-01-12",
    status: "bounced",
    icon: ErrorIcon,
    iconColor: "text-destructive",
    bgColor: "bg-destructive/20",
    recruiter: "Jessica Wu"
  },
  {
    id: 4,
    company: "Netflix",
    role: "Data Science Intern",
    dateSent: "2024-01-10",
    status: "replied",
    icon: ReplyIcon,
    iconColor: "text-primary",
    bgColor: "bg-primary/20",
    recruiter: "Marcus Johnson"
  }
];

const getStatusText = (status: string) => {
  switch (status) {
    case "sent": return "Sent";
    case "replied": return "Replied";
    case "bounced": return "Bounced";
    default: return status;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "sent": return "bg-success/20 text-success border-success/30";
    case "replied": return "bg-primary/20 text-primary border-primary/30";
    case "bounced": return "bg-destructive/20 text-destructive border-destructive/30";
    default: return "bg-muted/20 text-muted-foreground border-border";
  }
};

export default function Applications() {
  return (
    <div className="space-y-6 mobile-padding">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 animate-fade-in-up">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground mt-1">Track all your internship applications</p>
        </div>
        <Button className="btn-spotify mobile-full animate-fade-in-up delay-100">
          <AddIcon sx={{ fontSize: 18, marginRight: 1 }} />
          New Application
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 bg-muted/30 p-1 rounded-xl w-fit animate-fade-in-up delay-200">
        <Button variant="ghost" size="sm" className="bg-background shadow-sm rounded-lg font-medium text-xs md:text-sm">
          All (4)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg text-xs md:text-sm">
          Sent (1)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg text-xs md:text-sm">
          Replied (2)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg text-xs md:text-sm">
          Bounced (1)
        </Button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block card-spotify overflow-hidden animate-fade-in-up delay-300">
        <div className="px-6 py-4 border-b border-border bg-muted/20">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
            <div className="col-span-1">Status</div>
            <div className="col-span-3">Company & Role</div>
            <div className="col-span-2">Recruiter</div>
            <div className="col-span-2">Date Sent</div>
            <div className="col-span-2">Subject</div>
            <div className="col-span-2">Actions</div>
          </div>
        </div>
        
        <div className="divide-y divide-border/30">
          {applications.map((app) => {
            const IconComponent = app.icon;
            return (
              <div 
                key={app.id} 
                className="px-6 py-4 hover:bg-muted/30 transition-colors duration-200 cursor-pointer"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1">
                    <div className={`w-8 h-8 ${app.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent sx={{ fontSize: 16 }} className={app.iconColor} />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div>
                      <p className="font-semibold text-foreground">{app.company}</p>
                      <p className="text-sm text-muted-foreground">{app.role}</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium text-foreground">{app.recruiter}</p>
                    <p className="text-sm text-muted-foreground">HR Manager</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-foreground">{app.dateSent}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-foreground truncate">
                      Internship Application - {app.role}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <VisibilityIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-lg">
                        <SendIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                        Follow up
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {applications.map((app, index) => {
          const IconComponent = app.icon;
          return (
            <div 
              key={app.id}
              className={`card-spotify card-hover p-4 animate-fade-in-up delay-${(index + 3) * 100}`}
            >
              {/* Header with Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${app.bgColor} rounded-2xl flex items-center justify-center`}>
                    <IconComponent sx={{ fontSize: 20 }} className={app.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{app.company}</h3>
                    <p className="text-sm text-muted-foreground">{app.role}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(app.status)}`}>
                  {getStatusText(app.status)}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 text-sm">
                  <PersonIcon sx={{ fontSize: 16 }} className="text-muted-foreground" />
                  <span className="text-foreground font-medium">{app.recruiter}</span>
                  <span className="text-muted-foreground">• HR Manager</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CalendarTodayIcon sx={{ fontSize: 16 }} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Sent on {app.dateSent}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <EmailIcon sx={{ fontSize: 16 }} className="text-muted-foreground" />
                  <span className="text-muted-foreground truncate">
                    Internship Application - {app.role}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 rounded-full border-border/50 hover:border-primary/50">
                  <VisibilityIcon sx={{ fontSize: 14, marginRight: 1 }} />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1 rounded-full border-border/50 hover:border-primary/50">
                  <SendIcon sx={{ fontSize: 14, marginRight: 1 }} />
                  Follow up
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats - Mobile Optimized */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-700">
        <div className="card-spotify p-4 text-center">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <SendIcon sx={{ fontSize: 16 }} className="text-primary" />
          </div>
          <p className="text-2xl font-bold text-foreground">4</p>
          <p className="text-xs text-muted-foreground">Total Sent</p>
        </div>
        <div className="card-spotify p-4 text-center">
          <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <ReplyIcon sx={{ fontSize: 16 }} className="text-success" />
          </div>
          <p className="text-2xl font-bold text-foreground">2</p>
          <p className="text-xs text-muted-foreground">Replied</p>
        </div>
        <div className="card-spotify p-4 text-center">
          <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <PendingIcon sx={{ fontSize: 16 }} className="text-warning" />
          </div>
          <p className="text-2xl font-bold text-foreground">1</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
        <div className="card-spotify p-4 text-center">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <CheckCircleIcon sx={{ fontSize: 16 }} className="text-primary" />
          </div>
          <p className="text-2xl font-bold text-foreground">50%</p>
          <p className="text-xs text-muted-foreground">Response Rate</p>
        </div>
      </div>
    </div>
  );
}