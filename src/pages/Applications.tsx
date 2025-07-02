import { Button } from "@/components/ui/button";
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';
import ReplyIcon from '@mui/icons-material/Reply';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';

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

export default function Applications() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground mt-1">Track all your internship applications</p>
        </div>
        <Button className="rounded-xl">
          <AddIcon sx={{ fontSize: 18, marginRight: 1 }} />
          New Application
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 bg-muted/30 p-1 rounded-xl w-fit">
        <Button variant="ghost" size="sm" className="bg-background shadow-sm rounded-lg font-medium">
          All (4)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg">
          Sent (1)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg">
          Replied (2)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg">
          Bounced (1)
        </Button>
      </div>

      {/* Applications List */}
      <div className="card-netflix overflow-hidden">
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
    </div>
  );
}