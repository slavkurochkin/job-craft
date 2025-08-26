export const referralSources = [
  {
    source: 'Alumni Network',
    description: 'Former classmates and school connections',
    effectiveness: 'High',
    responseRate: '45-60%',
    howTo: [
      'Search LinkedIn for alumni at target companies',
      'Check school alumni directory',
      'Join alumni groups and events',
      'Mention shared educational background'
    ]
  },
  {
    source: 'Former Colleagues',
    description: 'Past coworkers and team members',
    effectiveness: 'Very High',
    responseRate: '60-80%',
    howTo: [
      'Reach out to previous managers and peers',
      'Check where former colleagues work now',
      'Maintain regular check-ins',
      'Offer mutual assistance'
    ]
  },
  {
    source: 'Industry Professionals',
    description: 'People in your field or target industry',
    effectiveness: 'Medium',
    responseRate: '25-40%',
    howTo: [
      'Connect at industry events and meetups',
      'Engage with content on LinkedIn',
      'Join professional associations',
      'Participate in online communities'
    ]
  },
  {
    source: 'Second-Degree Connections',
    description: 'Connections of your existing network',
    effectiveness: 'Medium',
    responseRate: '35-50%',
    howTo: [
      'Ask mutual connections for introductions',
      'Use LinkedIn\'s "People you may know"',
      'Attend networking events with friends',
      'Join group activities and meetups'
    ]
  },
  {
    source: 'Conference Attendees',
    description: 'People met at industry conferences and events',
    effectiveness: 'High',
    responseRate: '50-70%',
    howTo: [
      'Follow up within 48 hours of meeting',
      'Reference specific conversation points',
      'Connect on LinkedIn with personal note',
      'Share relevant resources discussed'
    ]
  },
  {
    source: 'Online Communities',
    description: 'Members of professional online groups',
    effectiveness: 'Medium',
    responseRate: '20-35%',
    howTo: [
      'Contribute valuable insights first',
      'Build relationships through comments',
      'Offer help before asking for it',
      'Share relevant expertise consistently'
    ]
  }
];

export const messageTemplates = {
  alumni: {
    subject: "Fellow [University] Alum - Career Advice Request",
    template: "Hi [Name],\n\nI hope this message finds you well! I'm a fellow [University] graduate (Class of [Year]) and I've been following your career journey at [Company]. I'm currently exploring opportunities in [Industry/Role] and would greatly value any insights you might have about the field and your experience at [Company].\n\nWould you be open to a brief 15-20 minute call to share your perspective? I'd be happy to work around your schedule.\n\nThank you for considering, and go [School Mascot]!\n\nBest regards,\n[Your Name]"
  },
  colleague: {
    subject: "Catching Up - Career Transition Question",
    template: "Hi [Name],\n\nI hope you're doing well! It's been a while since we worked together at [Previous Company], and I've been thinking about reaching out to catch up.\n\nI'm currently exploring new opportunities in [Industry/Role] and noticed that [Company] seems like an amazing place to work. Given your experience there, I'd love to hear your thoughts about the company culture and any advice you might have.\n\nWould you be interested in grabbing coffee or having a quick call sometime?\n\nLooking forward to hearing from you!\n\nBest,\n[Your Name]"
  },
  professional: {
    subject: "Admiring Your Work in [Industry] - Quick Question",
    template: "Hi [Name],\n\nI came across your profile and was really impressed by your work in [Specific Area/Project]. Your experience in [Industry] is exactly what I'm hoping to learn more about as I explore opportunities in this field.\n\nI'm particularly interested in [Specific Aspect] and would love to hear your perspective on industry trends and what makes [Company] a great place to work.\n\nWould you be open to a brief 15-minute call? I'd be happy to work around your schedule and would greatly appreciate any insights you could share.\n\nThank you for your time!\n\nBest regards,\n[Your Name]"
  },
  referral: {
    subject: "Request for Referral – [Position Title] at [Company]",
    template: "Hi [Name],\n\nI hope you're doing well! I noticed that [Company] is hiring for a [Position Title] role, and it looks like a great fit for my background in [your expertise, e.g., test automation and quality engineering].\n\nSince you're currently at [Company], I was wondering if you'd feel comfortable referring me for the position. I've attached my resume for context, and here's the link to the job posting: [Job Link].\n\nI truly admire the work [Company] is doing in [specific area that resonates with you, e.g., developer experience, scaling test automation, operational excellence], and I'd love the chance to contribute.\n\nOf course, no pressure—totally understand if you're not able to. Thanks so much for your time and consideration!\n\nBest,\n[Your Name]"
  }
};

