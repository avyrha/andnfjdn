interface StatsCardProps {
  title: string;
  value: string | number;
  emoji: string;
  bgColor?: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatsCard({ 
  title, 
  value, 
  emoji, 
  bgColor = "glass", 
  subtitle,
  trend = 'neutral',
  trendValue 
}: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '→';
    }
  };

  return (
    <div className={`${bgColor} rounded-3xl p-6 border border-glow hover-lift group cursor-pointer cyber-border`}>
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <p className="text-cyber text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {title}
            </p>
            {trendValue && (
              <span className={`text-xs ${getTrendColor()} flex items-center space-x-1`}>
                <span>{getTrendIcon()}</span>
                <span>{trendValue}</span>
              </span>
            )}
          </div>
          <div className="space-y-1">
            <p className="text-display text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              {value}
            </p>
            {subtitle && (
              <p className="text-cyber text-sm text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 float">
            {emoji}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-sm"></div>
      </div>
    </div>
  );
}