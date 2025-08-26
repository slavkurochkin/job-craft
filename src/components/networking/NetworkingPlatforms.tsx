import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Linkedin, Calendar, Building, Globe, CheckCircle, Target, Eye } from 'lucide-react';
import { networkingPlatforms } from './data';

const iconMap = {
  Linkedin,
  Calendar,
  Building,
  Globe
};

export function NetworkingPlatforms() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {networkingPlatforms.map((platform, index) => {
          const Icon = iconMap[platform.icon] || Globe;
          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {platform.platform}
                </CardTitle>
                <CardDescription>{platform.focus}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Optimization Strategies:</h5>
                  <ul className="space-y-1">
                    {platform.strategies.map((strategy, strategyIndex) => (
                      <li key={strategyIndex} className="text-sm flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Best Practices:</h5>
                  <ul className="space-y-1">
                    {platform.bestPractices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-sm flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Prioritization Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">Essential (Start Here)</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  LinkedIn Profile & Activity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Alumni Network Outreach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Former Colleague Connections
                </li>
              </ul>
              <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                These provide the highest ROI for networking efforts.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Important (Next Steps)</h4>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Industry Events & Meetups
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Professional Associations
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Informational Interviews
                </li>
              </ul>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
                These expand your network beyond immediate connections.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-3">Advanced (Long-term)</h4>
              <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                <li className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Thought Leadership Content
                </li>
                <li className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Speaking at Events
                </li>
                <li className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Mentoring Others
                </li>
              </ul>
              <p className="text-xs text-orange-600 dark:text-orange-400 mt-3">
                These establish you as a recognized industry professional.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}