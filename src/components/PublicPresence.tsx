import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Warning } from './Warning';
import { 
  Users, 
  FileText, 
  Search,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Target,
  Eye
} from 'lucide-react';

import {
  profileElements,
  contentStrategy,
  platformStrategies,
  brandingElements,
  getStatusColor,
  getStatusIcon,
  contentCalendarData,
  dayNames
} from './public-presence/data';

export function PublicPresence() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Public Presence & Branding</h1>
        <p className="text-muted-foreground mt-2">
          Build a professional online presence that attracts opportunities and showcases your expertise
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile Optimization</TabsTrigger>
          <TabsTrigger value="content">Content Strategy</TabsTrigger>
          <TabsTrigger value="platforms">Platform Strategy</TabsTrigger>
          <TabsTrigger value="branding">Personal Branding</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {profileElements.map((platform, platformIndex) => (
            <Card key={platformIndex}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {platform.platform} Profile
                    </CardTitle>
                    <CardDescription>Complete your professional profile for maximum impact</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                    <div className="flex items-center gap-2">
                      <Progress value={platform.completionRate} className="w-24" />
                      <span className="font-medium">{platform.completionRate}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {platform.elements.map((element, elementIndex) => {
                  const StatusIcon = getStatusIcon(element.status);
                  return (
                    <div key={elementIndex} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <StatusIcon className={`h-5 w-5 ${getStatusColor(element.status)}`} />
                          <div>
                            <h4 className="font-medium">{element.element}</h4>
                            <Badge variant={
                              element.importance === 'High' ? 'destructive' :
                              element.importance === 'Medium' ? 'default' : 'secondary'
                            }>
                              {element.importance} Priority
                            </Badge>
                          </div>
                        </div>
                        <Badge variant="outline" className={getStatusColor(element.status)}>
                          {element.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Why This Matters
                          </h5>
                          <p className="text-sm text-blue-700 dark:text-blue-300">{element.why}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-medium mb-2">Optimization Tips:</h5>
                          <ul className="space-y-1">
                            {element.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm flex items-start gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Profile SEO & Discoverability
              </CardTitle>
              <CardDescription>
                Optimize your profiles to be found by recruiters and potential connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Keyword Optimization</h4>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm mb-3">Why keywords matter: Recruiters search using specific terms. Including relevant keywords increases your chances of appearing in search results.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Research job descriptions for common keywords</li>
                      <li>• Include industry-specific terminology</li>
                      <li>• Use variations of important terms</li>
                      <li>• Update keywords based on target roles</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Profile Activity</h4>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm mb-3">Why activity matters: Active profiles rank higher in search results and show you're engaged in your professional development.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Post content regularly (at least weekly)</li>
                      <li>• Engage with others' posts meaningfully</li>
                      <li>• Update your status and share achievements</li>
                      <li>• Accept and send connection requests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Content Strategy Framework
              </CardTitle>
              <CardDescription>
                Strategic approach to sharing content that builds your professional brand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contentStrategy.map((strategy, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-medium">{strategy.type}</h4>
                      <Badge variant="outline">{strategy.frequency}</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-800">
                      <h5 className="font-medium text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Strategic Impact
                      </h5>
                      <p className="text-sm text-green-700 dark:text-green-300">{strategy.why}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Content Ideas:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {strategy.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="text-sm p-2 bg-muted rounded flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Calendar Template</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {dayNames.map((day, index) => (
                  <div key={day} className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">{day}</h4>
                    <div className="space-y-1">
                      {contentCalendarData[index].map((type, typeIndex) => (
                        <div key={typeIndex} className="text-xs p-1 bg-muted rounded">
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950/50">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-600" />
                  Content Best Practices
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Engagement Tips:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Ask questions to encourage comments</li>
                      <li>• Share personal experiences and lessons</li>
                      <li>• Use relevant hashtags (3-5 per post)</li>
                      <li>• Respond to comments promptly</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Content Quality:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Provide value in every post</li>
                      <li>• Keep posts concise and scannable</li>
                      <li>• Use visuals when appropriate</li>
                      <li>• Proofread before publishing</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Consistency:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Schedule posts in advance</li>
                      <li>• Maintain regular posting frequency</li>
                      <li>• Track what content performs best</li>
                      <li>• Adjust strategy based on engagement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {platformStrategies.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {platform.platform}
                    </CardTitle>
                    <CardDescription>{platform.purpose}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/50 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Why This Platform Matters
                      </h5>
                      <p className="text-sm text-purple-700 dark:text-purple-300">{platform.why}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Optimization Strategies:</h5>
                      <ul className="space-y-1">
                        {platform.optimization.map((strategy, strategyIndex) => (
                          <li key={strategyIndex} className="text-sm flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Key Metrics to Track:</h5>
                      <div className="flex flex-wrap gap-1">
                        {platform.metrics.map((metric, metricIndex) => (
                          <Badge key={metricIndex} variant="outline" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
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
                      LinkedIn Profile
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Professional Email Signature
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Professional Headshots
                    </li>
                  </ul>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                    These are must-haves for any professional job search.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Important (Next Steps)</h4>
                  <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      GitHub Portfolio (Tech)
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Personal Website
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Industry Platform Presence
                    </li>
                  </ul>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
                    These significantly enhance your professional presence.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-3">Optional (Advanced)</h4>
                  <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                    <li className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Twitter/X Presence
                    </li>
                    <li className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      YouTube Channel
                    </li>
                    <li className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Podcast Appearances
                    </li>
                  </ul>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-3">
                    These can differentiate you in competitive markets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Branding Elements</CardTitle>
              <CardDescription>
                Create a consistent and memorable professional brand across all platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {brandingElements.map((element, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-medium">{element.element}</h4>
                        <Badge variant={element.importance === 'High' ? 'destructive' : 'default'}>
                          {element.importance} Importance
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Why This Matters</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">{element.why}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Action Items:</h5>
                        <ul className="space-y-1">
                          {element.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="text-sm flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}