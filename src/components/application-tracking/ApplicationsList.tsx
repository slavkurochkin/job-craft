import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Filter,
  ExternalLink,
  Edit,
  Trash2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { statusColors } from './mockData';
import { formatDate, getDaysAgo } from './helpers';

export function ApplicationsList({ applications, onUpdate, onDelete }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Your Applications</CardTitle>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">{app.position}</h3>
                    <Badge className={statusColors[app.status] || 'bg-gray-100 text-gray-800'}>
                      {app.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{app.company} • {app.location}</p>
                  {app.salary && (
                    <p className="text-sm text-muted-foreground">{app.salary}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {app.jobUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={app.jobUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onDelete(app.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Applied:</span>{' '}
                  {formatDate(app.appliedDate)} ({getDaysAgo(app.appliedDate)})
                </div>
                {app.referral && (
                  <div>
                    <span className="text-muted-foreground">Referral:</span>{' '}
                    {app.referral}
                  </div>
                )}
                {app.nextAction && (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span className="text-muted-foreground">Next:</span>{' '}
                    {app.nextAction}
                    {app.actionDate && ` (${formatDate(app.actionDate)})`}
                  </div>
                )}
              </div>

              {app.notes && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Notes:</span>{' '}
                  {app.notes}
                </div>
              )}
            </div>
          ))}

          {applications.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No applications yet. Add your first application above!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}