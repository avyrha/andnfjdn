import { Button } from "@/components/ui/button";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const contacts = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Google",
    role: "University Recruiter",
    email: "sarah.chen@google.com",
    lastContact: "2 days ago",
    status: "Active",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    company: "Microsoft",
    role: "Talent Acquisition Manager",
    email: "alex.rodriguez@microsoft.com",
    lastContact: "1 week ago",
    status: "Responded",
    avatar: "AR"
  },
  {
    id: 3,
    name: "Jessica Wu",
    company: "Apple",
    role: "Campus Recruiting Lead",
    email: "jessica.wu@apple.com",
    lastContact: "3 days ago",
    status: "No Response",
    avatar: "JW"
  },
  {
    id: 4,
    name: "Marcus Johnson",
    company: "Netflix",
    role: "Technical Recruiter",
    email: "marcus.johnson@netflix.com",
    lastContact: "5 days ago",
    status: "Active",
    avatar: "MJ"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-primary/20 text-primary border-primary/30";
    case "Responded":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "No Response":
      return "bg-muted/50 text-muted-foreground border-border";
    default:
      return "bg-muted/50 text-muted-foreground border-border";
  }
};

export default function Contacts() {
  return (
    <div className="space-y-6 mobile-padding">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">HR Contacts</h1>
          <p className="text-muted-foreground mt-2">Manage your recruiter connections</p>
        </div>
        <Button className="btn-spotify mobile-full animate-fade-in-up delay-100">
          <AddIcon sx={{ fontSize: 18, marginRight: 1 }} />
          Add Contact
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-200">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" sx={{ fontSize: 18 }} />
          <input 
            type="text" 
            placeholder="Search contacts..."
            className="w-full h-12 pl-12 pr-4 bg-input/50 border border-border/50 rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
          />
        </div>
        <Button variant="outline" className="rounded-full border-border/50 hover:border-primary/50 md:w-auto mobile-full">
          <FilterListIcon sx={{ fontSize: 18, marginRight: 1 }} />
          Filter
        </Button>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div 
            key={contact.id}
            className={`card-spotify card-hover card-glow p-6 group animate-fade-in-up delay-${(index + 3) * 100}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-lg font-bold text-primary">
                    {contact.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">{contact.company}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
            </div>

            {/* Role */}
            <p className="text-sm font-medium text-foreground mb-4 bg-muted/30 px-3 py-2 rounded-lg">
              {contact.role}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <EmailIcon sx={{ fontSize: 16 }} className="text-muted-foreground" />
                <span className="text-muted-foreground truncate flex-1">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <AccessTimeIcon sx={{ fontSize: 16 }} className="text-muted-foreground" />
                <span className="text-muted-foreground">Last contact: {contact.lastContact}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1 rounded-full border-border/50 hover:border-primary/50">
                <EmailIcon sx={{ fontSize: 14, marginRight: 1 }} />
                Email
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-border/50 hover:border-primary/50">
                <PersonIcon sx={{ fontSize: 14 }} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card-spotify p-6 md:p-8 animate-fade-in-up delay-700">
        <h3 className="text-xl font-bold text-foreground mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-16 rounded-2xl flex-col space-y-2 border-border/50 hover:border-primary/50 group">
            <LinkedInIcon sx={{ fontSize: 24 }} className="text-primary group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">Import from LinkedIn</span>
          </Button>
          <Button variant="outline" className="h-16 rounded-2xl flex-col space-y-2 border-border/50 hover:border-primary/50 group">
            <EmailIcon sx={{ fontSize: 24 }} className="text-primary group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">Export Contacts</span>
          </Button>
          <Button variant="outline" className="h-16 rounded-2xl flex-col space-y-2 border-border/50 hover:border-primary/50 group">
            <PersonIcon sx={{ fontSize: 24 }} className="text-primary group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-medium">Sync Contacts</span>
          </Button>
        </div>
      </div>
    </div>
  );
}