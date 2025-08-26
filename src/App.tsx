import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { JobSearchStrategy } from "./components/JobSearchStrategy";
import { PublicPresence } from "./components/PublicPresence";
import { ResumeOptimization } from "./components/ResumeOptimization";
import { NetworkingReferrals } from "./components/NetworkingReferrals";
import { ApplicationTracking } from "./components/ApplicationTracking";
import { InterviewPrep } from "./components/InterviewPrep";
import { CareerGrowth } from "./components/CareerGrowth";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import {
  Home,
  Search,
  User,
  FileText,
  Users,
  Briefcase,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { useIsSmallScreen } from "./components/ui/use-mobile";

const navigationItems = [
  { id: "dashboard", label: "Home", icon: Home },
  { id: "job-search", label: "Job Search", icon: Search },
  { id: "public-presence", label: "Public Presence", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "networking", label: "Networking", icon: Users },
  { id: "applications", label: "Applications", icon: Briefcase },
  { id: "interview", label: "Interview Prep", icon: MessageSquare },
  { id: "career-growth", label: "Career Growth", icon: TrendingUp },
];

export default function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const isSmallScreen = useIsSmallScreen();

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard onNavigate={setCurrentView} />;
      case "job-search":
        return <JobSearchStrategy />;
      case "public-presence":
        return <PublicPresence />;
      case "resume":
        return <ResumeOptimization />;
      case "networking":
        return <NetworkingReferrals />;
      case "applications":
        return <ApplicationTracking />;
      case "interview":
        return <InterviewPrep />;
      case "career-growth":
        return <CareerGrowth />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <SidebarProvider defaultOpen={!isSmallScreen}>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex flex-col gap-1 px-4 py-2">
              <h1 className="text-xl font-semibold text-primary">Job Craft</h1>
              <p className="text-sm text-muted-foreground">
                Your Career Success Platform
              </p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setCurrentView(item.id)}
                      isActive={currentView === item.id}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 min-w-0 main-content w-full">
          {/* Mobile/Tablet Header */}
          <div className="flex items-center gap-2 p-4 border-b lg:hidden">
            <SidebarTrigger />
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-semibold text-primary truncate">
                Job Craft
              </h1>
              <p className="text-sm text-muted-foreground truncate">
                Your Career Success Platform
              </p>
            </div>
          </div>

          {/* Main Content with responsive padding */}
          <div className="content-padding w-full">{renderCurrentView()}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
