import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import type { DashboardProps } from "../types";
import { Warning } from "./Warning";
import {
  Calendar,
  ArrowRight,
  Briefcase,
  Users,
  FileText,
  Search,
  MessageSquare,
  Award,
  Star,
  Lightbulb,
  Rocket,
  User,
  TrendingUp,
} from "lucide-react";

export function Dashboard({ onNavigate }: DashboardProps) {
  const quickActions = [
    {
      label: "Find Jobs",
      icon: Search,
      action: () => onNavigate("job-search"),
      description: "Search strategies & hidden job markets",
      color:
        "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-600",
    },
    {
      label: "Optimize Resume",
      icon: FileText,
      action: () => onNavigate("resume"),
      description: "ATS-friendly templates & AI analysis",
      color:
        "bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800",
      iconColor: "text-green-600",
    },
    {
      label: "Network & Referrals",
      icon: Users,
      action: () => onNavigate("networking"),
      description: "Build connections & get referrals",
      color:
        "bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800",
      iconColor: "text-purple-600",
    },
    {
      label: "Interview Prep",
      icon: MessageSquare,
      action: () => onNavigate("interview"),
      description: "Practice questions & techniques",
      color:
        "bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-800",
      iconColor: "text-orange-600",
    },
  ];

  const insights = [
    {
      title: "Start with Strategy",
      description:
        "Begin with understanding where to look for jobs and how to position yourself effectively.",
      icon: Star,
      color: "text-blue-600",
    },
    {
      title: "Quality over Quantity",
      description:
        "Focus on tailored applications to companies that align with your goals.",
      icon: Award,
      color: "text-green-600",
    },
    {
      title: "Network Actively",
      description:
        "Many positions are filled through referrals before being posted publicly.",
      icon: Users,
      color: "text-purple-600",
    },
  ];

  const moduleStats = [
    { name: "Job Search", count: "50+ boards", icon: Search },
    { name: "Resume", count: "10+ templates", icon: FileText },
    { name: "Networking", count: "15+ platforms", icon: Users },
    { name: "Interview", count: "200+ questions", icon: MessageSquare },
  ];

  const gettingStartedSteps = [
    {
      step: "Define your job search strategy",
      description: "Learn where to find opportunities and how to approach them",
      module: "job-search",
    },
    {
      step: "Optimize your LinkedIn profile",
      description: "Build a strong professional online presence",
      module: "public-presence",
    },
    {
      step: "Create ATS-friendly resume",
      description: "Design resumes that pass automated screening",
      module: "resume",
    },
    {
      step: "Build your network connections",
      description: "Connect with professionals and request referrals",
      module: "networking",
    },
    {
      step: "Track your applications",
      description: "Organize and follow up on job applications",
      module: "applications",
    },
    {
      step: "Prepare for interviews",
      description: "Practice questions and master interview techniques",
      module: "interview",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />

      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1>Welcome to Job Craft</h1>
            <p className="text-muted-foreground">
              Your comprehensive platform for mastering the modern job search
              process
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>
            Jump into the most important aspects of your job search
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card
                  key={index}
                  className={`cursor-pointer hover:shadow-md transition-all ${action.color}`}
                  onClick={action.action}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className={`h-5 w-5 ${action.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{action.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Platform Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Platform Overview
              </CardTitle>
              <CardDescription>
                Comprehensive tools and resources for every stage of your job
                search
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {moduleStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{stat.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {stat.count}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("public-presence")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Public Presence
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("applications")}
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Applications
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("career-growth")}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Career Growth
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Insights */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Success Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
                    <div>
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-4 mt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Set aside 1-2 hours daily for job search activities
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Getting Started Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Your Job Search Roadmap
          </CardTitle>
          <CardDescription>
            Follow this step-by-step approach for maximum effectiveness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gettingStartedSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">{step.step}</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-xs text-primary hover:no-underline"
                    onClick={() => onNavigate(step.module)}
                  >
                    Get started <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
