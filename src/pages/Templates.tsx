import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "Software Engineering - Tech Company",
    description: "Perfect for FAANG and tech startups",
    preview: "Hi {{RecruiterName}}, I'm excited to apply for the {{RoleName}} position at {{CompanyName}}...",
    lastModified: "2 days ago",
    emoji: "💻"
  },
  {
    id: 2,
    name: "Product Management - Growth Focus",
    description: "Emphasizes user research and metrics",
    preview: "Dear {{RecruiterName}}, Your recent post about {{CompanyName}}'s growth strategy really resonated with me...",
    lastModified: "1 week ago",
    emoji: "📊"
  },
  {
    id: 3,
    name: "Design - Creative Portfolio",
    description: "Showcases design thinking and portfolio",
    preview: "Hello {{RecruiterName}}, I've been following {{CompanyName}}'s design work and I'm impressed by...",
    lastModified: "3 days ago",
    emoji: "🎨"
  },
  {
    id: 4,
    name: "Finance - Investment Banking",
    description: "Professional tone for finance roles",
    preview: "Dear {{RecruiterName}}, I am writing to express my strong interest in the {{RoleName}} internship...",
    lastModified: "5 days ago",
    emoji: "💰"
  }
];

export default function Templates() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-inter font-bold text-foreground">Email Templates</h1>
          <p className="text-muted-foreground mt-1">Create and manage your application templates</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-inter font-semibold">
          + New Template
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Templates List */}
        <div className="lg:col-span-1 space-y-4">
          {templates.map((template) => (
            <div 
              key={template.id}
              className="bg-card rounded-xl p-4 shadow-soft border border-border/50 hover:shadow-raised transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{template.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-foreground truncate">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">Modified {template.lastModified}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Template Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-inter font-semibold text-foreground">Template Editor</h3>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="rounded-xl">
                  Preview
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Template Name */}
            <div className="mb-4">
              <label className="block text-sm font-inter font-medium text-foreground mb-2">
                Template Name
              </label>
              <input 
                type="text" 
                value="Software Engineering - Tech Company"
                className="w-full px-4 py-2 bg-input border border-border rounded-xl font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Template Content */}
            <div className="mb-4">
              <label className="block text-sm font-inter font-medium text-foreground mb-2">
                Email Content
              </label>
              <div className="bg-input border border-border rounded-xl p-4 font-mono text-sm">
                <div className="space-y-2">
                  <p>Hi <span className="bg-mint/30 px-1 rounded">{"{{RecruiterName}}"}</span>,</p>
                  <p></p>
                  <p>I'm excited to apply for the <span className="bg-sky/30 px-1 rounded">{"{{RoleName}}"}</span> position at <span className="bg-lavender/30 px-1 rounded">{"{{CompanyName}}"}</span>. As a computer science student with experience in full-stack development, I'm particularly drawn to your company's innovative approach to solving complex technical challenges.</p>
                  <p></p>
                  <p>In my recent projects, I've:</p>
                  <p>• Built scalable web applications using React and Node.js</p>
                  <p>• Contributed to open-source projects with 1000+ GitHub stars</p>
                  <p>• Implemented CI/CD pipelines that reduced deployment time by 40%</p>
                  <p></p>
                  <p>I'd love to discuss how my passion for technology and problem-solving skills can contribute to <span className="bg-lavender/30 px-1 rounded">{"{{CompanyName}}"}</span>'s continued success.</p>
                  <p></p>
                  <p>Best regards,</p>
                  <p>Alex Chen</p>
                </div>
              </div>
            </div>

            {/* AI Personalization Toggle */}
            <div className="flex items-center justify-between p-4 bg-mint/10 rounded-xl border border-mint/30">
              <div>
                <h4 className="font-inter font-medium text-foreground">AI Personalization</h4>
                <p className="text-sm text-muted-foreground">Automatically customize this template for each company</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Off</span>
                <div className="w-10 h-6 bg-mint/30 rounded-full p-1 cursor-pointer">
                  <div className="w-4 h-4 bg-background rounded-full transition-transform transform"></div>
                </div>
                <span className="text-sm text-mint-foreground">On</span>
              </div>
            </div>
          </div>

          {/* Variable Reference */}
          <div className="bg-lavender/10 rounded-2xl p-6 border border-lavender/30">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">📝 Template Variables</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-inter font-medium text-foreground mb-2">Company Info</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><code className="bg-lavender/30 px-1 rounded">{"{{CompanyName}}"}</code></li>
                  <li><code className="bg-lavender/30 px-1 rounded">{"{{RoleName}}"}</code></li>
                  <li><code className="bg-lavender/30 px-1 rounded">{"{{Department}}"}</code></li>
                </ul>
              </div>
              <div>
                <p className="font-inter font-medium text-foreground mb-2">Personal Info</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><code className="bg-lavender/30 px-1 rounded">{"{{RecruiterName}}"}</code></li>
                  <li><code className="bg-lavender/30 px-1 rounded">{"{{MyName}}"}</code></li>
                  <li><code className="bg-lavender/30 px-1 rounded">{"{{MySchool}}"}</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}