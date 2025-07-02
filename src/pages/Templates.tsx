import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from '@mui/icons-material/Preview';
import SaveIcon from '@mui/icons-material/Save';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaletteIcon from '@mui/icons-material/Palette';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Email Templates</h1>
          <p className="text-muted-foreground mt-1">Create and manage your application templates</p>
        </div>
        <Button className="rounded-xl">
          <AddIcon sx={{ fontSize: 18, marginRight: 1 }} />
          New Template
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Templates List */}
        <div className="lg:col-span-1 space-y-4">
          {templates.map((template) => {
            const IconComponent = template.icon;
            return (
              <div 
                key={template.id}
                className="card-netflix p-4 card-hover cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IconComponent sx={{ fontSize: 20 }} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate text-sm">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{template.description}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Modified {template.lastModified}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Template Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-netflix p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Template Editor</h3>
              <div className="flex items-center space-x-2">
                <Button variant="secondary" size="sm" className="rounded-lg">
                  <PreviewIcon sx={{ fontSize: 16, marginRight: 1 }} />
                  Preview
                </Button>
                <Button size="sm" className="rounded-lg">
                  <SaveIcon sx={{ fontSize: 16, marginRight: 1 }} />
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Template Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Template Name
              </label>
              <Input 
                value="Software Engineering - Tech Company"
                className="rounded-lg"
              />
            </div>

            {/* Template Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Content
              </label>
              <div className="bg-muted/30 border border-border rounded-xl p-4 font-mono text-sm min-h-[320px] leading-relaxed">
                <div className="space-y-4">
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

            {/* AI Personalization Toggle */}
            <div className="flex items-center justify-between p-4 bg-success/10 rounded-xl border border-success/30">
              <div>
                <h4 className="font-medium text-foreground">Use AI Personalization</h4>
                <p className="text-sm text-muted-foreground">Automatically customize this template for each company</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Off</span>
                <div className="w-10 h-6 bg-success rounded-full p-1 cursor-pointer">
                  <div className="w-4 h-4 bg-background rounded-full transition-transform transform translate-x-4"></div>
                </div>
                <span className="text-sm text-success">On</span>
              </div>
            </div>
          </div>

          {/* Variable Reference */}
          <div className="card-netflix p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Template Variables</h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-medium text-foreground mb-2 text-xs uppercase tracking-wide">Company Info</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><code className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{"{{CompanyName}}"}</code></li>
                  <li><code className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{"{{RoleName}}"}</code></li>
                  <li><code className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{"{{Department}}"}</code></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2 text-xs uppercase tracking-wide">Personal Info</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><code className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{"{{RecruiterName}}"}</code></li>
                  <li><code className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{"{{MyName}}"}</code></li>
                  <li><code className="bg-primary/20 px-2 py-1 rounded text-xs text-primary">{"{{MySchool}}"}</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}