export const mockApplications = [
  {
    id: 1,
    company: 'Tech Corp',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    appliedDate: '2024-01-15',
    status: 'Interview Scheduled',
    salary: '$140k - $160k',
    jobUrl: 'https://example.com/job1',
    referral: 'Sarah Johnson',
    notes: 'Technical interview on Friday',
    nextAction: 'Prepare for technical interview',
    actionDate: '2024-01-20'
  },
  {
    id: 2,
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    location: 'Remote',
    appliedDate: '2024-01-12',
    status: 'Application Submitted',
    salary: '$120k - $140k',
    jobUrl: 'https://example.com/job2',
    referral: '',
    notes: 'Looks like a great company culture',
    nextAction: 'Follow up with hiring manager',
    actionDate: '2024-01-22'
  },
  {
    id: 3,
    company: 'Enterprise Solutions',
    position: 'Software Engineer II',
    location: 'Austin, TX',
    appliedDate: '2024-01-10',
    status: 'Rejected',
    salary: '$110k - $130k',
    jobUrl: 'https://example.com/job3',
    referral: '',
    notes: 'Not a good culture fit according to feedback',
    nextAction: '',
    actionDate: ''
  }
];

export const statusOptions = [
  'Application Submitted',
  'Application Viewed',
  'Phone Screen Scheduled',
  'Phone Screen Completed',
  'Interview Scheduled',
  'Interview Completed',
  'Final Round',
  'Offer Received',
  'Offer Accepted',
  'Rejected',
  'Withdrawn'
];

export const statusColors = {
  'Application Submitted': 'bg-blue-100 text-blue-800',
  'Application Viewed': 'bg-purple-100 text-purple-800',
  'Phone Screen Scheduled': 'bg-yellow-100 text-yellow-800',
  'Phone Screen Completed': 'bg-orange-100 text-orange-800',
  'Interview Scheduled': 'bg-indigo-100 text-indigo-800',
  'Interview Completed': 'bg-pink-100 text-pink-800',
  'Final Round': 'bg-violet-100 text-violet-800',
  'Offer Received': 'bg-green-100 text-green-800',
  'Offer Accepted': 'bg-emerald-100 text-emerald-800',
  'Rejected': 'bg-red-100 text-red-800',
  'Withdrawn': 'bg-gray-100 text-gray-800'
};