import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-inter font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Account Settings */}
        <div className="space-y-6">
          {/* Email Integration */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Email Integration</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-mint/10 rounded-xl border border-mint/30">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-inter font-medium text-foreground">Gmail</p>
                    <p className="text-sm text-mint-foreground">Connected: alex@college.edu</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl">
                  Disconnect
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-inter font-medium text-foreground">Outlook</p>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl">
                  Connect
                </Button>
              </div>
            </div>
          </div>

          {/* Application Quota */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Monthly Quota</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-inter font-medium text-foreground">Auto Applications</span>
                  <span className="text-sm text-muted-foreground">25 / 50</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-mint h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-inter font-medium text-foreground">Manual Applications</span>
                  <span className="text-sm text-muted-foreground">Unlimited</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-sky h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Notifications</h3>
            
            <div className="space-y-4">
              {[
                { label: "Email replies", description: "Get notified when recruiters reply", enabled: true },
                { label: "Application confirmations", description: "Confirm successful application sends", enabled: true },
                { label: "Weekly summaries", description: "Weekly activity reports", enabled: false },
                { label: "New features", description: "Updates about new platform features", enabled: true }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-sidebar-accent/20">
                  <div>
                    <p className="font-inter font-medium text-foreground">{setting.label}</p>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                    setting.enabled ? 'bg-mint' : 'bg-muted'
                  }`}>
                    <div className={`w-4 h-4 bg-background rounded-full transition-transform ${
                      setting.enabled ? 'translate-x-4' : ''
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscription & Billing */}
        <div className="space-y-6">
          {/* Current Plan */}
          <div className="bg-gradient-to-br from-lavender/20 to-sky/20 rounded-2xl p-6 border border-lavender/30">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Current Plan</h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-2xl font-inter font-bold text-foreground">Student Pro</h4>
                <p className="text-muted-foreground">Perfect for active job seekers</p>
              </div>

              <div className="bg-background/50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-inter font-bold text-foreground">50</p>
                    <p className="text-sm text-muted-foreground">Auto applies/month</p>
                  </div>
                  <div>
                    <p className="text-2xl font-inter font-bold text-foreground">∞</p>
                    <p className="text-sm text-muted-foreground">Manual applies</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Manage on Stripe
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl">
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Credits</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-inter font-medium text-foreground">Current Balance</span>
                <span className="text-2xl font-inter font-bold text-mint-foreground">25</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next reset</span>
                  <span className="text-foreground">Jan 1, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Credits used this month</span>
                  <span className="text-foreground">25 / 50</span>
                </div>
              </div>

              <Button variant="outline" className="w-full rounded-xl">
                💳 Buy Additional Credits
              </Button>
            </div>
          </div>

          {/* Account */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Account</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-inter font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  value="Alex Chen"
                  className="w-full px-4 py-2 bg-input border border-border rounded-xl font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-foreground mb-2">
                  University
                </label>
                <input 
                  type="text" 
                  value="UC Berkeley"
                  className="w-full px-4 py-2 bg-input border border-border rounded-xl font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-foreground mb-2">
                  Graduation Year
                </label>
                <select className="w-full px-4 py-2 bg-input border border-border rounded-xl font-inter text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}