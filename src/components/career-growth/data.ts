export const careerLevels = [
  {
    level: 'Entry Level',
    title: 'Associate/Junior Professional',
    focus: 'Learning foundational skills and building experience',
    skills: [
      'Core technical competencies',
      'Professional communication',
      'Time management',
      'Learning agility',
      'Following processes and procedures',
      'Seeking feedback and mentorship'
    ],
    goals: [
      'Master fundamental job requirements',
      'Build professional relationships',
      'Develop industry knowledge',
      'Complete certification or training programs',
      'Establish work-life balance',
      'Identify career interests and strengths'
    ]
  },
  {
    level: 'Mid-Level',
    title: 'Senior Professional/Specialist',
    focus: 'Owning projects and developing expertise',
    skills: [
      'Advanced technical proficiency',
      'Project management',
      'Problem-solving and critical thinking',
      'Cross-functional collaboration',
      'Mentoring junior team members',
      'Strategic thinking'
    ],
    goals: [
      'Lead end-to-end project delivery',
      'Develop specialized expertise',
      'Build internal and external networks',
      'Mentor junior professionals',
      'Contribute to strategic initiatives',
      'Pursue advanced certifications'
    ]
  },
  {
    level: 'Senior Level',
    title: 'Lead/Principal Professional',
    focus: 'Leading initiatives and driving organizational impact',
    skills: [
      'Deep domain expertise',
      'Technical and thought leadership',
      'Stakeholder management',
      'Team development',
      'Innovation and process improvement',
      'Business acumen'
    ],
    goals: [
      'Drive company-wide initiatives',
      'Establish best practices and standards',
      'Build and lead high-performing teams',
      'Represent company externally',
      'Influence product/service direction',
      'Develop succession planning'
    ]
  },
  {
    level: 'Executive Level',
    title: 'Director/VP/C-Suite',
    focus: 'Setting vision and driving organizational strategy',
    skills: [
      'Strategic vision and planning',
      'Organizational leadership',
      'Financial management',
      'Board and investor relations',
      'Change management',
      'Industry thought leadership'
    ],
    goals: [
      'Set organizational vision and strategy',
      'Drive business growth and profitability',
      'Build organizational capability',
      'Establish industry partnerships',
      'Lead digital transformation',
      'Ensure governance and compliance'
    ]
  }
];

export const salaryData = {
  'Entry Level': { 
    range: 'Base salary level', 
    growth: 'Starting point' 
  },
  'Mid-Level': { 
    range: '+40-60% from entry', 
    growth: '+40-60% increase' 
  },
  'Senior Level': { 
    range: '+80-120% from entry', 
    growth: '+80-120% increase' 
  },
  'Executive Level': { 
    range: '+200-500% from entry', 
    growth: '+200-500% increase' 
  }
};

export const actionPlans = [
  {
    timeframe: '30 Days - Foundation',
    color: 'bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800',
    actions: [
      'Complete comprehensive skills assessment',
      'Update LinkedIn profile and resume',
      'Research target companies and roles',
      'Join 2-3 relevant professional groups',
      'Schedule informational interviews',
      'Set up Google Alerts for industry news'
    ]
  },
  {
    timeframe: '90 Days - Building Momentum',
    color: 'bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800',
    actions: [
      'Complete online certification or course',
      'Attend 2 industry networking events',
      'Connect with 20 new professionals',
      'Start a side project or volunteer work',
      'Request stretch assignments at current job',
      'Begin regular content sharing on LinkedIn'
    ]
  },
  {
    timeframe: '6 Months - Skill Development',
    color: 'bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800',
    actions: [
      'Complete advanced training program',
      'Lead a cross-functional project',
      'Present at team or company meeting',
      'Mentor a junior colleague',
      'Build portfolio of work examples',
      'Expand network to 100+ connections'
    ]
  },
  {
    timeframe: '1 Year - Career Advancement',
    color: 'bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800',
    actions: [
      'Apply for promotion or new role',
      'Speak at industry conference',
      'Establish thought leadership presence',
      'Complete professional certification',
      'Build strategic partnerships',
      'Develop team leadership experience'
    ]
  }
];

