import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

export function ApplicationForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    status: 'Application Submitted',
    salary: '',
    jobUrl: '',
    referral: '',
    notes: '',
    nextAction: '',
    actionDate: ''
  });

  const handleSubmit = () => {
    if (!formData.company || !formData.position) return;
    onSubmit(formData);
    setFormData({
      company: '',
      position: '',
      location: '',
      status: 'Application Submitted',
      salary: '',
      jobUrl: '',
      referral: '',
      notes: '',
      nextAction: '',
      actionDate: ''
    });
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Application</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              placeholder="Enter company name"
            />
          </div>
          <div>
            <Label htmlFor="position">Position Title</Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => updateField('position', e.target.value)}
              placeholder="Enter position title"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => updateField('location', e.target.value)}
              placeholder="San Francisco, CA or Remote"
            />
          </div>
          <div>
            <Label htmlFor="salary">Salary Range</Label>
            <Input
              id="salary"
              value={formData.salary}
              onChange={(e) => updateField('salary', e.target.value)}
              placeholder="$120k - $150k"
            />
          </div>
          <div>
            <Label htmlFor="job-url">Job URL</Label>
            <Input
              id="job-url"
              value={formData.jobUrl}
              onChange={(e) => updateField('jobUrl', e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <Label htmlFor="referral">Referral Contact</Label>
            <Input
              id="referral"
              value={formData.referral}
              onChange={(e) => updateField('referral', e.target.value)}
              placeholder="Name of person who referred you"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => updateField('notes', e.target.value)}
            placeholder="Any additional notes about this application..."
            rows={3}
          />
        </div>
        <div className="flex gap-4">
          <Button 
            onClick={handleSubmit} 
            disabled={!formData.company || !formData.position}
          >
            Add Application
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}