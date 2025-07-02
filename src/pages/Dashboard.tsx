import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground leading-tight">
            Land your next internship{" "}
            <span className="text-gradient">10x faster</span> 🚀
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered applications, smart templates, and automated follow-ups. 
            Your dream internship is just a few clicks away.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="px-8">
            🚀 Apply Automatically
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Browse Templates
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
          <StatsCard
            title="Credits Left"
            value="25"
            emoji="💳"
            subtitle="Resets monthly"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <StatsCard
            title="Applications Sent"
            value="12"
            emoji="📤"
            subtitle="This month"
            trend="up"
            trendValue="+23%"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <StatsCard
            title="Replies Received"
            value="3"
            emoji="📬"
            subtitle="25% response rate!"
            trend="up"
            trendValue="+12%"
          />
        </div>
      </div>

      {/* Resume Status */}
      <div className="card-modern p-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <h3 className="text-xl font-semibold text-foreground">Resume Status</h3>
            </div>
            <p className="text-muted-foreground">Your resume is ready to go! ✅</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>📄 Alex_Chen_Resume_2024.pdf</span>
              <span className="text-success">• Uploaded 2 days ago</span>
            </div>
          </div>
          <Button variant="outline">
            Update Resume
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-modern p-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Auto-Apply</h3>
                <p className="text-sm text-muted-foreground">Let AI find and apply to perfect matches</p>
              </div>
            </div>
            <Button className="w-full">
              Start Auto-Apply
            </Button>
          </div>
        </div>

        <div className="card-modern p-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span>📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Analytics</h3>
                <p className="text-sm text-muted-foreground">Track your application success</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card-modern p-6 animate-fade-in" style={{ animationDelay: '700ms' }}>
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { emoji: "🟢", company: "Google", role: "Software Engineering Intern", time: "2 hours ago" },
            { emoji: "🟡", company: "Microsoft", role: "PM Intern", time: "1 day ago" },
            { emoji: "📬", company: "Apple", role: "Design Intern", time: "3 days ago" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <span className="text-lg">{activity.emoji}</span>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  Applied to {activity.company} - {activity.role}
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}