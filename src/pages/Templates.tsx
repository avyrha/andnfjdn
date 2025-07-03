import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from '@mui/icons-material/Preview';
import SaveIcon from '@mui/icons-material/Save';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaletteIcon from '@mui/icons-material/Palette';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const templates = [
  {
    id: 1,
    name: "Software Engineering - Tech Company",
    description: "Perfect for FAANG and tech startups",
    preview: "Hi {{RecruiterName}}, I'm excited to apply for the {{RoleName}} position at {{CompanyName}}...",
    lastModified: "2 days ago",
    icon: CodeIcon
  },
  {
    id: 2,
    name: "Product Management - Growth Focus",
    description: "Emphasizes user research and metrics",
    preview: "Dear {{RecruiterName}}, Your recent post about {{CompanyName}}'s growth strategy really resonated with me...",
    lastModified: "1 week ago",
    icon: TrendingUpIcon
  },
  {
    id: 3,
    name: "Design - Creative Portfolio",
    description: "Showcases design thinking and portfolio",
    preview: "Hello {{RecruiterName}}, I've been following {{CompanyName}}'s design work and I'm impressed by...",
    lastModified: "3 days ago",
    icon: PaletteIcon
  },
  {
    id: 4,
    name: "Finance - Investment Banking",
    description: "Professional tone for finance roles",
    preview: "Dear {{RecruiterName}}, I am writing to express my strong interest in the {{RoleName}} internship...",
    lastModified: "5 days ago",
    icon: AttachMoneyIcon
  }
];

