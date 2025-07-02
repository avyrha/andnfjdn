import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ReplyIcon from '@mui/icons-material/Reply';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArticleIcon from '@mui/icons-material/Article';

export default function Dashboard() {
  return (
    <div className="space-y-8 p-6">
      {/* Hero Header */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground leading-tight">
            Land your next internship{" "}
            <span className="text-gradient">10x faster</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered applications, smart templates, and automated follow-ups. 
            Your dream internship is just a few clicks away.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="px-8 rounded-xl">
            <RocketLaunchIcon sx={{ fontSize: 20, marginRight: 1 }} />
            Apply Automatically
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-xl">
            <ArticleIcon sx={{ fontSize: 20, marginRight: 1 }} />
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
            icon={CreditCardIcon}
            subtitle="Resets monthly"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <StatsCard
            title="Applications Sent"
            value="12"
            icon={SendIcon}
            subtitle="This month"
            trend="up"
            trendValue="+23%"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <StatsCard
            title="Replies Received"
            value="3"
            icon={MailIcon}
            subtitle="25% response rate!"
            trend="up"
            trendValue="+12%"
          />
        </div>
      </div>

      {/* Resume Status */}
      <div className="card-netflix p-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
              <CheckCircleIcon sx={{ fontSize: 24 }} className="text-success" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-foreground">Resume Status</h3>
              <p className="text-muted-foreground">Your resume is ready to go!</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <DescriptionIcon sx={{ fontSize: 16 }} />
                  <span>Alex_Chen_Resume_2024.pdf</span>
                </div>
                <span className="text-success">• Uploaded 2 days ago</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="rounded-xl">
            Update Resume
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-netflix p-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <SmartToyIcon sx={{ fontSize: 24 }} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">AI Auto-Apply</h3>
                <p className="text-sm text-muted-foreground">Let AI find and apply to perfect matches</p>
              </div>
            </div>
            <Button className="w-full rounded-xl">
              Start Auto-Apply
            </Button>
          </div>
        </div>

        <div className="card-netflix p-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <AnalyticsIcon sx={{ fontSize: 24 }} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">Analytics</h3>
                <p className="text-sm text-muted-foreground">Track your application success</p>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-xl">
              View Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card-netflix p-6 animate-fade-in" style={{ animationDelay: '700ms' }}>
        <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { 
              icon: CheckCircleIcon, 
              iconColor: "text-success", 
              bgColor: "bg-success/20",
              company: "Google", 
              role: "Software Engineering Intern", 
              time: "2 hours ago" 
            },
            { 
              icon: PendingIcon, 
              iconColor: "text-warning", 
              bgColor: "bg-warning/20",
              company: "Microsoft", 
              role: "PM Intern", 
              time: "1 day ago" 
            },
            { 
              icon: ReplyIcon, 
              iconColor: "text-primary", 
              bgColor: "bg-primary/20",
              company: "Apple", 
              role: "Design Intern", 
              time: "3 days ago" 
            }
          ].map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200">
                <div className={`w-10 h-10 ${activity.bgColor} rounded-xl flex items-center justify-center`}>
                  <IconComponent sx={{ fontSize: 20 }} className={activity.iconColor} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    Applied to {activity.company} - {activity.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}