import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-5xl font-inter font-bold text-foreground">
          Land your next internship 10x faster 🚀
        </h1>
        <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
          AI-powered applications, smart templates, and automated follow-ups. 
          Your dream internship is just a few clicks away.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Credits Left"
          value="25"
          emoji="💳"
          bgColor="bg-mint/10"
          subtitle="Resets monthly"
        />
        <StatsCard
          title="Applications Sent"
          value="12"
          emoji="📤"
          bgColor="bg-sky/10"
          subtitle="This month"
        />
        <StatsCard
          title="Replies Received"
          value="3"
          emoji="📬"
          bgColor="bg-lavender/10"
          subtitle="25% response rate!"
        />
      </div>

      {/* Resume Status */}
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-inter font-semibold text-foreground">Resume Status</h3>
            <p className="text-muted-foreground">Your resume is ready to go! ✅</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>📄</span>
              <span>Alex_Chen_Resume_2024.pdf</span>
              <span className="text-mint-foreground">• Uploaded 2 days ago</span>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl">
            Update Resume
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-lavender/20 via-sky/20 to-mint/20 rounded-2xl p-8 border border-border/30">
        <div className="text-center space-y-6">
          <div>
            <h2 className="text-2xl font-inter font-bold text-foreground mb-2">
              Ready to send some applications? 
            </h2>
            <p className="text-muted-foreground">
              Browse open positions and apply automatically with AI-personalized messages
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-3 font-inter font-semibold shadow-raised hover:shadow-soft transition-all"
            >
              🚀 Apply Automatically
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-xl px-8 py-3 font-inter font-semibold"
            >
              Browse Templates
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
        <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-sidebar-accent/30">
            <span className="text-lg">🟢</span>
            <div className="flex-1">
              <p className="font-inter font-medium text-sm text-foreground">Applied to Google - Software Engineering Intern</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-sidebar-accent/30">
            <span className="text-lg">🟡</span>
            <div className="flex-1">
              <p className="font-inter font-medium text-sm text-foreground">Awaiting reply from Microsoft - PM Intern</p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-sidebar-accent/30">
            <span className="text-lg">📬</span>
            <div className="flex-1">
              <p className="font-inter font-medium text-sm text-foreground">Reply received from Apple - Design Intern</p>
              <p className="text-xs text-muted-foreground">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}