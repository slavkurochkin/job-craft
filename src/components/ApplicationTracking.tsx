import { ApplicationTemplates } from './application-tracking/ApplicationTemplates';
import { Warning } from './Warning';

export function ApplicationTracking() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Application Tracking</h1>
        <p className="text-muted-foreground mt-2">
          Templates and tools to help organize your job search process
        </p>
      </div>

      <ApplicationTemplates />
    </div>
  );
}