export const careerPaths = [
  {
    title: 'Individual Contributor Path',
    description: 'Deep technical expertise and thought leadership',
    levels: [
      {
        level: 'Junior',
        title: 'Associate/Junior [Role]',
        years: '0-2 years',
        responsibilities: ['Learn core skills', 'Complete assigned tasks', 'Seek mentorship'],
        skills: ['Foundation skills', 'Basic domain knowledge', 'Learning agility'],
        salaryGrowth: 'Base level',
        nextStep: 'Focus on skill development and finding a mentor'
      },
      {
        level: 'Mid-Level',
        title: 'Senior [Role]',
        years: '3-5 years',
        responsibilities: ['Own projects end-to-end', 'Mentor junior team members', 'Contribute to technical decisions'],
        skills: ['Advanced technical skills', 'Project management', 'Communication'],
        salaryGrowth: '+40-60% from Junior',
        nextStep: 'Lead complex projects and develop specialization'
      },
      {
        level: 'Senior',
        title: 'Lead/Principal [Role]',
        years: '6-10 years',
        responsibilities: ['Lead technical initiatives', 'Define best practices', 'Cross-team collaboration'],
        skills: ['Deep expertise', 'Technical leadership', 'Strategic thinking'],
        salaryGrowth: '+70-100% from Junior',
        nextStep: 'Become recognized expert or move to management'
      },
      {
        level: 'Expert',
        title: 'Staff/Distinguished [Role]',
        years: '10+ years',
        responsibilities: ['Drive company-wide initiatives', 'External thought leadership', 'Mentor other senior professionals'],
        skills: ['Industry expertise', 'Innovation', 'Organizational impact'],
        salaryGrowth: '+120-200% from Junior',
        nextStep: 'Continue specialization or transition to executive roles'
      }
    ]
  },
  {
    title: 'Management Path',
    description: 'Leading teams and driving business outcomes',
    levels: [
      {
        level: 'Team Lead',
        title: 'Team Lead/Supervisor',
        years: '3-5 years',
        responsibilities: ['Manage small team (3-5 people)', 'Project coordination', 'Performance management'],
        skills: ['People management', 'Communication', 'Delegation'],
        salaryGrowth: '+30-50% from IC role',
        nextStep: 'Develop management skills and expand team size'
      },
      {
        level: 'Manager',
        title: 'Manager',
        years: '5-8 years',
        responsibilities: ['Manage larger team (8-15 people)', 'Budget responsibility', 'Strategic planning'],
        skills: ['Team building', 'Strategic thinking', 'Resource management'],
        salaryGrowth: '+60-90% from Junior IC',
        nextStep: 'Grow team and take on larger scope'
      },
      {
        level: 'Senior Manager',
        title: 'Senior Manager/Director',
        years: '8-12 years',
        responsibilities: ['Manage multiple teams', 'Department strategy', 'Cross-functional leadership'],
        skills: ['Organizational leadership', 'Business strategy', 'Change management'],
        salaryGrowth: '+100-150% from Junior IC',
        nextStep: 'Prepare for executive responsibilities'
      },
      {
        level: 'Executive',
        title: 'VP/SVP/C-Level',
        years: '12+ years',
        responsibilities: ['Organizational strategy', 'P&L responsibility', 'Board reporting'],
        skills: ['Executive presence', 'Vision setting', 'Stakeholder management'],
        salaryGrowth: '+200-500% from Junior IC',
        nextStep: 'CEO/President or board positions'
      }
    ]
  },
  {
    title: 'Entrepreneurial Path',
    description: 'Building and scaling your own ventures',
    levels: [
      {
        level: 'Solopreneur',
        title: 'Freelancer/Consultant',
        years: '0-2 years',
        responsibilities: ['Direct client work', 'Business development', 'Service delivery'],
        skills: ['Core expertise', 'Sales', 'Self-management'],
        salaryGrowth: 'Variable, often -20% to +50% initially',
        nextStep: 'Scale services or build products'
      },
      {
        level: 'Small Business',
        title: 'Small Business Owner',
        years: '2-5 years',
        responsibilities: ['Team building', 'Operations management', 'Growth strategy'],
        skills: ['Leadership', 'Operations', 'Financial management'],
        salaryGrowth: '+20-100% potential with higher risk',
        nextStep: 'Scale operations or sell business'
      },
      {
        level: 'Growth Stage',
        title: 'Founder/CEO',
        years: '5-10 years',
        responsibilities: ['Company vision', 'Funding and investment', 'Market expansion'],
        skills: ['Vision', 'Fundraising', 'Strategic partnerships'],
        salaryGrowth: '+100-1000% potential with equity',
        nextStep: 'Scale to enterprise or exit'
      },
      {
        level: 'Scale/Exit',
        title: 'Serial Entrepreneur',
        years: '10+ years',
        responsibilities: ['Portfolio management', 'Angel investing', 'Industry leadership'],
        skills: ['Pattern recognition', 'Network building', 'Investment analysis'],
        salaryGrowth: 'Highly variable, potential for significant wealth',
        nextStep: 'Multiple ventures or venture capital'
      }
    ]
  }
];

