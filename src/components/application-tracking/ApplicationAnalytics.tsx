import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { BarChart3, TrendingUp, Target, Clock } from 'lucide-react';
import { getStatusStats } from './helpers';

import type { ApplicationAnalyticsProps } from '../../types';

export function ApplicationAnalytics({ applications }: ApplicationAnalyticsProps) {
  const { stats, total } = getStatusStats(applications);

  const conversionMetrics = [
    {
      stage: 'Application to Response',
      current: total - (stats['Application Submitted'] || 0),
      total: total,
      percentage: total > 0 ? Math.round(((total - (stats['Application Submitted'] || 0)) / total) * 100) : 0
    },
    {
      stage: 'Response to Interview',
      current: (stats['Interview Scheduled'] || 0) + (stats['Interview Completed'] || 0),
      total: total - (stats['Application Submitted'] || 0),
      percentage: total > (stats['Application Submitted'] || 0) ? 
        Math.round((((stats['Interview Scheduled'] || 0) + (stats['Interview Completed'] || 0)) / (total - (stats['Application Submitted'] || 0))) * 100) : 0
    },
    {
      stage: 'Interview to Offer',
      current: stats['Offer Received'] || 0,
      total: (stats['Interview Scheduled'] || 0) + (stats['Interview Completed'] || 0),
      percentage: ((stats['Interview Scheduled'] || 0) + (stats['Interview Completed'] || 0)) > 0 ? 
        Math.round(((stats['Offer Received'] || 0) / ((stats['Interview Scheduled'] || 0) + (stats['Interview Completed'] || 0))) * 100) : 0
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Application Analytics
          </CardTitle>
          <CardDescription>
            Track your job search performance and identify areas for improvement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-4">Status Breakdown</h4>
              <div className="space-y-3">
                {Object.entries(stats).map(([status, count]) => (
                  <div key={status} className="flex items-center justify-between">
                    <span className="text-sm">{status}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{count}</span>
                      <div className="w-20">
                        <Progress value={(count / total) * 100} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Conversion Funnel</h4>
              <div className="space-y-3">
                {conversionMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{metric.stage}</span>
                      <span className="text-sm font-medium">{metric.percentage}%</span>
                    </div>
                    <Progress value={metric.percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {metric.current} of {metric.total}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-blue-500" />
              Goals & Targets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Weekly Applications</span>
                <Badge variant="outline">5/10</Badge>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Monthly Interviews</span>
                <Badge variant="outline">2/4</Badge>
              </div>
              <Progress value={50} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <p className="text-muted-foreground">This Week</p>
              <p className="font-medium">3 applications sent</p>
              <p className="text-green-600 text-xs">↑ 50% from last week</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Response Rate</p>
              <p className="font-medium">65% this month</p>
              <p className="text-green-600 text-xs">↑ 15% improvement</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-orange-500" />
              Next Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="font-medium">Follow up needed</p>
              <p className="text-muted-foreground">2 applications over 2 weeks old</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Interviews this week</p>
              <p className="text-muted-foreground">1 technical interview scheduled</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}