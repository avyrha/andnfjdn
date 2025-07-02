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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export default function Dashboard() {
  return (
    <div className="space-y-8 mobile-padding">
      {/* Greeting Section */}
      <div className="flex items-center space-x-4 p-6 md:p-8 card-spotify card-hover animate-fade-in-up">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
          <WavingHandIcon sx={{ fontSize: 32 }} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Good morning, Alex!
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to land your dream internship?
          </p>
        </div>
      </div>

      {/* Hero Header */}
      <div className="text-center space-y-8 py-8 md:py-16">
        <div className="space-y-6 animate-fade-in-up delay-100">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Land your next internship{" "}
            <span className="text-gradient-spotify">10x faster</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI-powered applications, smart templates, and automated follow-ups. 
            Your dream internship is just a few clicks away.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up delay-200">
          <Button size="lg" className="btn-spotify px-8 py-4 text-lg mobile-full">
            <PlayArrowIcon sx={{ fontSize: 24, marginRight: 1 }} />
            Start Auto-Apply
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-border/50 hover:border-primary/50 mobile-full">
            <ArticleIcon sx={{ fontSize: 20, marginRight: 1 }} />
            Browse Templates
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="animate-fade-in-up delay-100">
          <StatsCard
            title="Credits Left"
            value="25"
            icon={CreditCardIcon}
            subtitle="Resets monthly"
          />
        </div>
        <div className="animate-fade-in-up delay-200">
          <StatsCard
            title="Applications Sent"
            value="12"
            icon={SendIcon}
            subtitle="This month"
            trend="up"
            trendValue="+23%"
          />
        </div>
        <div className="animate-fade-in-up delay-300">
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
      <div className="card-spotify card-hover p-6 md:p-8 animate-fade-in-up delay-400">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
              <CheckCircleIcon sx={{ fontSize: 32 }} className="text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Resume Status</h3>
              <p className="text-muted-foreground">Your resume is ready to go!</p>
              <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <DescriptionIcon sx={{ fontSize: 16 }} />
                  <span>Alex_Chen_Resume_2024.pdf</span>
                </div>
                <span className="text-primary font-medium">• Uploaded 2 days ago</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="rounded-full border-border/50 hover:border-primary/50 mobile-full">
            Update Resume
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-spotify card-hover card-glow p-6 md:p-8 animate-fade-in-up delay-500 group">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <SmartToyIcon sx={{ fontSize: 32 }} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-xl">AI Auto-Apply</h3>
                <p className="text-muted-foreground">Let AI find and apply to perfect matches</p>
              </div>
            </div>
            <Button className="btn-spotify w-full py-3">
              <PlayArrowIcon sx={{ fontSize: 20, marginRight: 1 }} />
              Start Auto-Apply
            </Button>
          </div>
        </div>

        <div className="card-spotify card-hover card-glow p-6 md:p-8 animate-fade-in-up delay-600 group">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <AnalyticsIcon sx={{ fontSize: 32 }} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-xl">Analytics</h3>
                <p className="text-muted-foreground">Track your application success</p>
              </div>
            </div>
            <Button variant="outline" className="w-full py-3 rounded-full border-border/50 hover:border-primary/50">
              View Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card-spotify card-hover p-6 md:p-8 animate-fade-in-up delay-700">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { 
              icon: CheckCircleIcon, 
              iconColor: "text-primary", 
              bgColor: "bg-primary/20",
              company: "Google", 
              role: "Software Engineering Intern", 
              time: "2 hours ago",
              status: "Application sent"
            },
            { 
              icon: PendingIcon, 
              iconColor: "text-warning", 
              bgColor: "bg-warning/20",
              company: "Microsoft", 
              role: "PM Intern", 
              time: "1 day ago",
              status: "Under review"
            },
            { 
              icon: ReplyIcon, 
              iconColor: "text-primary", 
              bgColor: "bg-primary/20",
              company: "Apple", 
              role: "Design Intern", 
              time: "3 days ago",
              status: "Recruiter replied"
            }
          ].map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-4 md:p-6 rounded-2xl hover:bg-accent/30 transition-all duration-200 cursor-pointer group">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${activity.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent sx={{ fontSize: 24 }} className={activity.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {activity.status} • {activity.company}
                  </p>
                  <p className="text-muted-foreground text-sm truncate">{activity.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <PlayArrowIcon sx={{ fontSize: 20 }} className="text-muted-foreground" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}