import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';

export function Warning() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('warning-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('warning-dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Alert className="mb-6 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800 dark:text-yellow-200">
        <div className="flex items-start justify-between">
          <div>
            <strong>⚠️ Heads up!</strong> This is a static site, so any interactive content (like form entries or temporary data) won't stick around after a refresh. Additionally, much of the content was generated with AI, so please use careful judgment and fact-check information before making important career decisions.
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="ml-2 h-auto p-1 text-yellow-600 hover:text-yellow-800 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:text-yellow-200 dark:hover:bg-yellow-900/50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}