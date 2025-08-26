import { 
  Search, 
  Building, 
  Users, 
  Globe, 
  Eye,
  TrendingUp,
  Target,
  Network,
  Briefcase,
  Rocket,
  Home,
  Code
} from 'lucide-react';

export const jobBoards = [
  // General Platforms
  {
    name: 'LinkedIn',
    category: 'General',
    description: 'Professional networking platform with extensive job listings',
    rating: 5,
    features: ['Networking', 'Company Research', 'Recruiter Access', 'Salary Insights'],
    bestFor: 'All industries and levels',
    url: 'https://linkedin.com/jobs',
    type: 'general'
  },
  {
    name: 'Indeed',
    category: 'General',
    description: 'Comprehensive job search engine aggregating listings',
    rating: 4,
    features: ['Salary Insights', 'Company Reviews', 'Easy Apply', 'Job Alerts'],
    bestFor: 'Entry to mid-level positions',
    url: 'https://indeed.com',
    type: 'general'
  },
  {
    name: 'Glassdoor',
    category: 'General',
    description: 'Job listings with company insights and salary data',
    rating: 4,
    features: ['Company Reviews', 'Salary Data', 'Interview Questions', 'CEO Approval'],
    bestFor: 'Research and mid-level roles',
    url: 'https://glassdoor.com',
    type: 'general'
  },
  {
    name: 'ZipRecruiter',
    category: 'General',
    description: 'AI-powered job matching platform',
    rating: 3,
    features: ['AI Matching', 'Mobile App', 'Quick Apply', 'Employer Messaging'],
    bestFor: 'Various industries',
    url: 'https://ziprecruiter.com',
    type: 'general'
  },
  
  // Tech Platforms
  {
    name: 'Stack Overflow Jobs',
    category: 'Tech',
    description: 'Developer-focused job board with technical roles',
    rating: 4,
    features: ['Tech Focus', 'Developer Community', 'Remote Options', 'Stack Overflow Integration'],
    bestFor: 'Software developers and engineers',
    url: 'https://stackoverflow.com/jobs',
    type: 'tech'
  },
  {
    name: 'Dice',
    category: 'Tech',
    description: 'Technology-focused job board',
    rating: 4,
    features: ['Tech Skills Matching', 'Contract Work', 'Salary Tools', 'Career Advice'],
    bestFor: 'Technology professionals',
    url: 'https://dice.com',
    type: 'tech'
  },
  {
    name: 'GitHub Jobs',
    category: 'Tech',
    description: 'Developer jobs integrated with GitHub',
    rating: 4,
    features: ['Developer Focus', 'GitHub Integration', 'Remote Friendly', 'Open Source'],
    bestFor: 'Software developers',
    url: 'https://github.com/jobs',
    type: 'tech'
  },
  {
    name: 'Hired',
    category: 'Tech',
    description: 'Marketplace connecting tech talent with companies',
    rating: 4,
    features: ['Curated Matching', 'Salary Transparency', 'Interview Process', 'Career Coaching'],
    bestFor: 'Experienced tech professionals',
    url: 'https://hired.com',
    type: 'tech'
  },

  // Startup Platforms
  {
    name: 'Wellfound (AngelList)',
    category: 'Startup',
    description: 'Startup-focused platform for tech roles',
    rating: 5,
    features: ['Startup Culture', 'Equity Info', 'Direct Founder Contact', 'Company Stage Info'],
    bestFor: 'Tech roles at startups',
    url: 'https://wellfound.com',
    type: 'startup'
  },
  {
    name: 'Y Combinator Jobs',
    category: 'Startup',
    description: 'Jobs at Y Combinator portfolio companies',
    rating: 4,
    features: ['YC Network', 'Early Stage', 'High Growth', 'Equity Heavy'],
    bestFor: 'Startup enthusiasts',
    url: 'https://www.ycombinator.com/jobs',
    type: 'startup'
  },
  {
    name: 'Founder Groups',
    category: 'Startup',
    description: 'Startup job board and community',
    rating: 3,
    features: ['Founder Network', 'Early Stage', 'Community Access', 'Mentorship'],
    bestFor: 'Early career in startups',
    url: 'https://foundergroups.com',
    type: 'startup'
  },
  {
    name: 'StartupJobs',
    category: 'Startup',
    description: 'Dedicated startup job platform',
    rating: 3,
    features: ['Startup Focus', 'Equity Info', 'Growth Stage', 'Direct Applications'],
    bestFor: 'All startup roles',
    url: 'https://startupjobs.com',
    type: 'startup'
  },
  {
    name: 'F6S Jobs',
    category: 'Startup',
    description: 'Startup ecosystem job board',
    rating: 3,
    features: ['Global Startups', 'Ecosystem Access', 'Founder Network', 'Early Stage'],
    bestFor: 'International startup roles',
    url: 'https://www.f6s.com/jobs',
    type: 'startup'
  },

  // Remote Work Platforms
  {
    name: 'Remote.co',
    category: 'Remote',
    description: 'Curated remote job listings',
    rating: 4,
    features: ['100% Remote', 'Curated Jobs', 'Company Profiles', 'Remote Culture'],
    bestFor: 'Remote-first professionals',
    url: 'https://remote.co',
    type: 'remote'
  },
  {
    name: 'RemoteOK',
    category: 'Remote',
    description: 'Popular remote job board for tech roles',
    rating: 5,
    features: ['Tech Focus', 'Salary Transparency', 'Global Opportunities', 'Simple Interface'],
    bestFor: 'Remote tech professionals',
    url: 'https://remoteok.io',
    type: 'remote'
  },
  {
    name: 'We Work Remotely',
    category: 'Remote',
    description: 'Largest remote work community',
    rating: 4,
    features: ['Large Community', 'All Industries', 'Remote Culture', 'Company Insights'],
    bestFor: 'All remote workers',
    url: 'https://weworkremotely.com',
    type: 'remote'
  },
  {
    name: 'FlexJobs',
    category: 'Remote',
    description: 'Flexible and remote job opportunities',
    rating: 4,
    features: ['Flexible Work', 'Vetted Jobs', 'Career Coaching', 'Premium Service'],
    bestFor: 'Flexible work arrangements',
    url: 'https://flexjobs.com',
    type: 'remote'
  },
  {
    name: 'Nomad List Jobs',
    category: 'Remote',
    description: 'Remote jobs for digital nomads',
    rating: 3,
    features: ['Nomad Community', 'Location Independent', 'Timezone Friendly', 'Global Network'],
    bestFor: 'Digital nomads',
    url: 'https://nomadlist.com/jobs',
    type: 'remote'
  },
  {
    name: 'Remote.com',
    category: 'Remote',
    description: 'Global remote job platform',
    rating: 3,
    features: ['Global Remote', 'All Levels', 'Company Services', 'Remote Tools'],
    bestFor: 'International remote work',
    url: 'https://remote.com/jobs',
    type: 'remote'
  }
];

