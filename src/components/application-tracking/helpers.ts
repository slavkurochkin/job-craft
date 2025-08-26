import type { Application, ApplicationStats } from "../../types";

export const getStatusStats = (applications: Application[]) => {
  const stats = applications.reduce(
    (acc: ApplicationStats, app: Application) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const total = applications.length;
  const active = applications.filter(
    (app: Application) =>
      !["Rejected", "Withdrawn", "Offer Accepted"].includes(app.status)
  ).length;

  return { stats, total, active };
};

export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getDaysAgo = (dateString: string | null | undefined): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
};
