import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Users, BookOpen, TrendingUp, Info } from 'lucide-react';

export function Resources() {
  const learningPlatforms = [
    { name: 'LinkedIn Learning', url: 'https://linkedin.com/learning', description: 'Professional courses by industry experts' },
    { name: 'Coursera', url: 'https://coursera.org', description: 'University-level courses and certifications' },
    { name: 'Udemy', url: 'https://udemy.com', description: 'Practical skills and technical training' },
    { name: 'MasterClass', url: 'https://masterclass.com', description: 'Learn from world-class experts' },
    { name: 'Pluralsight', url: 'https://pluralsight.com', description: 'Technology and creative skills platform' },
    { name: 'edX', url: 'https://edx.org', description: 'High-quality courses from top universities' }
  ];

  const professionalCommunities = [
    { name: 'Meetup', url: 'https://meetup.com', description: 'Local professional networking events' },
    { name: 'Reddit Professional Subreddits', url: 'https://reddit.com', description: 'Industry-specific discussion communities' },
    { name: 'Discord Professional Servers', url: 'https://discord.com', description: 'Real-time professional chat communities' },
    { name: 'Guild Education', url: 'https://guildeducation.com', description: 'Employer-sponsored education networks' }
  ];

  const careerResources = [
    { name: 'BetterUp', url: 'https://betterup.com', description: 'Professional coaching and development' },
    { name: 'MentorCruise', url: 'https://mentorcruise.com', description: 'Find industry mentors' },
    { name: 'Glassdoor', url: 'https://glassdoor.com', description: 'Salary data and company insights' },
    { name: 'PayScale', url: 'https://payscale.com', description: 'Salary benchmarking and market data' },
    { name: 'Bureau of Labor Statistics', url: 'https://bls.gov', description: 'Official employment and wage data' },
    { name: 'Harvard Business Review', url: 'https://hbr.org', description: 'Business insights and career advice' },
    { name: 'levels.fyi', url: 'https://levels.fyi', description: 'Tech salary and compensation data' },
    { name: 'Crunchbase', url: 'https://crunchbase.com', description: 'Company funding, valuation, and growth data' }
  ];

  const readingCategories = [
    {
      category: 'Leadership & Management',
      books: [
        '"The Manager\'s Path" by Camille Fournier',
        '"Radical Candor" by Kim Scott',
        '"The Culture Map" by Erin Meyer',
        '"Multipliers" by Liz Wiseman'
      ]
    },
    {
      category: 'Career Development',
      books: [
        '"Designing Your Life" by Bill Burnett',
        '"The Startup of You" by Reid Hoffman',
        '"What Color Is Your Parachute?" by Richard N. Bolles',
        '"Never Eat Alone" by Keith Ferrazzi'
      ]
    }
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      
      {/* Learning Platforms */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            Learning Platforms
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Access high-quality courses and certifications to develop new skills and advance your career.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {learningPlatforms.map((platform, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div>
                <h4 className="font-medium">{platform.name}</h4>
                <p className="text-sm text-muted-foreground">{platform.description}</p>
              </div>
              <Button 
                onClick={() => openLink(platform.url)} 
                size="sm" 
                variant="outline"
                className="ml-4"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Professional Communities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            Professional Communities
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Connect with peers, share knowledge, and build your professional network.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">How Professional Communities Help Your Career</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <strong>Networking:</strong> Build relationships with industry professionals and potential mentors</li>
                  <li>• <strong>Knowledge Sharing:</strong> Learn best practices, trends, and insider insights</li>
                  <li>• <strong>Job Opportunities:</strong> Access hidden job markets through community connections</li>
                  <li>• <strong>Skill Development:</strong> Participate in workshops, webinars, and collaborative projects</li>
                  <li>• <strong>Industry Updates:</strong> Stay current with technology changes and market trends</li>
                  <li>• <strong>Personal Branding:</strong> Establish yourself as a thought leader by contributing to discussions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {professionalCommunities.map((community, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div>
                  <h4 className="font-medium">{community.name}</h4>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                </div>
                <Button 
                  onClick={() => openLink(community.url)} 
                  size="sm" 
                  variant="outline"
                  className="ml-4"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Career Resources
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Access coaching, mentorship, and market data to make informed career decisions.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">How Career Resources Accelerate Your Growth</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• <strong>Professional Coaching:</strong> Get personalized guidance for career transitions and skill development</li>
                  <li>• <strong>Mentorship:</strong> Learn from experienced professionals who've walked your path</li>
                  <li>• <strong>Market Intelligence:</strong> Make data-driven decisions about salary negotiations and job changes</li>
                  <li>• <strong>Industry Insights:</strong> Understand trends, growth areas, and future opportunities</li>
                  <li>• <strong>Strategic Planning:</strong> Develop long-term career roadmaps with expert guidance</li>
                  <li>• <strong>Accountability:</strong> Stay on track with your goals through regular check-ins and support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {careerResources.map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div>
                  <h4 className="font-medium">{resource.name}</h4>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
                <Button 
                  onClick={() => openLink(resource.url)} 
                  size="sm" 
                  variant="outline"
                  className="ml-4"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Reading */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-orange-600" />
            Recommended Reading
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Essential books for professional development and career advancement.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {readingCategories.map((category, index) => (
              <div key={index}>
                <h4 className="font-medium mb-3">{category.category}</h4>
                <ul className="space-y-2 text-sm">
                  {category.books.map((book, bookIndex) => (
                    <li key={bookIndex} className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}