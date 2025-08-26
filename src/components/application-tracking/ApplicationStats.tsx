import { Card, CardContent } from '../ui/card';
import { 
  Briefcase, 
  Calendar, 
  Clock, 
  BarChart3
} from 'lucide-react';

export function ApplicationStats({ stats, total, active }) {
  const statsData = [
    {
      label: 'Total Applications',
      value: total,
      icon: Briefcase,
      color: 'text-primary'
    },
    {
      label: 'Active Applications',
      value: active,
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      label: 'Interviews',
      value: (stats['Interview Scheduled'] || 0) + (stats['Interview Completed'] || 0),
      icon: Calendar,
      color: 'text-green-500'
    },
    {
      label: 'Response Rate',
      value: total > 0 ? `${Math.round(((total - (stats['Application Submitted'] || 0)) / total) * 100)}%` : '0%',
      icon: BarChart3,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}