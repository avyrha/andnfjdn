import { Button } from "@/components/ui/button";

const contacts = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Google",
    role: "University Recruiter",
    email: "sarah.chen@google.com",
    linkedin: "linkedin.com/in/sarahchen",
    lastContact: "2 days ago",
    status: "Active",
    notes: "Very responsive, prefers email communication"
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    company: "Microsoft",
    role: "Talent Acquisition Manager",
    email: "alex.rodriguez@microsoft.com",
    linkedin: "linkedin.com/in/alexrodriguez",
    lastContact: "1 week ago",
    status: "Responded",
    notes: "Mentioned they're looking for PM interns with strong analytics background"
  },
  {
    id: 3,
    name: "Jessica Wu",
    company: "Apple",
    role: "Campus Recruiting Lead",
    email: "jessica.wu@apple.com",
    linkedin: "linkedin.com/in/jessicawu",
    lastContact: "3 days ago",
    status: "No Response",
    notes: "Follow up in 2 weeks, busy with campus visits"
  },
  {
    id: 4,
    name: "Marcus Johnson",
    company: "Netflix",
    role: "Technical Recruiter",
    email: "marcus.johnson@netflix.com",
    linkedin: "linkedin.com/in/marcusjohnson",
    lastContact: "5 days ago",
    status: "Active",
    notes: "Interested in candidates with ML/Data Science background"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-mint/20 text-mint-foreground";
    case "Responded":
      return "bg-sky/20 text-sky-foreground";
    case "No Response":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Contacts() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-inter font-bold text-foreground">HR Contacts</h1>
          <p className="text-muted-foreground mt-1">Manage your recruiter and HR connections</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-inter font-semibold">
          + Add Contact
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Search contacts by name or company..."
            className="w-full px-4 py-3 bg-input border border-border rounded-xl font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <Button variant="outline" className="rounded-xl">
          Filter
        </Button>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <div 
            key={contact.id}
            className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-raised transition-all duration-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender to-sky rounded-full flex items-center justify-center">
                  <span className="text-lg font-inter font-bold text-lavender-foreground">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">{contact.company}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
            </div>

            {/* Role */}
            <p className="text-sm font-inter font-medium text-foreground mb-3">{contact.role}</p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <span>📧</span>
                <span className="text-muted-foreground truncate">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>💼</span>
                <span className="text-muted-foreground truncate">{contact.linkedin}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>🕒</span>
                <span className="text-muted-foreground">Last contact: {contact.lastContact}</span>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground italic">"{contact.notes}"</p>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                📧 Email
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl">
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-lavender/20 to-sky/20 rounded-2xl p-6 border border-lavender/30">
        <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-16 rounded-xl flex-col space-y-1">
            <span className="text-lg">📥</span>
            <span className="text-sm">Import from LinkedIn</span>
          </Button>
          <Button variant="outline" className="h-16 rounded-xl flex-col space-y-1">
            <span className="text-lg">📊</span>
            <span className="text-sm">Export Contacts</span>
          </Button>
          <Button variant="outline" className="h-16 rounded-xl flex-col space-y-1">
            <span className="text-lg">🔄</span>
            <span className="text-sm">Sync with CRM</span>
          </Button>
        </div>
      </div>
    </div>
  );
}