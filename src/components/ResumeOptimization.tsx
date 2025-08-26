import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { copyToClipboard } from './ui/utils';
import { Warning } from './Warning';
import { useState } from 'react';
import { 
  FileText, 
  Search, 
  Target, 
  Lightbulb,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  Briefcase,
  Bot,
  Copy,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export function ResumeOptimization() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const aiTips = [
    {
      category: 'Content Optimization',
      icon: Target,
      tips: [
        'Use AI to analyze job descriptions and identify key skills and requirements',
        'Generate action verbs and power words for your experience descriptions',
        'Create compelling summary statements tailored to specific roles',
        'Optimize keyword density for ATS (Applicant Tracking System) compatibility'
      ]
    },
    {
      category: 'Achievement Quantification',
      icon: TrendingUp,
      tips: [
        'Transform vague accomplishments into specific, measurable results',
        'Generate industry-relevant metrics and benchmarks for your achievements',
        'Create compelling before/after scenarios for your contributions',
        'Develop ROI calculations and impact statements'
      ]
    },
    {
      category: 'Industry Customization',
      icon: Briefcase,
      tips: [
        'Adapt your resume language for different industries and company cultures',
        'Generate industry-specific terminology and buzzwords',
        'Create role-specific skill summaries and core competencies',
        'Develop targeted cover letter content for each application'
      ]
    },
    {
      category: 'Format & Structure',
      icon: FileText,
      tips: [
        'Optimize section ordering and content hierarchy for maximum impact',
        'Generate compelling section headers and subsection titles',
        'Create scannable bullet points that highlight key information',
        'Ensure consistent formatting and professional presentation'
      ]
    }
  ];

  const resumeTemplates = [
    {
      name: 'Modern Professional',
      category: 'General',
      bestFor: 'Corporate roles, consulting, finance',
      features: ['Clean design', 'Skills section', 'Professional summary', 'Education emphasis'],
      description: 'A clean, professional template perfect for traditional industries and corporate environments.',
      preview: 'Clean layout with clear sections, professional fonts, and subtle accent colors.',
      aiPrompts: [
        'Create a professional summary for a [Your Role] with [X years] experience in [Industry], highlighting expertise in [Key Skills] and achievements in [Specific Areas]',
        'Rewrite this job description using action verbs and quantifiable achievements: [Paste your current job description]',
        'Generate 5 powerful bullet points for a [Your Role] position that demonstrate leadership and results in [Specific Industry]'
      ]
    },
    {
      name: 'Creative Portfolio',
      category: 'Creative',
      bestFor: 'Design, marketing, creative agencies',
      features: ['Visual elements', 'Portfolio links', 'Creative skills showcase', 'Brand personality'],
      description: 'Showcases creativity while maintaining professionalism, perfect for design and creative roles.',
      preview: 'Modern design with creative flair, color accents, and space for portfolio highlights.',
      aiPrompts: [
        'Write a creative professional summary for a [Designer/Creative Role] that showcases both technical skills and creative vision',
        'Transform these creative project descriptions into achievement-focused bullet points: [Paste project descriptions]',
        'Generate compelling descriptions for creative skills including [List your creative software/tools] that appeal to hiring managers'
      ]
    },
    {
      name: 'Technical Expert',
      category: 'Technology',
      bestFor: 'Software development, engineering, IT',
      features: ['Technical skills matrix', 'Project highlights', 'Certifications', 'Code samples'],
      description: 'Designed for technical professionals with emphasis on skills, projects, and technical achievements.',
      preview: 'Technical layout with skills matrix, project showcases, and clear technical competencies.',
      aiPrompts: [
        'Create a technical summary for a [Software Engineer/Developer] with expertise in [Programming Languages] and experience with [Technologies/Frameworks]',
        'Rewrite these technical project descriptions to highlight business impact and technical complexity: [Paste project details]',
        'Generate a comprehensive technical skills section organized by category (languages, frameworks, tools, databases) with proficiency levels'
      ]
    },
    {
      name: 'Executive Leadership',
      category: 'Executive',
      bestFor: 'Senior management, C-suite, directors',
      features: ['Executive summary', 'Leadership achievements', 'Board experience', 'Strategic impact'],
      description: 'Sophisticated template emphasizing strategic leadership and high-level business impact.',
      preview: 'Executive-level layout with emphasis on leadership experience and strategic achievements.',
      aiPrompts: [
        'Write an executive summary for a [Executive Title] with [X years] of leadership experience, highlighting strategic initiatives and business growth achievements',
        'Transform these management experiences into strategic leadership accomplishments: [Paste leadership examples]',
        'Generate powerful executive-level bullet points that demonstrate P&L responsibility, team leadership, and business transformation'
      ]
    },
    {
      name: 'Entry Level',
      category: 'Entry Level',
      bestFor: 'New graduates, career changers, internships',
      features: ['Education focus', 'Projects & internships', 'Skills development', 'Transferable skills'],
      description: 'Perfect for new graduates and career changers, emphasizing potential and transferable skills.',
      preview: 'Clean, simple layout that maximizes education, projects, and skill development.',
      aiPrompts: [
        'Create a compelling summary for a new graduate in [Field of Study] seeking a [Target Role], emphasizing relevant coursework, projects, and transferable skills',
        'Rewrite these internship and project experiences to showcase professional potential: [Paste experiences]',
        'Generate bullet points that transform academic and extracurricular activities into professional accomplishments'
      ]
    },
    {
      name: 'Career Change',
      category: 'Transition',
      bestFor: 'Career pivots, industry transitions',
      features: ['Transferable skills focus', 'Career narrative', 'Relevant experience', 'Skills bridge'],
      description: 'Strategically designed to bridge career transitions and highlight transferable skills.',
      preview: 'Narrative-focused layout that connects past experience to future career goals.',
      aiPrompts: [
        'Write a career change summary that bridges my experience in [Current Industry] to my target role in [New Industry], emphasizing transferable skills',
        'Reframe these experiences from [Previous Career] to be relevant for [Target Career]: [Paste experience descriptions]',
        'Generate a skills section that highlights transferable abilities relevant to [Target Industry] while de-emphasizing industry-specific knowledge'
      ]
    }
  ];

  const generalAIPrompts = [
    {
      category: 'Resume Analysis & Optimization',
      prompts: [
        {
          title: 'ATS Optimization Check',
          prompt: 'Review this resume for ATS compatibility and suggest improvements for keyword optimization for [Target Job Title]: [Paste resume content]',
          purpose: 'Ensure your resume passes through Applicant Tracking Systems'
        },
        {
          title: 'Impact Statement Generator',
          prompt: 'Transform these job responsibilities into achievement-focused bullet points with quantifiable results: [List your current job duties]',
          purpose: 'Convert boring job duties into compelling accomplishments'
        },
        {
          title: 'Skill Gap Analysis',
          prompt: 'Compare my current skills [List your skills] with this job posting [Paste job description] and identify gaps and strengths',
          purpose: 'Understand what skills to highlight or develop'
        }
      ]
    },
    {
      category: 'Content Creation',
      prompts: [
        {
          title: 'Professional Summary Writer',
          prompt: 'Create 3 different professional summary versions for a [Your Role] with [Years] experience, targeting [Industry/Company Type], each with a different tone: professional, dynamic, and results-focused',
          purpose: 'Generate multiple summary options to choose from'
        },
        {
          title: 'Achievement Quantifier',
          prompt: 'Help me quantify these achievements with relevant metrics and percentages: [Describe your accomplishments without numbers]',
          purpose: 'Add measurable impact to your accomplishments'
        },
        {
          title: 'Action Verb Enhancer',
          prompt: 'Replace weak verbs in these bullet points with powerful action verbs: [Paste current bullet points]',
          purpose: 'Make your resume more dynamic and engaging'
        }
      ]
    },
    {
      category: 'Industry-Specific Optimization',
      prompts: [
        {
          title: 'Industry Language Adapter',
          prompt: 'Rewrite my resume summary and key experiences using terminology and concepts specific to [Target Industry]',
          purpose: 'Speak the language of your target industry'
        },
        {
          title: 'Company Culture Matcher',
          prompt: 'Adapt my resume tone and content to match [Company Name]\'s culture based on their website and job postings: [Include company info]',
          purpose: 'Align your resume with specific company cultures'
        },
        {
          title: 'Role-Specific Customizer',
          prompt: 'Customize my resume for this specific job posting, highlighting relevant experience and skills: [Paste job description and your current resume]',
          purpose: 'Tailor your resume for specific opportunities'
        }
      ]
    }
  ];

  const copyPrompt = async (prompt, category, index) => {
    const successful = await copyToClipboard(prompt);
    if (successful) {
      setCopiedPrompt(`${category}-${index}`);
      setTimeout(() => setCopiedPrompt(null), 2000);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Resume & ATS Optimization</h1>
        <p className="text-muted-foreground mt-2">
          Create compelling resumes that pass ATS systems and impress hiring managers
        </p>
      </div>

      <Tabs defaultValue="ai-tips" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ai-tips">AI Tips & Strategies</TabsTrigger>
          <TabsTrigger value="templates">Resume Templates</TabsTrigger>
          <TabsTrigger value="ats-guide">ATS Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI-Powered Resume Enhancement
              </CardTitle>
              <CardDescription>
                Leverage AI tools to create compelling, ATS-optimized resumes that stand out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {aiTips.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className="border">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Icon className="h-5 w-5 text-primary" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm flex items-start gap-2">
                              <Sparkles className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Prompt Library
              </CardTitle>
              <CardDescription>
                Copy and customize these prompts for AI tools like ChatGPT, Claude, or Gemini
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {generalAIPrompts.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h3 className="font-medium text-lg border-b pb-2">{category.category}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {category.prompts.map((promptData, promptIndex) => (
                      <div key={promptIndex} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{promptData.title}</h4>
                            <p className="text-sm text-muted-foreground">{promptData.purpose}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyPrompt(promptData.prompt, category.category, promptIndex)}
                          >
                            {copiedPrompt === `${category.category}-${promptIndex}` ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <div className="p-3 bg-muted rounded-lg text-sm font-mono">
                          {promptData.prompt}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Tool Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">ChatGPT</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Excellent for content generation, rewriting, and creative solutions.
                  </p>
                  <Badge variant="secondary">Best for: Content creation</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Claude</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Great for analytical tasks, feedback, and nuanced writing.
                  </p>
                  <Badge variant="secondary">Best for: Analysis & feedback</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Gemini</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strong at research, data integration, and comprehensive analysis.
                  </p>
                  <Badge variant="secondary">Best for: Research & integration</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Resume Templates with AI Prompts
              </CardTitle>
              <CardDescription>
                Professional templates optimized for different industries and career levels, with AI prompts to customize content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {resumeTemplates.map((template, index) => (
                  <Card key={index} className="border hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{template.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">{template.category}</Badge>
                        </div>
                        <Button
                          variant={selectedTemplate === index ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTemplate(selectedTemplate === index ? null : index)}
                        >
                          {selectedTemplate === index ? "Hide Details" : "View Details"}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                        <p className="text-sm"><span className="font-medium">Best for:</span> {template.bestFor}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {template.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {selectedTemplate === index && (
                        <div className="space-y-4 pt-4 border-t">
                          <div>
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <Bot className="h-4 w-4 text-blue-500" />
                              AI Prompts for This Template
                            </h4>
                            <div className="space-y-3">
                              {template.aiPrompts.map((prompt, promptIndex) => (
                                <div key={promptIndex} className="relative">
                                  <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
                                    <div className="flex items-start justify-between gap-2">
                                      <span className="font-mono text-blue-700 dark:text-blue-300">{prompt}</span>
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
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-3 bg-yellow-50 dark:bg-yellow-950/50 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <h5 className="font-medium text-yellow-900 dark:text-yellow-100 mb-1 flex items-center gap-2">
                              <Lightbulb className="h-4 w-4" />
                              Usage Tip
                            </h5>
                            <p className="text-sm text-yellow-700 dark:text-yellow-300">
                              Copy these prompts and paste them into your preferred AI tool. Replace the bracketed placeholders with your specific information for personalized content.
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template Selection Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Consider Your Industry</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Traditional/Corporate:</strong> Modern Professional, Executive Leadership</li>
                    <li>• <strong>Creative/Marketing:</strong> Creative Portfolio, Modern Professional</li>
                    <li>• <strong>Technology:</strong> Technical Expert, Modern Professional</li>
                    <li>• <strong>Healthcare/Education:</strong> Modern Professional, Entry Level</li>
                    <li>• <strong>Startups:</strong> Technical Expert, Creative Portfolio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Consider Your Experience Level</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>New Graduate:</strong> Entry Level, Modern Professional</li>
                    <li>• <strong>Career Changer:</strong> Career Change, Modern Professional</li>
                    <li>• <strong>Mid-Level:</strong> Modern Professional, Technical Expert</li>
                    <li>• <strong>Senior Professional:</strong> Executive Leadership, Technical Expert</li>
                    <li>• <strong>Freelancer/Consultant:</strong> Creative Portfolio, Modern Professional</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ats-guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                ATS Optimization Tools & Resources
              </CardTitle>
              <CardDescription>
                Use these tools and AI suggestions to ensure your resume passes through Applicant Tracking Systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bot className="h-5 w-5 text-blue-500" />
                      AI-Powered ATS Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">ATS Keyword Analyzer</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyPrompt('Analyze this job description and extract the top 15 most important keywords and phrases for ATS optimization: [Paste job description]. Then review my resume and suggest where to naturally incorporate these keywords: [Paste resume content]', 'ATS', 0)}
                          >
                            {copiedPrompt === 'ATS-0' ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Identify and incorporate key terms from job postings</p>
                        <div className="p-2 bg-muted rounded text-xs font-mono">
                          Analyze this job description and extract the top 15 most important keywords and phrases for ATS optimization: [Paste job description]. Then review my resume and suggest where to naturally incorporate these keywords: [Paste resume content]
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">ATS Format Checker</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyPrompt('Review this resume for ATS compatibility issues. Check for: 1) Non-standard section headers 2) Complex formatting 3) Missing keywords 4) Poor readability for parsers 5) File format issues. Provide specific fixes: [Paste resume content]', 'ATS', 1)}
                          >
                            {copiedPrompt === 'ATS-1' ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Identify formatting issues that could hurt ATS scanning</p>
                        <div className="p-2 bg-muted rounded text-xs font-mono">
                          Review this resume for ATS compatibility issues. Check for: 1) Non-standard section headers 2) Complex formatting 3) Missing keywords 4) Poor readability for parsers 5) File format issues. Provide specific fixes: [Paste resume content]
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">Skills Section Optimizer</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyPrompt('Optimize my skills section for ATS scanning for [Target Role] positions. Current skills: [List current skills]. Job requirements: [Paste key requirements]. Organize by category, include both acronyms and full terms, and suggest missing skills to add.', 'ATS', 2)}
                          >
                            {copiedPrompt === 'ATS-2' ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Structure your skills for maximum ATS recognition</p>
                        <div className="p-2 bg-muted rounded text-xs font-mono">
                          Optimize my skills section for ATS scanning for [Target Role] positions. Current skills: [List current skills]. Job requirements: [Paste key requirements]. Organize by category, include both acronyms and full terms, and suggest missing skills to add.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-500" />
                      ATS Testing Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium mb-2">Jobscan</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Compare your resume against job descriptions for ATS optimization
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Free tier available</Badge>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://jobscan.co" target="_blank" rel="noopener noreferrer">
                              Visit Site
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium mb-2">Resume Worded</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          ATS-friendly resume analysis and LinkedIn optimization
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Free analysis</Badge>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://resumeworded.com" target="_blank" rel="noopener noreferrer">
                              Visit Site
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium mb-2">TopResume</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Professional resume review with ATS compatibility check
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Paid service</Badge>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://topresume.com" target="_blank" rel="noopener noreferrer">
                              Visit Site
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium mb-2">Resume.io ATS Scanner</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Free ATS readability test and keyword optimization
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Free tool</Badge>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://resume.io/ats-resume-scanner" target="_blank" rel="noopener noreferrer">
                              Visit Site
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium mb-2">SkillSyncer</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Match your resume keywords with job postings
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">Free & premium</Badge>
                          <Button size="sm" variant="outline" asChild>
                            <a href="https://skillsyncer.com" target="_blank" rel="noopener noreferrer">
                              Visit Site
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 dark:text-green-300 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      ATS-Friendly Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Use standard section headings (Experience, Education, Skills)</li>
                      <li>• Include keywords from the job description naturally</li>
                      <li>• Use simple, clean formatting without graphics</li>
                      <li>• Save as both .docx and .pdf formats</li>
                      <li>• Use standard fonts (Arial, Calibri, Times New Roman)</li>
                      <li>• Include both acronyms and full terms (AI and Artificial Intelligence)</li>
                      <li>• Use bullet points instead of paragraphs</li>
                      <li>• Include relevant technical skills and certifications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-300 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      ATS Pitfalls to Avoid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Headers and footers (information may be lost)</li>
                      <li>• Images, graphics, and logos</li>
                      <li>• Complex tables and columns</li>
                      <li>• Unusual fonts or formatting</li>
                      <li>• Text in images or graphics</li>
                      <li>• Special characters and symbols</li>
                      <li>• Creative section names that confuse parsers</li>
                      <li>• Embedded charts or infographics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Keyword Optimization Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">1. Analyze Job Postings</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Identify recurring keywords</li>
                        <li>• Note required vs. preferred skills</li>
                        <li>• Look for industry terminology</li>
                        <li>• Find common qualifications</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">2. Strategic Placement</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Include in professional summary</li>
                        <li>• Weave into experience descriptions</li>
                        <li>• Add to skills section</li>
                        <li>• Use in achievement statements</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">3. Natural Integration</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Use variations of key terms</li>
                        <li>• Include both acronyms and full terms</li>
                        <li>• Maintain readability</li>
                        <li>• Avoid keyword stuffing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/50">
                    <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-100">ATS Testing Checklist</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <ul className="space-y-1">
                          <li>□ Used standard section headings</li>
                          <li>□ Included relevant keywords naturally</li>
                          <li>□ Avoided graphics and images</li>
                          <li>□ Used simple, clean formatting</li>
                          <li>□ Saved in both .docx and .pdf</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1">
                          <li>□ Used standard fonts</li>
                          <li>□ Included acronyms and full terms</li>
                          <li>□ Used bullet points consistently</li>
                          <li>□ Avoided headers and footers</li>
                          <li>□ Tested with ATS scanning tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}