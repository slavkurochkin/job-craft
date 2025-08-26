import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, DollarSign, Lightbulb } from 'lucide-react';
import { actionPlans } from './data';

export function ActionPlanning() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Career Development Action Plan
          </CardTitle>
          <CardDescription>
            Structured timeline for achieving your career goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {actionPlans.map((plan, index) => (
              <div key={index} className={`p-4 rounded-lg ${plan.color}`}>
                <h4 className="font-medium mb-3">{plan.timeframe}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plan.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Salary Negotiation Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Research & Preparation</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use Glassdoor, PayScale, Levels.fyi</li>
                <li>• Consider total compensation package</li>
                <li>• Document your achievements</li>
                <li>• Practice negotiation conversations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Negotiation Tips</h4>
              <ul className="space-y-1 text-sm">
                <li>• Focus on value you bring</li>
                <li>• Be prepared to walk away</li>
                <li>• Consider non-salary benefits</li>
                <li>• Get offers in writing</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Career Pivot Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Assess Transferable Skills</h4>
              <ul className="space-y-1 text-sm">
                <li>• Identify core competencies</li>
                <li>• Map skills to new industry</li>
                <li>• Highlight relevant experience</li>
                <li>• Address skill gaps proactively</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Transition Approach</h4>
              <ul className="space-y-1 text-sm">
                <li>• Network in target industry</li>
                <li>• Consider transitional roles</li>
                <li>• Gain relevant experience/training</li>
                <li>• Update personal brand</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}