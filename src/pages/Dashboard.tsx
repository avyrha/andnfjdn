import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export default function Dashboard() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Hero Header */}
      <div className="text-center space-y-8 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-display text-6xl md:text-7xl font-bold gradient-text-neon leading-tight">
            Land your next internship
          </h1>
          <h2 className="text-display text-6xl md:text-7xl font-bold gradient-text leading-tight">
            10x faster 🚀
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
            AI-powered applications, smart templates, and automated follow-ups. 
            <span className="gradient-text font-semibold"> Your dream internship is just a few clicks away.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Button 
              size="lg" 
              className="btn-neon px-8 py-4 text-lg rounded-2xl group"
            >
              <RocketLaunchIcon className="mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-cyber">START APPLYING</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-glow px-8 py-4 text-lg rounded-2xl hover-lift"
            >
              <AutoAwesomeIcon className="mr-3" />
              Browse Templates
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="animate-fade-in-up animate-delay-100">
          <StatsCard
            title="Credits Left"
            value="25"
            emoji="💳"
            bgColor="glass"
            subtitle="Resets in 12 days"
            trend="neutral"
          />
        </div>
        <div className="animate-fade-in-up animate-delay-200">
          <StatsCard
            title="Applications Sent"
            value="47"
            emoji="📤"
            bgColor="glass"
            subtitle="This month"
            trend="up"
            trendValue="+23%"
          />
        </div>
        <div className="animate-fade-in-up animate-delay-300">
          <StatsCard
            title="Response Rate"
            value="34%"
            emoji="📬"
            bgColor="glass"
            subtitle="Above average!"
            trend="up"
            trendValue="+12%"
          />
        </div>
      </div>

      {/* Resume Status */}
      <div className="glass-strong rounded-3xl p-8 border border-glow hover-lift animate-fade-in-up animate-delay-400">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full pulse-glow"></div>
              <h3 className="text-display text-2xl font-bold text-white">Resume Status</h3>
            </div>
            <p className="text-lg text-muted-foreground">Your resume is optimized and ready to go! ✅</p>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📄</span>
                <span className="text-cyber">Alex_Chen_Resume_2024.pdf</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-success">•</span>
                <span className="text-cyber text-sm">ATS Score: 94%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-warning">•</span>
                <span className="text-cyber text-sm">Updated 2 days ago</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="glass border-glow rounded-2xl px-6 py-3 hover-lift">
            <FlashOnIcon className="mr-2" />
            Update Resume
          </Button>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Auto Apply Section */}
        <div className="glass-strong rounded-3xl p-8 border border-glow hover-lift animate-fade-in-up animate-delay-500">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center pulse-glow">
                <RocketLaunchIcon className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-display text-xl font-bold gradient-text">AI Auto-Apply</h3>
                <p className="text-cyber text-sm text-muted-foreground">Let AI find and apply to perfect matches</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cyber text-sm text-muted-foreground">Today's Matches</span>
                <span className="text-display font-bold text-success">12 found</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-success to-primary h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <Button className="w-full btn-neon py-4 rounded-2xl">
              <AutoAwesomeIcon className="mr-2" />
              <span className="text-cyber">START AUTO-APPLY</span>
            </Button>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="glass-strong rounded-3xl p-8 border border-glow hover-lift animate-fade-in-up animate-delay-600">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-warning rounded-2xl flex items-center justify-center pulse-glow">
                <TrendingUpIcon className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-display text-xl font-bold gradient-text">Performance Analytics</h3>
                <p className="text-cyber text-sm text-muted-foreground">Track your application success</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-display text-2xl font-bold text-primary">47</p>
                <p className="text-cyber text-xs text-muted-foreground">TOTAL SENT</p>
              </div>
              <div className="text-center">
                <p className="text-display text-2xl font-bold text-success">16</p>
                <p className="text-cyber text-xs text-muted-foreground">RESPONSES</p>
              </div>
            </div>

            <Button variant="outline" className="w-full glass border-glow py-4 rounded-2xl hover-lift">
              View Full Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-strong rounded-3xl p-8 border border-glow animate-fade-in-up animate-delay-700">
        <h3 className="text-display text-2xl font-bold gradient-text mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { emoji: "🟢", company: "Google", role: "Software Engineering Intern", time: "2 hours ago", status: "sent" },
            { emoji: "🟡", company: "Microsoft", role: "PM Intern", time: "1 day ago", status: "pending" },
            { emoji: "📬", company: "Apple", role: "Design Intern", time: "3 days ago", status: "replied" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 glass rounded-2xl border border-glow hover-lift group">
              <span className="text-2xl group-hover:scale-110 transition-transform">{activity.emoji}</span>
              <div className="flex-1">
                <p className="text-display font-semibold text-white">
                  Applied to {activity.company} - {activity.role}
                </p>
                <p className="text-cyber text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                activity.status === 'sent' ? 'bg-primary/20 text-primary' :
                activity.status === 'pending' ? 'bg-warning/20 text-warning' :
                'bg-success/20 text-success'
              }`}>
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}