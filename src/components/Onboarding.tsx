import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ArrowRight, Target, MapPin, Briefcase, User } from 'lucide-react';

export function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    careerGoal: '',
    industry: '',
    seniority: '',
    workSetup: '',
    location: '',
    experienceLevel: '',
    skills: [],
    currentSituation: '',
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Generate personalized roadmap
      const roadmap = generateRoadmap(formData);
      onComplete({ ...formData, roadmap });
    }
  };

  const generateRoadmap = (data) => {
    const roadmap = [
      {
        week: 1,
        title: 'Foundation Setup',
        tasks: [
          'Optimize LinkedIn profile',
          'Create/update resume',
          'Set up job search spreadsheet'
        ]
      },
      {
        week: 2,
        title: 'Public Presence',
        tasks: [
          'Build/update portfolio website',
          'Write LinkedIn posts about expertise',
          'Join industry communities'
        ]
      },
      {
        week: 3,
        title: 'Active Job Search',
        tasks: [
          `Apply to 10-15 ${data.industry} positions`,
          'Reach out to 5 people for referrals',
          'Research target companies'
        ]
      },
      {
        week: 4,
        title: 'Interview Preparation',
        tasks: [
          'Practice common interview questions',
          'Prepare STAR method examples',
          'Research salary ranges'
        ]
      }
    ];
    return roadmap;
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2>Let's Start with Your Career Goals</h2>
              <p className="text-muted-foreground">Help us create a personalized job search roadmap for you</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="career-goal">Career Goal</Label>
                <Input
                  id="career-goal"
                  value={formData.careerGoal}
                  onChange={(e) => updateFormData('careerGoal', e.target.value)}
                  placeholder="e.g., Software Engineer at a tech startup"
                />
              </div>
              
              <div>
                <Label htmlFor="industry">Target Industry</Label>
                <Select onValueChange={(value) => updateFormData('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your target industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2>Experience & Seniority</h2>
              <p className="text-muted-foreground">Tell us about your professional background</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="seniority">Seniority Level</Label>
                <Select onValueChange={(value) => updateFormData('seniority', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your seniority level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                    <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <Select onValueChange={(value) => updateFormData('experienceLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student/New Graduate</SelectItem>
                    <SelectItem value="career-change">Career Changer</SelectItem>
                    <SelectItem value="returning">Returning to Work</SelectItem>
                    <SelectItem value="advancing">Advancing in Current Field</SelectItem>
                    <SelectItem value="exploring">Exploring New Opportunities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="skills">Key Skills (select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {['Leadership', 'Project Management', 'Data Analysis', 'Programming', 'Design', 'Sales', 'Marketing', 'Communication'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFormData('skills', [...formData.skills, skill]);
                          } else {
                            updateFormData('skills', formData.skills.filter(s => s !== skill));
                          }
                        }}
                      />
                      <Label htmlFor={skill} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2>Work Preferences</h2>
              <p className="text-muted-foreground">Where and how do you want to work?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="work-setup">Preferred Work Setup</Label>
                <Select onValueChange={(value) => updateFormData('workSetup', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred work setup" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Fully Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="location">Location Preference</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  placeholder="e.g., San Francisco Bay Area, or Remote"
                />
              </div>
              
              <div>
                <Label htmlFor="situation">Current Situation</Label>
                <Select onValueChange={(value) => updateFormData('currentSituation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current situation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed-active">Employed, actively looking</SelectItem>
                    <SelectItem value="employed-passive">Employed, passively looking</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="freelance">Freelancing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2>Perfect! Let's Create Your Roadmap</h2>
              <p className="text-muted-foreground">Based on your preferences, we'll create a personalized job search plan</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Your Profile Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Goal:</span>
                  <span>{formData.careerGoal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Industry:</span>
                  <span>{formData.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level:</span>
                  <span>{formData.seniority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Work Setup:</span>
                  <span>{formData.workSetup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{formData.location}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Job Search Onboarding</CardTitle>
            <span className="text-sm text-muted-foreground">Step {step} of 4</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </CardHeader>
        <CardContent>
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button 
                variant="outline" 
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <div className="flex-1" />
            <Button 
              onClick={handleNext}
              disabled={
                (step === 1 && (!formData.name || !formData.careerGoal || !formData.industry)) ||
                (step === 2 && (!formData.seniority || !formData.experienceLevel)) ||
                (step === 3 && (!formData.workSetup || !formData.location || !formData.currentSituation))
              }
            >
              {step === 4 ? 'Create My Roadmap' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}