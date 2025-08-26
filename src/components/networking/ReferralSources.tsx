import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Search } from 'lucide-react';
import { referralSources } from './data';

export function ReferralSources() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {referralSources.map((source, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{source.source}</CardTitle>
                <div className="flex gap-2">
                  <Badge 
                    variant={
                      source.effectiveness === 'Very High' ? 'default' :
                      source.effectiveness === 'High' ? 'secondary' : 'outline'
                    }
                  >
                    {source.effectiveness}
                  </Badge>
                  <Badge variant="outline">{source.responseRate}</Badge>
                </div>
              </div>
              <CardDescription>{source.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-3">How to Leverage:</h4>
              <ul className="space-y-2">
                {source.howTo.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Advanced Contact Discovery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">LinkedIn Search Strategies</h4>
              <ul className="space-y-2 text-sm">
                <li>• Use Boolean search operators (AND, OR, NOT)</li>
                <li>• Filter by company, industry, and location</li>
                <li>• Search for specific job titles and keywords</li>
                <li>• Explore 2nd and 3rd degree connections</li>
                <li>• Check "People also viewed" sections</li>
                <li>• Use LinkedIn Sales Navigator for advanced searches</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company Research Tools</h4>
              <ul className="space-y-2 text-sm">
                <li>• Company LinkedIn pages for employee lists</li>
                <li>• Crunchbase for startup team information</li>
                <li>• Company websites for leadership teams</li>
                <li>• Industry publications for thought leaders</li>
                <li>• Conference speaker lists and panels</li>
                <li>• Professional association member directories</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Warm Introduction Tactics</h4>
              <ul className="space-y-2 text-sm">
                <li>• Ask mutual connections for introductions</li>
                <li>• Reference shared experiences or interests</li>
                <li>• Mention common connections in outreach</li>
                <li>• Join groups where target contacts are active</li>
                <li>• Attend events where they\'ll be speaking</li>
                <li>• Engage with their content before reaching out</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}