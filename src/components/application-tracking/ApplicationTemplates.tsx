import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { copyToClipboard } from '../ui/utils';
import { Copy, CheckCircle, Bot, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ApplicationTemplates() {
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const templates = [
    {
      name: 'Application Tracker Spreadsheet',
      description: 'Comprehensive tracking system for job applications',
      features: ['Application status', 'Company details', 'Contact tracking', 'Follow-up reminders'],
      structure: 'Company Name | Position | Date Applied | Status | Contact Person | Next Action | Notes',
      aiPrompts: [
        'Create a comprehensive job application tracking spreadsheet with columns for: Company, Position, Date Applied, Application Status, Contact Person, Salary Range, Next Follow-up Date, Interview Dates, and Notes. Include formulas to calculate days since application and color-coding for different statuses. Make sure the template is easy to import to Google Docs or Google Sheets.',
        'Generate a follow-up email template for job applications that haven\'t received a response after [X weeks], maintaining professionalism while expressing continued interest',
        'Create a system to categorize and prioritize job applications based on: company preference, role fit, salary match, and response likelihood'
      ]
    },
    {
      name: 'Interview Preparation Template',
      description: 'Structured approach to preparing for each interview',
      features: ['Company research', 'Question prep', 'STAR examples', 'Follow-up tracking'],
      structure: 'Company Research | Role Details | Prepared Questions | STAR Examples | Interview Notes | Thank You Sent',
      aiPrompts: [
        'Create a comprehensive interview preparation template for [Company Name] [Position Title] that includes: company background research, role-specific questions to ask, relevant STAR method examples from my experience, and post-interview follow-up plan. Format this template to be easily imported into Google Docs.',
        'Generate 10 thoughtful questions to ask during an interview for [Position Title] at [Company Name] that demonstrate research and genuine interest',
        'Help me prepare STAR method examples for common behavioral interview questions relevant to [Your Field/Industry]'
      ]
    },
    {
      name: 'Networking Contact Manager',
      description: 'System to track professional relationships and interactions',
      features: ['Contact details', 'Interaction history', 'Relationship strength', 'Follow-up schedule'],
      structure: 'Name | Company | Position | Connection Type | Last Contact | Relationship Level | Next Touch',
      aiPrompts: [
        'Design a networking contact management system that tracks: contact information, how we met, interaction history, relationship strength (1-5), last contact date, next planned outreach, and value exchange opportunities. Create this as a template that can be easily imported to Google Docs or Google Sheets.',
        'Create a follow-up cadence strategy for different types of professional relationships: close colleagues, industry contacts, new connections, and mentors',
        'Generate templates for different types of networking follow-up messages: post-meeting thank you, periodic check-ins, sharing relevant opportunities, and asking for advice'
      ]
    },
    {
      name: 'Salary Negotiation Tracker',
      description: 'Document compensation discussions and market research',
      features: ['Market research', 'Offer details', 'Negotiation points', 'Decision matrix'],
      structure: 'Company | Base Salary | Bonus | Benefits | Equity | Total Comp | Market Rate | Negotiation Status',
      aiPrompts: [
        'Create a salary negotiation tracker that includes: offered compensation breakdown, market research data, negotiation talking points, timeline for decision, and comparison matrix across multiple offers. Format this as a template that can be easily imported into Google Docs or Google Sheets.',
        'Help me research market salary rates for [Position Title] in [Location/Industry] and create a justification document for requesting [Target Salary] based on my experience and skills',
        'Generate a professional counter-offer email template that addresses salary, benefits, and other compensation elements while maintaining positive tone'
      ]
    },
    {
      name: 'Skills Gap Analysis',
      description: 'Track skill requirements across target roles',
      features: ['Required skills', 'Current level', 'Gap analysis', 'Learning plan'],
      structure: 'Skill | Current Level | Target Level | Gap | Learning Resources | Timeline | Progress',
      aiPrompts: [
        'Analyze job postings for [Target Role] and create a skills gap analysis comparing required skills with my current abilities: [List your current skills]. Include learning priorities and resource recommendations. Format this analysis as a template that can be easily imported into Google Docs.',
        'Create a 90-day skill development plan to address the top 5 skill gaps identified for [Target Role], including specific learning resources, practice projects, and measurable milestones',
        'Generate a skills-based resume section that highlights my strengths while addressing potential gaps through relevant projects, coursework, or transferable experience'
      ]
    },
    {
      name: 'Application Response Analyzer',
      description: 'Track and analyze application response patterns',
      features: ['Response rates', 'Rejection reasons', 'Success patterns', 'Optimization insights'],
      structure: 'Application Date | Response Time | Outcome | Feedback | Pattern Analysis | Improvement Areas',
      aiPrompts: [
        'Analyze my job application data to identify patterns: response rates by industry, company size, application method, and timing. Provide insights for optimizing my job search strategy. Create this analysis template in a format that can be easily imported into Google Docs or Google Sheets.',
        'Create a system to categorize rejection feedback and identify common themes: skill gaps, experience level, culture fit, or application quality. Include action items for each category',
        'Generate a monthly job search review template that evaluates: applications sent, responses received, interviews scheduled, offers made, and key learnings for strategy adjustment'
      ]
    }
  ];

  const copyPrompt = async (prompt, templateName, index) => {
    const successful = await copyToClipboard(prompt);
    if (successful) {
      setCopiedPrompt(`${templateName}-${index}`);
      setTimeout(() => setCopiedPrompt(null), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI-Powered Application Templates
          </CardTitle>
          <CardDescription>
            Use AI to create and customize these job search organization templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="border">
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Template Structure:</h4>
                    <div className="p-2 bg-muted rounded text-xs font-mono">
                      {template.structure}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-yellow-500" />
                      AI Prompts
                    </h4>
                    <div className="space-y-3">
                      {template.aiPrompts.map((prompt, promptIndex) => (
                        <div key={promptIndex} className="border rounded-lg p-3">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-sm font-medium">Prompt {promptIndex + 1}:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyPrompt(prompt, template.name, promptIndex)}
                              className="h-6 w-6 p-1 flex-shrink-0"
                            >
                              {copiedPrompt === `${template.name}-${promptIndex}` ? (
                                <CheckCircle className="h-3 w-3 text-green-500" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                          <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded text-sm font-mono">
                            {prompt}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Use These Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">1. Choose Your Tool</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Copy the prompts and use them with AI tools like ChatGPT, Claude, or Gemini to generate customized templates.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                Recommended: ChatGPT for spreadsheet formulas, Claude for detailed analysis
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">2. Customize Prompts</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                Replace bracketed placeholders with your specific information, industry, and requirements.
              </p>
              <div className="text-xs text-green-600 dark:text-green-400">
                Example: Replace [Target Role] with "Senior Software Engineer"
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
              <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">3. Implement & Iterate</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                Use the AI-generated templates and refine them based on your experience and needs.
              </p>
              <div className="text-xs text-orange-600 dark:text-orange-400">
                Tip: Ask AI to help you optimize templates based on what's working
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}