export default function Templates() {
  return (
    <div className="space-y-6 mobile-padding">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 animate-fade-in-up">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Email Templates</h1>
          <p className="text-muted-foreground mt-1">Create and manage your application templates</p>
        </div>
        <Button className="btn-spotify mobile-full animate-fade-in-up delay-100">
          <AddIcon sx={{ fontSize: 18, marginRight: 1 }} />
          New Template
        </Button>
      </div>

      {/* Mobile-First Layout */}
      <div className="space-y-6">
        {/* Templates List - Mobile Optimized */}
        <div className="space-y-4 animate-fade-in-up delay-200">
          <h2 className="text-xl font-bold text-foreground mb-4">Your Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template, index) => {
              const IconComponent = template.icon;
              return (
                <div 
                  key={template.id}
                  className={`card-spotify card-hover p-4 md:p-6 group cursor-pointer animate-fade-in-up delay-${(index + 3) * 100}`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent sx={{ fontSize: 24 }} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-lg mb-1 truncate">{template.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{template.description}</p>
                      <p className="text-xs text-muted-foreground font-medium">Modified {template.lastModified}</p>
                    </div>
                  </div>

                  {/* Preview Text - Mobile Optimized */}
                  <div className="bg-muted/30 rounded-xl p-3 mb-4">
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {template.preview}
                    </p>
                  </div>

                  {/* Actions - Mobile Friendly */}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full border-border/50 hover:border-primary/50">
                      <EditIcon sx={{ fontSize: 14, marginRight: 1 }} />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 rounded-full border-border/50 hover:border-primary/50">
                      <ContentCopyIcon sx={{ fontSize: 14, marginRight: 1 }} />
                      Copy
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Template Editor - Mobile Optimized */}
        <div className="card-spotify p-4 md:p-6 animate-fade-in-up delay-600">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Template Editor</h3>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <Button variant="secondary" size="sm" className="rounded-full mobile-full">
                <PreviewIcon sx={{ fontSize: 16, marginRight: 1 }} />
                Preview
              </Button>
              <Button size="sm" className="rounded-full mobile-full">
                <SaveIcon sx={{ fontSize: 16, marginRight: 1 }} />
                Save Changes
              </Button>
            </div>
          </div>

          {/* Template Name - Mobile Optimized */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Template Name
            </label>
            <Input 
              value="Software Engineering - Tech Company"
              className="rounded-xl"
            />
          </div>

          {/* Template Content - Mobile Optimized */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Content
            </label>
            <div className="bg-muted/30 border border-border rounded-xl p-4 font-mono text-sm min-h-[280px] md:min-h-[320px] leading-relaxed overflow-x-auto">
              <div className="space-y-4 min-w-[300px]">
                <p>Hi <span className="bg-success/30 px-1 rounded text-success-foreground">{"{{RecruiterName}}"}</span>,</p>
                <p>I'm excited to apply for the <span className="bg-primary/30 px-1 rounded text-primary-foreground">{"{{RoleName}}"}</span> position at <span className="bg-warning/30 px-1 rounded text-warning-foreground">{"{{CompanyName}}"}</span>. As a computer science student with experience in full-stack development, I'm particularly drawn to your company's innovative approach to solving complex technical challenges.</p>
                <p>In my recent projects, I've:</p>
                <p>• Built scalable web applications using React and Node.js</p>
                <p>• Contributed to open-source projects with 1000+ GitHub stars</p>
                <p>• Implemented CI/CD pipelines that reduced deployment time by 40%</p>
                <p>I'd love to discuss how my passion for technology and problem-solving skills can contribute to <span className="bg-warning/30 px-1 rounded text-warning-foreground">{"{{CompanyName}}"}</span>'s continued success.</p>
                <p>Best regards,<br />Alex Chen</p>
              </div>
            </div>
          </div>

          {/* AI Personalization Toggle - Mobile Optimized */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-success/10 rounded-xl border border-success/30 space-y-4 md:space-y-0">
            <div>
              <h4 className="font-medium text-foreground">Use AI Personalization</h4>
              <p className="text-sm text-muted-foreground">Automatically customize this template for each company</p>
            </div>
            <div className="flex items-center justify-between md:justify-end space-x-4">
              <span className="text-sm text-muted-foreground">Off</span>
              <div className="w-12 h-6 bg-success rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-background rounded-full transition-transform transform translate-x-6"></div>
              </div>
              <span className="text-sm text-success">On</span>
            </div>
          </div>
        </div>

        {/* Variable Reference - Mobile Optimized */}
        <div className="card-spotify p-4 md:p-6 animate-fade-in-up delay-700">
          <h3 className="text-xl font-bold text-foreground mb-4">Template Variables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-foreground mb-3 text-xs uppercase tracking-wide">Company Info</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <code className="bg-primary/20 px-3 py-2 rounded-lg text-xs text-primary font-mono">{"{{CompanyName}}"}</code>
                  <span className="text-muted-foreground text-xs">Company name</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-primary/20 px-3 py-2 rounded-lg text-xs text-primary font-mono">{"{{RoleName}}"}</code>
                  <span className="text-muted-foreground text-xs">Job title</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-primary/20 px-3 py-2 rounded-lg text-xs text-primary font-mono">{"{{Department}}"}</code>
                  <span className="text-muted-foreground text-xs">Department</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground mb-3 text-xs uppercase tracking-wide">Personal Info</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <code className="bg-primary/20 px-3 py-2 rounded-lg text-xs text-primary font-mono">{"{{RecruiterName}}"}</code>
                  <span className="text-muted-foreground text-xs">Recruiter name</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-primary/20 px-3 py-2 rounded-lg text-xs text-primary font-mono">{"{{MyName}}"}</code>
                  <span className="text-muted-foreground text-xs">Your name</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-primary/20 px-3 py-2 rounded-lg text-xs text-primary font-mono">{"{{MySchool}}"}</code>
                  <span className="text-muted-foreground text-xs">Your school</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions - Mobile Optimized */}
        <div className="card-spotify p-4 md:p-6 animate-fade-in-up delay-800">
          <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 rounded-2xl flex-col space-y-2 border-border/50 hover:border-primary/50 group">
              <AddIcon sx={{ fontSize: 24 }} className="text-primary group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Create Template</span>
            </Button>
            <Button variant="outline" className="h-16 rounded-2xl flex-col space-y-2 border-border/50 hover:border-primary/50 group">
              <ContentCopyIcon sx={{ fontSize: 24 }} className="text-primary group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Import Template</span>
            </Button>
            <Button variant="outline" className="h-16 rounded-2xl flex-col space-y-2 border-border/50 hover:border-primary/50 group">
              <PreviewIcon sx={{ fontSize: 24 }} className="text-primary group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Preview All</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}