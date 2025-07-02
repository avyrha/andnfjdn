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
  bgColor = "bg-card", 
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
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  return (
    <div className={`${bgColor} card-modern card-hover p-6`}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {trendValue && (
              <span className={`text-xs ${getTrendColor()} flex items-center space-x-1`}>
                <span>{getTrendIcon()}</span>
                <span>{trendValue}</span>
              </span>
            )}
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="text-3xl opacity-80">{emoji}</div>
      </div>
    </div>
  );
}