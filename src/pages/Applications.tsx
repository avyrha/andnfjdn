import { Button } from "@/components/ui/button";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineering Intern",
    dateSent: "2024-01-15",
    status: "sent",
    emoji: "🟢",
    recruiter: "Sarah Chen"
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Product Management Intern",
    dateSent: "2024-01-14",
    status: "replied",
    emoji: "🟡",
    recruiter: "Alex Rodriguez"
  },
  {
    id: 3,
    company: "Apple",
    role: "Design Intern",
    dateSent: "2024-01-12",
    status: "bounced",
    emoji: "❌",
    recruiter: "Jessica Wu"
  },
  {
    id: 4,
    company: "Netflix",
    role: "Data Science Intern",
    dateSent: "2024-01-10",
    status: "replied",
    emoji: "📬",
    recruiter: "Marcus Johnson"
  }
];

export default function Applications() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-inter font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground mt-1">Track all your internship applications</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-inter font-semibold">
          + New Application
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 bg-sidebar-accent/30 p-1 rounded-xl w-fit">
        <Button variant="ghost" size="sm" className="bg-background shadow-soft rounded-lg font-inter">
          All (4)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg font-inter">
          Sent (1)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg font-inter">
          Replied (2)
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-lg font-inter">
          Bounced (1)
        </Button>
      </div>

      {/* Applications List */}
      <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden">
        <div className="px-6 py-4 border-b border-border/50 bg-sidebar-accent/20">
          <div className="grid grid-cols-12 gap-4 text-sm font-inter font-medium text-muted-foreground">
            <div className="col-span-1">Status</div>
            <div className="col-span-3">Company & Role</div>
            <div className="col-span-2">Recruiter</div>
            <div className="col-span-2">Date Sent</div>
            <div className="col-span-2">Subject</div>
            <div className="col-span-2">Actions</div>
          </div>
        </div>
        
        <div className="divide-y divide-border/30">
          {applications.map((app) => (
            <div 
              key={app.id} 
              className="px-6 py-4 hover:bg-sidebar-accent/20 transition-colors duration-200 cursor-pointer"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <span className="text-xl">{app.emoji}</span>
                </div>
                <div className="col-span-3">
                  <div>
                    <p className="font-inter font-semibold text-foreground">{app.company}</p>
                    <p className="text-sm text-muted-foreground">{app.role}</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="font-inter font-medium text-foreground">{app.recruiter}</p>
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
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-lg">
                      Follow up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}