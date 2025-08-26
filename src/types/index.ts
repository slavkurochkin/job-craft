export interface Application {
  id: string;
  company: string;
  position: string;
  status: string;
  appliedDate: string;
  lastUpdated: string;
  notes?: string;
  url?: string;
  salary?: string;
  location?: string;
}

export interface ApplicationStats {
  [key: string]: number;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
  targetLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  notes?: string;
}

export interface CareerLevel {
  level: string;
  description: string;
  skills: string[];
  timeline: string;
}

export interface NetworkingContact {
  name: string;
  company: string;
  position: string;
  relationship: string;
  lastContact: string;
  notes?: string;
}

export interface InterviewQuestion {
  type: string;
  question: string;
  color: string;
}

export interface ResumeSection {
  title: string;
  content: string;
  suggestions: string[];
}

export interface OnboardingData {
  name: string;
  currentRole: string;
  targetRole: string;
  experience: string;
  skills: string[];
  goals: string[];
}

export interface MessageTemplate {
  subject: string;
  template: string;
}

export interface MessageTemplates {
  [key: string]: MessageTemplate;
}

export interface Platform {
  name: string;
  icon: string;
  description: string;
  url: string;
  features: string[];
}

export interface Strategy {
  name: string;
  icon: string;
  description: string;
  steps: string[];
  tips: string[];
}

export interface Phase {
  name: string;
  icon: string;
  description: string;
  duration: string;
  activities: string[];
}

export interface SalaryData {
  [key: string]: {
    range: string;
    growth: string;
  };
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface FormData {
  [key: string]: any;
}

export interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export interface DashboardProps {
  onNavigate: (view: string) => void;
}

export interface ApplicationFormProps {
  onSubmit: (data: Application) => void;
  onCancel: () => void;
}

export interface ApplicationsListProps {
  applications: Application[];
  onUpdate: (id: string, data: Partial<Application>) => void;
  onDelete: (id: string) => void;
}

export interface ApplicationStatsProps {
  stats: ApplicationStats;
  total: number;
  active: number;
}

export interface ApplicationAnalyticsProps {
  applications: Application[];
}

export interface ApplicationTemplatesProps {
  // Add props as needed
}

export interface CareerPathProps {
  // Add props as needed
}

export interface SkillDevelopmentProps {
  // Add props as needed
}

export interface ActionPlanningProps {
  // Add props as needed
}

export interface ResourcesProps {
  // Add props as needed
}

export interface JobSearchStrategyProps {
  // Add props as needed
}

export interface PublicPresenceProps {
  // Add props as needed
}

export interface ResumeOptimizationProps {
  // Add props as needed
}

export interface NetworkingReferralsProps {
  // Add props as needed
}

export interface InterviewPrepProps {
  // Add props as needed
}

export interface CareerGrowthProps {
  // Add props as needed
}

export interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

export interface InformationalInterviewsProps {
  // Add props as needed
}

export interface MessageGeneratorProps {
  // Add props as needed
}

export interface NetworkingPlatformsProps {
  // Add props as needed
}

export interface NetworkingStrategiesProps {
  // Add props as needed
}

export interface ReferralSourcesProps {
  // Add props as needed
}