// Keep both old and new names for backward compatibility
export const actionPlanTemplate = {
  timeframes: ['30 days', '90 days', '6 months', '1 year'],
  categories: [
    {
      category: 'Skill Development',
      actions: [
        'Complete online certification in [target skill]',
        'Join professional development workshop',
        'Find mentor in target area',
        'Start side project to practice skills'
      ]
    },
    {
      category: 'Network Building',
      actions: [
        'Connect with 5 industry professionals',
        'Attend 2 networking events',
        'Join professional association',
        'Schedule informational interviews'
      ]
    },
    {
      category: 'Experience Gaining',
      actions: [
        'Volunteer for stretch assignment',
        'Lead cross-functional project',
        'Present at team/company meeting',
        'Take on mentoring responsibility'
      ]
    },
    {
      category: 'Visibility & Recognition',
      actions: [
        'Share insights on LinkedIn',
        'Speak at industry event',
        'Publish article or blog post',
        'Participate in company initiatives'
      ]
    }
  ]
};

export const skillCategories = [
  {
    category: 'Technical Skills',
    icon: 'Code',
    description: 'Industry-specific technical competencies',
    skills: [
      { name: 'Programming Languages', importance: 'High', trend: 'Stable' },
      { name: 'Cloud Platforms', importance: 'High', trend: 'Growing' },
      { name: 'Data Analysis', importance: 'Medium', trend: 'Growing' },
      { name: 'Cybersecurity', importance: 'High', trend: 'Critical' },
      { name: 'AI/Machine Learning', importance: 'Medium', trend: 'Emerging' },
      { name: 'DevOps/Automation', importance: 'High', trend: 'Growing' }
    ]
  },
  {
    category: 'Leadership Skills',
    icon: 'Users',
    description: 'People and team management capabilities',
    skills: [
      { name: 'Team Management', importance: 'High', trend: 'Stable' },
      { name: 'Strategic Thinking', importance: 'High', trend: 'Growing' },
      { name: 'Change Management', importance: 'Medium', trend: 'Growing' },
      { name: 'Conflict Resolution', importance: 'Medium', trend: 'Stable' },
      { name: 'Performance Coaching', importance: 'High', trend: 'Growing' },
      { name: 'Cross-functional Leadership', importance: 'High', trend: 'Critical' }
    ]
  },
  {
    category: 'Business Skills',
    icon: 'TrendingUp',
    description: 'Commercial and strategic business acumen',
    skills: [
      { name: 'Financial Analysis', importance: 'High', trend: 'Stable' },
      { name: 'Market Research', importance: 'Medium', trend: 'Growing' },
      { name: 'Product Management', importance: 'High', trend: 'Growing' },
      { name: 'Customer Success', importance: 'High', trend: 'Critical' },
      { name: 'Business Development', importance: 'Medium', trend: 'Stable' },
      { name: 'Digital Transformation', importance: 'High', trend: 'Growing' }
    ]
  },
  {
    category: 'Soft Skills',
    icon: 'MessageSquare',
    description: 'Interpersonal and communication abilities',
    skills: [
      { name: 'Communication', importance: 'High', trend: 'Critical' },
      { name: 'Emotional Intelligence', importance: 'High', trend: 'Growing' },
      { name: 'Adaptability', importance: 'High', trend: 'Critical' },
      { name: 'Critical Thinking', importance: 'High', trend: 'Stable' },
      { name: 'Collaboration', importance: 'High', trend: 'Growing' },
      { name: 'Cultural Competence', importance: 'Medium', trend: 'Emerging' }
    ]
  }
];

export const resources = {
  learningPlatforms: [
    { name: 'Coursera', focus: 'University courses and certificates' },
    { name: 'LinkedIn Learning', focus: 'Professional skills and software' },
    { name: 'Udemy', focus: 'Technical and business skills' },
    { name: 'Pluralsight', focus: 'Technology and creative skills' },
    { name: 'MasterClass', focus: 'Leadership and creative skills' },
    { name: 'edX', focus: 'Academic and professional courses' }
  ],
  certifications: [
    { name: 'AWS Certified', field: 'Cloud Computing' },
    { name: 'PMP', field: 'Project Management' },
    { name: 'Google Analytics', field: 'Digital Marketing' },
    { name: 'Salesforce Certified', field: 'CRM and Sales' },
    { name: 'Scrum Master', field: 'Agile Methodology' },
    { name: 'Six Sigma', field: 'Process Improvement' }
  ],
  books: [
    { title: 'The First 90 Days', author: 'Michael Watkins', focus: 'Career Transitions' },
    { title: 'Multipliers', author: 'Liz Wiseman', focus: 'Leadership' },
    { title: 'The Lean Startup', author: 'Eric Ries', focus: 'Entrepreneurship' },
    { title: 'Crucial Conversations', author: 'Kerry Patterson', focus: 'Communication' },
    { title: 'The 7 Habits', author: 'Stephen Covey', focus: 'Personal Effectiveness' },
    { title: 'Good to Great', author: 'Jim Collins', focus: 'Business Strategy' }
  ]
};