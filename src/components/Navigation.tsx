import { Button } from "./ui/button";
import {
  Home,
  Search,
  User,
  FileText,
  Users,
  Briefcase,
  MessageSquare,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import type { NavigationProps } from "../types";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "job-search", label: "Job Search", icon: Search },
  { id: "public-presence", label: "Public Presence", icon: User },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "networking", label: "Networking", icon: Users },
  { id: "applications", label: "Applications", icon: Briefcase },
  { id: "interview", label: "Interview Prep", icon: MessageSquare },
  { id: "career-growth", label: "Career Growth", icon: TrendingUp },
];

export function Navigation({ currentView, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-card border-b border-border px-6 py-4">
        <div className="flex items-center space-x-1 max-w-7xl mx-auto w-full">
          <div className="mr-8">
            <h1 className="text-xl font-semibold text-primary">JobCraft</h1>
          </div>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentView === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary">JobCraft</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full justify-start gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
