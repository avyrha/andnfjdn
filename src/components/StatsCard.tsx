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
      case 'up': return 'text-success';
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
    <div className={`${bgColor} card-netflix card-hover p-6`}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
          <IconComponent sx={{ fontSize: 24 }} className="text-primary" />
        </div>
        {trendValue && (
          <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
            <TrendIcon sx={{ fontSize: 16 }} />
            <span className="text-sm font-medium">{trendValue}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}