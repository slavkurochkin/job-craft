import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { copyToClipboard } from '../ui/utils';
import { useState } from 'react';
import { MessageSquare, Copy, CheckCircle } from 'lucide-react';
import { messageTemplates } from './data';

export function MessageGenerator() {
  const [messageData, setMessageData] = useState({
    recipientName: '',
    company: '',
    position: '',
    jobLink: '',
    yourExpertise: '',
    companyInterest: '',
    relationship: '',
    personalNote: ''
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  const generateMessage = () => {
    const { recipientName, company, position, jobLink, yourExpertise, companyInterest, relationship, personalNote } = messageData;
    
    if (!recipientName || !relationship) return;

    let template = messageTemplates[relationship]?.template || messageTemplates.professional.template;
    let subject = messageTemplates[relationship]?.subject || messageTemplates.professional.subject;
    
    // Replace placeholders
    template = template
      .replace(/\[Name\]/g, recipientName)
      .replace(/\[Company\]/g, company || '[Company]')
      .replace(/\[Position Title\]/g, position || '[Position Title]')
      .replace(/\[Job Link\]/g, jobLink || '[Job Link]')
      .replace(/\[your expertise, e\.g\., test automation and quality engineering\]/g, yourExpertise || '[your expertise]')
      .replace(/\[specific area that resonates with you, e\.g\., developer experience, scaling test automation, operational excellence\]/g, companyInterest || '[specific area that interests you]')
      .replace(/\[Your Name\]/g, '[Your Name]')
      .replace(/\[University\]/g, '[University]')
      .replace(/\[Industry\/Role\]/g, 'your industry')
      .replace(/\[Your Field\/Skills\]/g, yourExpertise || '[Your Field/Skills]');

    subject = subject
      .replace(/\[Position Title\]/g, position || '[Position Title]')
      .replace(/\[Company\]/g, company || '[Company]');

    if (personalNote) {
      template += `\n\nAdditional context: ${personalNote}`;
    }

    const fullMessage = `Subject: ${subject}\n\n${template}`;
    setGeneratedMessage(fullMessage);
  };

  const copyMessage = async () => {
    const successful = await copyToClipboard(generatedMessage);
    if (successful) {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Referral Message Generator
          </CardTitle>
          <CardDescription>
            Create personalized messages for different types of networking requests
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="recipient-name">Recipient Name</Label>
                <Input
                  id="recipient-name"
                  value={messageData.recipientName}
                  onChange={(e) => setMessageData(prev => ({ ...prev, recipientName: e.target.value }))}
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={messageData.company}
                  onChange={(e) => setMessageData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Target company name"
                />
              </div>
              
              <div>
                <Label htmlFor="position">Position Title</Label>
                <Input
                  id="position"
                  value={messageData.position}
                  onChange={(e) => setMessageData(prev => ({ ...prev, position: e.target.value }))}
                  placeholder="Software Engineer"
                />
              </div>
              
              <div>
                <Label htmlFor="job-link">Job Posting Link (Optional)</Label>
                <Input
                  id="job-link"
                  value={messageData.jobLink}
                  onChange={(e) => setMessageData(prev => ({ ...prev, jobLink: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
              
              <div>
                <Label htmlFor="your-expertise">Your Expertise/Background</Label>
                <Input
                  id="your-expertise"
                  value={messageData.yourExpertise}
                  onChange={(e) => setMessageData(prev => ({ ...prev, yourExpertise: e.target.value }))}
                  placeholder="e.g., test automation and quality engineering"
                />
              </div>
              
              <div>
                <Label htmlFor="company-interest">What interests you about this company?</Label>
                <Input
                  id="company-interest"
                  value={messageData.companyInterest}
                  onChange={(e) => setMessageData(prev => ({ ...prev, companyInterest: e.target.value }))}
                  placeholder="e.g., developer experience, scaling automation"
                />
              </div>
              
              <div>
                <Label htmlFor="relationship">Relationship Type</Label>
                <Select onValueChange={(value) => setMessageData(prev => ({ ...prev, relationship: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alumni">Alumni Connection</SelectItem>
                    <SelectItem value="colleague">Former Colleague</SelectItem>
                    <SelectItem value="professional">Industry Professional</SelectItem>
                    <SelectItem value="referral">Direct Referral Request</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="personal-note">Additional Context (Optional)</Label>
                <Textarea
                  id="personal-note"
                  value={messageData.personalNote}
                  onChange={(e) => setMessageData(prev => ({ ...prev, personalNote: e.target.value }))}
                  placeholder="Any shared experiences, mutual connections, or additional context..."
                  rows={3}
                />
              </div>
              
              <Button 
                onClick={generateMessage}
                disabled={!messageData.recipientName || !messageData.relationship}
                className="w-full"
              >
                Generate Message
              </Button>
            </div>
            
            <div className="space-y-4">
              {generatedMessage && (
                <>
                  <div>
                    <Label>Generated Message</Label>
                    <Textarea
                      value={generatedMessage}
                      readOnly
                      className="min-h-[300px] bg-muted"
                    />
                  </div>
                  
                  <Button 
                    onClick={copyMessage}
                    variant="outline"
                    className="w-full"
                  >
                    {copiedMessage ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Message
                      </>
                    )}
                  </Button>
                </>
              )}
              
              {!generatedMessage && (
                <div className="p-8 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
                  <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Fill in the details to generate a personalized message
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why This Referral Template Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">✅ Key Success Elements</h4>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>• <strong>It's short and doesn't waste their time</strong> - Busy professionals appreciate conciseness</li>
              <li>• <strong>Provides context (role, link, resume)</strong> - Gives them everything they need to help</li>
              <li>• <strong>Shows you've done your homework</strong> - Mentions specific company interests</li>
              <li>• <strong>Leaves them an easy out</strong> - "No pressure" removes guilt and pressure</li>
              <li>• <strong>Professional but warm tone</strong> - Builds rapport without being overly casual</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-green-600">✅ Additional Best Practices</h4>
              <ul className="space-y-2 text-sm">
                <li>• Research the company's recent news or achievements</li>
                <li>• Mention specific projects or values that resonate</li>
                <li>• Include your resume as an attachment</li>
                <li>• Follow up if no response after 1-2 weeks</li>
                <li>• Send during business hours (Tue-Thu, 9-11 AM)</li>
                <li>• Use a clear, specific subject line</li>
                <li>• Proofread for typos and grammar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-red-600">❌ Common Mistakes to Avoid</h4>
              <ul className="space-y-2 text-sm">
                <li>• Sending the same generic message to everyone</li>
                <li>• Making it all about what you need</li>
                <li>• Writing a novel-length message</li>
                <li>• Forgetting to attach your resume</li>
                <li>• Being pushy or entitled</li>
                <li>• Not researching the company first</li>
                <li>• Sending at inappropriate times (weekends, late nights)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}