export const searchStrategies = [
  {
    title: 'The 70-20-10 Rule',
    description: 'Allocate your job search efforts strategically',
    icon: Target,
    details: [
      '70% - Apply to jobs that match your current level and skills',
      '20% - Apply to stretch roles that would be a step up',
      '10% - Apply to dream jobs that might be a big leap'
    ],
    tips: [
      'Track your application ratio weekly',
      'Adjust percentages based on response rates',
      'Focus more on 70% category if getting few responses',
      'Increase 20% category when getting consistent interviews'
    ]
  },
  {
    title: 'Hidden Job Market Strategy',
    description: 'Access the 80% of jobs never posted publicly',
    icon: Eye,
    details: [
      'Cold outreach to hiring managers',
      'Networking through professional connections',
      'Company research and direct applications',
      'Industry events and meetups',
      'Social media engagement with companies',
      'Informational interviews'
    ],
    tips: [
      'Research company org charts to find hiring managers',
      'Use LinkedIn Sales Navigator for advanced searches',
      'Follow companies on social media for insider insights',
      'Set up Google Alerts for target companies'
    ]
  },
  {
    title: 'Application Timing Strategy',
    description: 'Optimize when you apply and follow up',
    icon: TrendingUp,
    details: [
      'Apply early in the week (Tuesday-Thursday)',
      'Morning applications get more attention (9-11 AM)',
      'Apply within 48 hours of job posting',
      'Follow up after 1-2 weeks of silence',
      'Reapply to same company after 3-6 months'
    ],
    tips: [
      'Use scheduling tools for optimal timing',
      'Track application timestamps for analysis',
      'Consider time zones for remote positions',
      'Avoid holiday periods for applications'
    ]
  },
  {
    title: 'Multi-Channel Approach',
    description: 'Diversify your job search channels',
    icon: Network,
    details: [
      'Job boards (40% of effort)',
      'Networking and referrals (30% of effort)',
      'Direct company applications (20% of effort)',
      'Recruiters and agencies (10% of effort)'
    ],
    tips: [
      'Track which channels yield best results',
      'Adjust allocation based on your industry',
      'Maintain consistent presence across channels',
      'Leverage each channel\'s unique advantages'
    ]
  },
  {
    title: 'Industry-Specific Strategies',
    description: 'Tailor your approach to your target industry',
    icon: Briefcase,
    details: [
      'Tech: GitHub contributions, technical blogs, open source',
      'Finance: Certifications, industry publications, networking events',
      'Healthcare: Professional licenses, continuing education, associations',
      'Creative: Portfolio websites, creative communities, freelance work'
    ],
    tips: [
      'Research industry-specific job boards',
      'Join professional associations',
      'Attend industry conferences and meetups',
      'Follow industry thought leaders'
    ]
  }
];

