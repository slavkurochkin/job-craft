import { 
  Users, 
  FileText, 
  Globe, 
  MessageSquare,
  CheckCircle,
  Target,
  Eye,
  Award,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

export const profileElements = [
  {
    platform: 'LinkedIn',
    importance: 'Critical',
    completionRate: 85,
    elements: [
      {
        element: 'Professional Headshot',
        status: 'complete',
        importance: 'High',
        why: 'Profiles with photos get 21x more views. A professional photo builds trust and makes you memorable to recruiters and connections.',
        tips: [
          'Use a high-quality, recent photo',
          'Dress professionally for your industry',
          'Smile naturally and maintain eye contact',
          'Keep background simple and uncluttered'
        ]
      },
      {
        element: 'Compelling Headline',
        status: 'complete',
        importance: 'High',
        why: 'Your headline appears in search results and is one of the first things people see. It should immediately communicate your value proposition.',
        tips: [
          'Go beyond just your job title',
          'Include key skills and value you bring',
          'Use industry keywords for searchability',
          'Keep it under 220 characters'
        ]
      },
      {
        element: 'Detailed Summary',
        status: 'needs-work',
        importance: 'High',
        why: 'The summary is your elevator pitch in writing. It allows you to tell your story, showcase personality, and explain career transitions.',
        tips: [
          'Write in first person for authenticity',
          'Tell a story about your career journey',
          'Include quantifiable achievements',
          'End with a call-to-action'
        ]
      },
      {
        element: 'Experience Details',
        status: 'complete',
        importance: 'High',
        why: 'Detailed experience sections show the depth of your expertise and help with keyword optimization for recruiter searches.',
        tips: [
          'Use action verbs and quantify results',
          'Include relevant keywords naturally',
          'Focus on achievements, not just duties',
          'Tailor descriptions to target roles'
        ]
      },
      {
        element: 'Skills & Endorsements',
        status: 'needs-work',
        importance: 'Medium',
        why: 'Skills help with search algorithm ranking and provide social proof when endorsed by colleagues.',
        tips: [
          'Add up to 50 relevant skills',
          'Prioritize top 3 skills you want to be known for',
          'Regularly update based on industry trends',
          'Ask colleagues to endorse key skills'
        ]
      },
      {
        element: 'Recommendations',
        status: 'missing',
        importance: 'Medium',
        why: 'Recommendations provide third-party validation of your skills and work quality, acting as social proof for potential employers.',
        tips: [
          'Request recommendations from diverse sources',
          'Offer to write recommendations for others first',
          'Be specific about what you want highlighted',
          'Follow up politely if no response initially'
        ]
      }
    ]
  }
];

export const contentStrategy = [
  {
    type: 'Industry Insights',
    frequency: '2-3 times per week',
    why: 'Positions you as a thought leader and demonstrates deep industry knowledge, making you more attractive to employers and connections.',
    examples: [
      'Share analysis of industry trends',
      'Comment on major industry news',
      'Discuss emerging technologies or practices',
      'Offer predictions or forecasts'
    ]
  },
  {
    type: 'Career Updates',
    frequency: 'As needed',
    why: 'Keeps your network informed of your professional journey and can attract opportunities from people who see your growth.',
    examples: [
      'New job announcements',
      'Completion of certifications',
      'Project milestones and achievements',
      'Speaking engagements or publications'
    ]
  },
  {
    type: 'Educational Content',
    frequency: '1-2 times per week',
    why: 'Shows continuous learning mindset and helps others, which builds goodwill and establishes you as someone who adds value.',
    examples: [
      'Share learnings from courses or books',
      'Explain complex concepts simply',
      'Curate useful resources for your network',
      'Write how-to guides or tutorials'
    ]
  },
  {
    type: 'Network Appreciation',
    frequency: 'Weekly',
    why: 'Strengthens relationships and encourages reciprocal support. People remember those who celebrate and acknowledge others.',
    examples: [
      'Congratulate connections on achievements',
      'Share others\' valuable content',
      'Thank mentors or colleagues publicly',
      'Highlight team successes'
    ]
  }
];

export const platformStrategies = [
  {
    platform: 'LinkedIn',
    icon: Users,
    purpose: 'Professional networking and job searching',
    why: 'LinkedIn is where 87% of recruiters search for candidates. It\'s essential for professional visibility and networking.',
    optimization: [
      'Complete all profile sections for better search ranking',
      'Post regularly to increase visibility in feeds',
      'Engage with others\' content to build relationships',
      'Use LinkedIn messaging for warm outreach'
    ],
    metrics: ['Profile views', 'Connection growth', 'Content engagement', 'Search appearances']
  },
  {
    platform: 'GitHub',
    icon: FileText,
    purpose: 'Technical portfolio and code samples',
    why: 'For technical roles, GitHub is your portfolio. It shows actual work quality and demonstrates coding skills better than any resume.',
    optimization: [
      'Pin your best repositories to profile',
      'Write clear README files for projects',
      'Contribute to open source projects',
      'Keep commit history active and consistent'
    ],
    metrics: ['Repository stars', 'Followers', 'Contributions', 'Pull requests']
  },
  {
    platform: 'Personal Website',
    icon: Globe,
    purpose: 'Comprehensive portfolio and personal brand',
    why: 'A personal website gives you complete control over your narrative and allows you to showcase work that doesn\'t fit other platforms.',
    optimization: [
      'Create a memorable, professional domain name',
      'Optimize for search engines (SEO)',
      'Include case studies and project details',
      'Add contact information and clear calls-to-action'
    ],
    metrics: ['Website traffic', 'Time on site', 'Contact form submissions', 'Search rankings']
  },
  {
    platform: 'Twitter/X',
    icon: MessageSquare,
    purpose: 'Industry conversations and thought leadership',
    why: 'Twitter allows you to join industry conversations, follow thought leaders, and share quick insights that can increase your visibility.',
    optimization: [
      'Participate in industry hashtags and chats',
      'Share valuable content consistently',
      'Engage with industry leaders\' posts',
      'Use threads to share longer insights'
    ],
    metrics: ['Follower growth', 'Engagement rate', 'Retweets', 'Mentions']
  }
];

export const brandingElements = [
  {
    element: 'Visual Consistency',
    importance: 'High',
    why: 'Consistent visuals across platforms create recognition and professionalism. It makes you more memorable and trustworthy.',
    actions: [
      'Use the same professional photo across all platforms',
      'Maintain consistent color scheme and fonts',
      'Create branded templates for content sharing',
      'Ensure logos and graphics align with your brand'
    ]
  },
  {
    element: 'Message Consistency',
    importance: 'High',
    why: 'Consistent messaging reinforces your value proposition and makes it clear what you stand for professionally.',
    actions: [
      'Develop 2-3 key messages about your expertise',
      'Use similar language and tone across platforms',
      'Align your bio and summary descriptions',
      'Ensure content themes support your brand'
    ]
  },
  {
    element: 'Professional Voice',
    importance: 'Medium',
    why: 'A distinctive professional voice helps you stand out while remaining authentic and relatable to your target audience.',
    actions: [
      'Define your communication style and tone',
      'Be authentic while remaining professional',
      'Share personal insights and experiences',
      'Maintain voice consistency in all communications'
    ]
  }
];

export const getStatusColor = (status: string) => {
  switch(status) {
    case 'complete': return 'text-green-600';
    case 'needs-work': return 'text-yellow-600';
    case 'missing': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

export const getStatusIcon = (status: string) => {
  switch(status) {
    case 'complete': return CheckCircle;
    case 'needs-work': return Target;
    case 'missing': return Eye;
    default: return CheckCircle;
  }
};

export const contentCalendarData = [
  ['Industry Insight', 'Motivational Monday'],
  ['Educational Content', 'Tutorial Tuesday'],
  ['Career Update', 'Wisdom Wednesday'],
  ['Network Appreciation', 'Thankful Thursday'],
  ['Week Reflection', 'Feature Friday'],
  ['Personal Project', 'Skill Saturday'],
  ['Industry News', 'Summary Sunday']
];

export const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];