export const networkingStrategies = [
  {
    strategy: 'Value-First Networking',
    icon: 'Award',
    description: 'Lead with value before making asks',
    tactics: [
      'Share relevant articles or resources',
      'Make introductions between your contacts',
      'Offer your expertise to help solve problems',
      'Celebrate others\' achievements publicly',
      'Provide industry insights and trends'
    ],
    whyItWorks: 'People remember those who help them first. This builds goodwill and makes future requests more likely to succeed.'
  },
  {
    strategy: 'Systematic Relationship Building',
    icon: 'Network',
    description: 'Consistent, organized approach to networking',
    tactics: [
      'Set weekly goals for new connections',
      'Schedule regular check-ins with existing network',
      'Track interactions in a CRM or spreadsheet',
      'Follow up on commitments and promises',
      'Document personal details for future reference'
    ],
    whyItWorks: 'Consistency and organization ensure relationships don\'t fade and help you maintain a strong, active network over time.'
  },
  {
    strategy: 'Multi-Touch Engagement',
    icon: 'TrendingUp',
    description: 'Multiple meaningful interactions over time',
    tactics: [
      'Initial connection with personalized message',
      'Engage with their content regularly',
      'Send relevant opportunities or insights',
      'Invite to industry events or webinars',
      'Schedule periodic catch-up calls'
    ],
    whyItWorks: 'Multiple touchpoints build stronger relationships than one-off interactions and keep you top-of-mind for opportunities.'
  },
  {
    strategy: 'Community Participation',
    icon: 'Users',
    description: 'Active involvement in professional communities',
    tactics: [
      'Join industry-specific online groups',
      'Attend professional association meetings',
      'Participate in conferences and workshops',
      'Volunteer for industry events or committees',
      'Speak at meetups or panel discussions'
    ],
    whyItWorks: 'Community involvement establishes you as an active professional and creates natural networking opportunities.'
  }
];

export const networkingPlatforms = [
  {
    platform: 'LinkedIn',
    icon: 'Linkedin',
    focus: 'Professional networking and industry connections',
    strategies: [
      'Optimize profile for discoverability',
      'Share industry insights and commentary',
      'Engage meaningfully with others\' posts',
      'Use advanced search to find target connections',
      'Join and participate in relevant groups'
    ],
    bestPractices: [
      'Personalize connection requests',
      'Post consistently (2-3 times per week)',
      'Use LinkedIn messaging strategically',
      'Share others\' content with commentary'
    ]
  },
  {
    platform: 'Industry Events',
    icon: 'Calendar',
    focus: 'Face-to-face networking and relationship building',
    strategies: [
      'Research attendees and speakers beforehand',
      'Prepare elevator pitch and questions',
      'Set goals for number of new connections',
      'Follow up within 48 hours',
      'Offer to volunteer or speak at events'
    ],
    bestPractices: [
      'Bring plenty of business cards',
      'Ask thoughtful questions during sessions',
      'Attend networking portions and after-parties',
      'Take notes on conversations for follow-up'
    ]
  },
  {
    platform: 'Professional Associations',
    icon: 'Building',
    focus: 'Industry-specific networking and credibility',
    strategies: [
      'Join relevant professional associations',
      'Attend local chapter meetings regularly',
      'Volunteer for committees or leadership roles',
      'Access member directories for connections',
      'Participate in association job boards'
    ],
    bestPractices: [
      'Be an active, contributing member',
      'Build relationships with leadership',
      'Attend annual conferences and special events',
      'Use membership credentials in your profile'
    ]
  },
  {
    platform: 'Online Communities',
    icon: 'Globe',
    focus: 'Knowledge sharing and thought leadership',
    strategies: [
      'Join Slack workspaces and Discord servers',
      'Participate in Reddit communities',
      'Contribute to industry forums',
      'Engage in Twitter conversations',
      'Share expertise in specialized groups'
    ],
    bestPractices: [
      'Read community guidelines first',
      'Contribute value before self-promoting',
      'Build relationships through consistent participation',
      'Help newcomers and answer questions'
    ]
  }
];

export const informationalInterviews = [
  {
    phase: 'Preparation',
    icon: 'BookOpen',
    tasks: [
      'Research the person and their company thoroughly',
      'Prepare 8-10 thoughtful questions',
      'Review their recent work, posts, or projects',
      'Plan your introduction and background summary',
      'Set clear objectives for the conversation'
    ]
  },
  {
    phase: 'During the Interview',
    icon: 'Coffee',
    tasks: [
      'Start with gratitude and respect their time',
      'Ask open-ended questions about their experience',
      'Listen actively and ask follow-up questions',
      'Take notes (with permission) for future reference',
      'End by asking for additional contacts or advice'
    ]
  },
  {
    phase: 'Follow-up',
    icon: 'Mail',
    tasks: [
      'Send thank you note within 24 hours',
      'Implement advice they provided',
      'Share relevant resources or articles',
      'Update them on your progress periodically',
      'Offer assistance when opportunities arise'
    ]
  }
];