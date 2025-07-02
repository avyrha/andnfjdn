import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  bgColor?: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatsCard({ 
  title, 
  value, 
  icon: IconComponent,
  bgColor = "bg-card", 
  subtitle,
  trend = 'neutral',
  trendValue 
}: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-primary';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return TrendingUpIcon;
      case 'down': return TrendingDownIcon;
      default: return TrendingFlatIcon;
    }
  };

  const TrendIcon = getTrendIcon();

  return (
    <div className="card-spotify card-hover card-glow p-6 group">
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <IconComponent sx={{ fontSize: 28 }} className="text-primary" />
        </div>
        {trendValue && (
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-background/50 ${getTrendColor()}`}>
            <TrendIcon sx={{ fontSize: 16 }} />
            <span className="text-sm font-semibold">{trendValue}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</p>
        <div>
          <p className="text-4xl font-bold text-foreground mb-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}