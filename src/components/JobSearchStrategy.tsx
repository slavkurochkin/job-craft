import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Warning } from './Warning';
import { 
  Search, 
  ExternalLink,
  Star,
  Lightbulb,
  MapPin,
  BookOpen,
  Calendar,
  MessageSquare,
  DollarSign,
  Code,
  Zap,
  Globe,
  Rss,
  Bell,
  Eye
} from 'lucide-react';

import { 
  jobBoards, 
  searchStrategies, 
  networkingPlatforms, 
  companyResearchAreas, 
  companyResearchTools, 
  filterBoards, 
  getIconForType 
} from './job-search/data';

export function JobSearchStrategy() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Job Search Strategy</h1>
        <p className="text-muted-foreground mt-2">
          Strategic approach to finding opportunities across all industries and work styles
        </p>
      </div>

      <Tabs defaultValue="job-boards" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="job-boards">Job Boards</TabsTrigger>
          <TabsTrigger value="strategies">Strategies</TabsTrigger>
          <TabsTrigger value="tricks">Search Tricks</TabsTrigger>
          <TabsTrigger value="networking">Networking</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
        </TabsList>

        <TabsContent value="job-boards" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Comprehensive Job Board Directory
              </CardTitle>
              <CardDescription>
                Curated platforms for finding opportunities across different industries and work styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All Boards</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                  <TabsTrigger value="startup">Startups</TabsTrigger>
                  <TabsTrigger value="remote">Remote</TabsTrigger>
                </TabsList>

                {['all', 'general', 'tech', 'startup', 'remote'].map((boardType) => (
                  <TabsContent key={boardType} value={boardType}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filterBoards(boardType).map((board, index) => {
                        const TypeIcon = getIconForType(board.type);
                        return (
                          <Card key={index} className="border hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                  <TypeIcon className="h-5 w-5 text-primary" />
                                  <div>
                                    <CardTitle className="text-lg">{board.name}</CardTitle>
                                    <Badge variant="secondary" className="mt-1">{board.category}</Badge>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-3 w-3 ${i < board.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">{board.description}</p>
                              
                              <div>
                                <p className="text-sm font-medium mb-2">Key Features:</p>
                                <div className="flex flex-wrap gap-1">
                                  {board.features.map((feature, featureIndex) => (
                                    <Badge key={featureIndex} variant="outline" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-sm"><span className="font-medium">Best for:</span> {board.bestFor}</p>
                              </div>
                              
                              <Button asChild className="w-full" size="sm">
                                <a href={board.url} target="_blank" rel="noopener noreferrer">
                                  Visit {board.name}
                                  <ExternalLink className="ml-2 h-3 w-3" />
                                </a>
                              </Button>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Selection Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50">
                  <Search className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">General Platforms</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Best for traditional industries, entry-level positions, and broad job searches.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50">
                  <MessageSquare className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Tech Platforms</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Specialized for software development, engineering, and technical roles.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/50">
                  <Star className="h-6 w-6 text-purple-600 mb-2" />
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Startup Platforms</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Focus on early-stage companies, equity opportunities, and innovation-driven roles.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50">
                  <MapPin className="h-6 w-6 text-orange-600 mb-2" />
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">Remote Platforms</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Exclusively remote positions, location-independent work, and flexible arrangements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategies" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {searchStrategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {strategy.title}
                    </CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Strategy Details:</h4>
                      <ul className="space-y-1">
                        {strategy.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Implementation Tips:</h5>
                      <ul className="space-y-1">
                        {strategy.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="tricks" className="space-y-6">
          {/* LinkedIn Advanced Tricks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                🔍 LinkedIn Advanced Search Tricks
              </CardTitle>
              <CardDescription>
                Hidden URL parameters and Boolean operators to find the perfect opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Query Parameters</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h5 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">⏰ Time Filters</h5>
                      <div className="space-y-1">
                        <div className="text-xs"><code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">&f_TPR=r86400</code> → Last 24 hours</div>
                        <div className="text-xs"><code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">&f_TPR=r604800</code> → Last week</div>
                        <div className="text-xs"><code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">&f_TPR=r2592000</code> → Last month</div>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-800">
                      <h5 className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">👔 Experience Level</h5>
                      <div className="space-y-1">
                        <div className="text-xs"><code className="bg-green-100 dark:bg-green-900 px-1 rounded">&f_E=2</code> → Entry level</div>
                        <div className="text-xs"><code className="bg-green-100 dark:bg-green-900 px-1 rounded">&f_E=3</code> → Mid-senior level</div>
                        <div className="text-xs"><code className="bg-green-100 dark:bg-green-900 px-1 rounded">&f_E=4</code> → Director level</div>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/50 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h5 className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">🌍 Location & Work Type</h5>
                      <div className="space-y-1">
                        <div className="text-xs"><code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">&f_WT=2</code> → Remote jobs</div>
                        <div className="text-xs"><code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">&f_CR=us</code> → Country filter (US)</div>
                        <div className="text-xs"><code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">&f_AL=true</code> → Easy Apply only</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Boolean Search Magic</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="text-sm font-medium mb-2">🎯 Skill Combinations</h5>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                        <code>"Software Engineer" AND (Python OR Java)</code>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="text-sm font-medium mb-2">❌ Exclude Terms</h5>
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                        <code>"QA Automation" NOT "Intern"</code>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="text-sm font-medium mb-2">🔔 Pro Tip</h5>
                      <p className="text-sm text-muted-foreground">Save refined searches with custom filters, then LinkedIn will email you the minute something new comes in.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indeed Tricks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-800" />
                💼 Indeed URL Hacks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">URL Parameters</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm">
                      <code>&fromage=1</code> → Posted in last 24h
                    </div>
                    <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm">
                      <code>&jt=contract</code> → Job type filter
                    </div>
                    <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm">
                      <code>&radius=0</code> → Only in that city
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Boolean Search</h4>
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm mb-2">Boolean operators work in Indeed's search box too:</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                      <code>"SDET" AND (Playwright OR Cypress)</code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Jobs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                🌐 Google Jobs Power Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-medium">Advanced Operators</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h5 className="text-sm font-medium mb-2">🎯 Site-Specific Search</h5>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs mb-2">
                      <code>"SDET" site:linkedin.com/jobs</code>
                    </div>
                    <p className="text-xs text-muted-foreground">Search only within LinkedIn jobs</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="text-sm font-medium mb-2">📅 Fresh Postings Only</h5>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs mb-2">
                      <code>"QA Automation" after:2025-08-01</code>
                    </div>
                    <p className="text-xs text-muted-foreground">Only jobs posted after specific date</p>
                  </div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">🔔 Google Alerts</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">Save any query and set up notifications for instant alerts on new postings!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Remote Job Boards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-600" />
                🕵️ Remote & Tech Board Tricks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">GitHub Jobs / Remote Boards</h4>
                  <div className="p-3 border rounded-lg">
                    <h5 className="text-sm font-medium mb-2">URL Parameters</h5>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs">
                      <code>?location=remote&full_time=true</code>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="text-sm font-medium mb-2">Wellfound (AngelList)</h5>
                    <p className="text-sm text-muted-foreground">Filter by equity offered, company size, or industry using query tweaks</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">RSS & Automation</h4>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/50 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-1">
                      <Rss className="h-4 w-4" /> RSS Feeds
                    </h5>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Many boards support RSS feeds. Pipe them into Slack/Discord for instant alerts!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Techniques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                🪄 Advanced Search Techniques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Google Alerts Setup
                  </h4>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="space-y-2">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded text-xs">
                        <code>site:linkedin.com/jobs "QA Automation Engineer" "Remote" "Posted today"</code>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Get daily digests of new jobs scraped by Google</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    X-ray Search (Recruiter Trick)
                  </h4>
                  <div className="p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">Use Google/Bing to bypass site filters:</p>
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded text-xs">
                      <code>site:linkedin.com/jobs "QA Automation Engineer" "Remote" "Posted today"</code>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2">Sometimes surfaces postings faster than LinkedIn's own filters!</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/50 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Pro Tips for Maximum Efficiency
                </h4>
                <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>• <strong>Bookmark your best searches:</strong> Save URLs with all parameters for quick access</li>
                  <li>• <strong>Set up multiple alerts:</strong> Different combinations catch different opportunities</li>
                  <li>• <strong>Check mobile vs desktop:</strong> Some platforms show different results</li>
                  <li>• <strong>Use incognito mode:</strong> Prevents search history from affecting results</li>
                  <li>• <strong>Time your searches:</strong> New jobs often post during business hours</li>
                  <li>• <strong>Combine techniques:</strong> Use Google alerts + RSS feeds + direct platform searches</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="networking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Networking Platforms & Strategies</CardTitle>
              <CardDescription>
                Build relationships and discover opportunities through strategic networking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {networkingPlatforms.map((platform, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="mb-4">
                      <h4 className="font-medium">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                      <Badge variant="outline" className="mt-2">{platform.action}</Badge>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium mb-2">Best Practices:</h5>
                      <ul className="space-y-1">
                        {platform.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Research Framework</CardTitle>
              <CardDescription>
                Research companies thoroughly to tailor applications and prepare for interviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companyResearchAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <h4 className="font-medium">{area.category}</h4>
                      </div>
                      <ul className="space-y-1">
                        {area.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Tools & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyResearchTools.map((tool, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{tool.name}</h4>
                      <Button asChild size="sm" variant="outline">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          Visit
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
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