export const networkingPlatforms = [
  {
    name: 'LinkedIn Groups',
    description: 'Industry-specific professional groups',
    action: 'Join 5-10 relevant groups in your field',
    tips: [
      'Participate in discussions regularly',
      'Share valuable content',
      'Connect with active group members',
      'Ask thoughtful questions'
    ]
  },
  {
    name: 'Professional Associations',
    description: 'Industry organizations and societies',
    action: 'Become a member of 1-2 key associations',
    tips: [
      'Attend local chapter meetings',
      'Volunteer for committees',
      'Speak at events when possible',
      'Access member-only job boards'
    ]
  },
  {
    name: 'Slack Communities',
    description: 'Tech and startup communities',
    action: 'Join industry-specific Slack workspaces',
    tips: [
      'Introduce yourself in welcome channels',
      'Help others with questions',
      'Share relevant job postings',
      'Build relationships before asking for help'
    ]
  },
  {
    name: 'Discord Servers',
    description: 'Developer and creative communities',
    action: 'Join servers related to your skills',
    tips: [
      'Participate in coding challenges',
      'Share your projects',
      'Offer help to beginners',
      'Join voice chats and study groups'
    ]
  },
  {
    name: 'Alumni Networks',
    description: 'School and university connections',
    action: 'Reach out to alumni in target companies',
    tips: [
      'Use school alumni directories',
      'Attend alumni events',
      'Mention shared experiences',
      'Offer to help fellow alumni'
    ]
  },
  {
    name: 'Industry Meetups',
    description: 'Local networking events',
    action: 'Attend 2-3 events per month',
    tips: [
      'Prepare elevator pitch',
      'Bring business cards',
      'Follow up within 48 hours',
      'Offer to help with event organization'
    ]
  },
  {
    name: 'Twitter/X Communities',
    description: 'Industry conversations and hashtags',
    action: 'Follow industry leaders and participate in discussions',
    tips: [
      'Use relevant hashtags',
      'Share valuable content',
      'Engage with others\' posts',
      'Build your thought leadership'
    ]
  },
  {
    name: 'Reddit Communities',
    description: 'Subreddits for your industry',
    action: 'Join and contribute to relevant subreddits',
    tips: [
      'Read community rules first',
      'Provide helpful answers',
      'Share experiences and insights',
      'Avoid self-promotion unless allowed'
    ]
  }
];

export const companyResearchAreas = [
  {
    category: 'Company Basics',
    icon: Building,
    items: [
      'Company mission, vision, and values',
      'Business model and revenue streams',
      'Products and services offered',
      'Company size and locations',
      'Founding story and history',
      'Leadership team and key executives'
    ]
  },
  {
    category: 'Financial Health',
    icon: TrendingUp,
    items: [
      'Revenue growth and profitability',
      'Recent funding rounds or IPO status',
      'Stock performance (if public)',
      'Competitive position in market',
      'Major investors and partnerships',
      'Financial stability indicators'
    ]
  },
  {
    category: 'Culture & Values',
    icon: Users,
    items: [
      'Employee reviews on Glassdoor',
      'Company culture videos and content',
      'Diversity and inclusion initiatives',
      'Work-life balance policies',
      'Professional development opportunities',
      'Employee benefits and perks'
    ]
  },
  {
    category: 'Recent Developments',
    icon: Globe,
    items: [
      'Recent news and press releases',
      'New product launches',
      'Expansion or restructuring plans',
      'Industry awards and recognition',
      'Partnership announcements',
      'Leadership changes'
    ]
  }
];

export const companyResearchTools = [
  {
    name: 'Levels.fyi',
    description: 'Tech compensation data and career levels',
    features: ['Salary data by level', 'Total compensation', 'Stock options', 'Career progression'],
    url: 'https://levels.fyi'
  },
  {
    name: 'Crunchbase',
    description: 'Startup and company intelligence',
    features: ['Funding data', 'Company profiles', 'News updates', 'Investor information'],
    url: 'https://crunchbase.com'
  },
  {
    name: 'Glassdoor',
    description: 'Employee reviews and company insights',
    features: ['Employee reviews', 'Salary data', 'Interview experiences', 'CEO ratings'],
    url: 'https://glassdoor.com'
  },
  {
    name: 'LinkedIn Company Pages',
    description: 'Professional company information',
    features: ['Employee connections', 'Company updates', 'Job postings', 'Employee insights'],
    url: 'https://linkedin.com'
  },
  {
    name: 'BuiltWith',
    description: 'Technology stack analysis',
    features: ['Tech stack', 'Web technologies', 'Traffic analytics', 'Competitor analysis'],
    url: 'https://builtwith.com'
  },
  {
    name: 'SimilarWeb',
    description: 'Website traffic and analytics',
    features: ['Traffic data', 'Audience insights', 'Competitor comparison', 'Market share'],
    url: 'https://similarweb.com'
  },
  {
    name: 'Blind',
    description: 'Anonymous professional network',
    features: ['Company insights', 'Salary discussions', 'Work culture', 'Anonymous reviews'],
    url: 'https://teamblind.com'
  },
  {
    name: 'Google Alerts',
    description: 'Company news monitoring',
    features: ['News alerts', 'Custom keywords', 'Email notifications', 'Real-time updates'],
    url: 'https://google.com/alerts'
  }
];

export const getIconForType = (type: string) => {
  switch(type) {
    case 'startup': return Rocket;
    case 'remote': return Home;
    case 'tech': return Code;
    default: return Briefcase;
  }
};

export const filterBoards = (type: string) => {
  if (type === 'all') return jobBoards;
  return jobBoards.filter(board => board.type === type);
};