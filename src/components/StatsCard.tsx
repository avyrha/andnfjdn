interface StatsCardProps {
  title: string;
  value: string | number;
  emoji: string;
  bgColor?: string;
  subtitle?: string;
}

export function StatsCard({ title, value, emoji, bgColor = "bg-card", subtitle }: StatsCardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-raised transition-all duration-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-inter font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-inter font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="text-4xl">{emoji}</div>
      </div>
    </div>
  );
}