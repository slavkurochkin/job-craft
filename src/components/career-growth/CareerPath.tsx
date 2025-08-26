import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Target, CheckCircle, Star } from 'lucide-react';
import { careerLevels, salaryData } from './data';

export function CareerPath() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Career Progression Framework
        </CardTitle>
        <CardDescription>
          Understand the typical career path across industries
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {careerLevels.map((level, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={index === 1 ? 'default' : 'outline'}>
                      {level.level}
                    </Badge>
                    <h3 className="font-medium">{level.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{level.focus}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{salaryData[level.level]?.range}</p>
                  <p className="text-sm text-green-600">{salaryData[level.level]?.growth}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Key Skills</h4>
                  <div className="space-y-2">
                    {level.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Typical Goals</h4>
                  <div className="space-y-2">
                    {level.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}