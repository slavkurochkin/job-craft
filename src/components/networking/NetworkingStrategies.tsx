import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Target, Lightbulb, Award, Network, TrendingUp, Users } from 'lucide-react';
import { networkingStrategies } from './data';

const iconMap = {
  Award,
  Network,
  TrendingUp,
  Users
};

export function NetworkingStrategies() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {networkingStrategies.map((strategy, index) => {
          const Icon = iconMap[strategy.icon] || Award;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {strategy.strategy}
                </CardTitle>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Tactics:</h4>
                  <ul className="space-y-1">
                    {strategy.tactics.map((tactic, tacticIndex) => (
                      <li key={tacticIndex} className="text-sm flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {tactic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Why This Works
                  </h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">{strategy.whyItWorks}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Monthly Networking Action Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Week 1: Research & Identify</h4>
                <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                  <li>• Identify 20 target contacts</li>
                  <li>• Research their backgrounds</li>
                  <li>• Find common connections</li>
                  <li>• Update your LinkedIn profile</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
                <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Week 2: Initial Outreach</h4>
                <ul className="text-sm space-y-1 text-green-600 dark:text-green-400">
                  <li>• Send 5 connection requests</li>
                  <li>• Engage with 10 LinkedIn posts</li>
                  <li>• Join 2 relevant groups</li>
                  <li>• Register for 1 industry event</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
                <h4 className="font-medium text-orange-700 dark:text-orange-300 mb-2">Week 3: Deepen Relationships</h4>
                <ul className="text-sm space-y-1 text-orange-600 dark:text-orange-400">
                  <li>• Request 2 informational interviews</li>
                  <li>• Share valuable content</li>
                  <li>• Make 1 introduction between contacts</li>
                  <li>• Follow up on previous outreach</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800">
                <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Week 4: Nurture & Plan</h4>
                <ul className="text-sm space-y-1 text-purple-600 dark:text-purple-400">
                  <li>• Send thank you notes</li>
                  <li>• Update relationship tracking</li>
                  <li>• Plan next month\'s targets</li>
                  <li>• Review and adjust strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}