import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Coffee, BookOpen, Mail, Lightbulb } from 'lucide-react';
import { informationalInterviews } from './data';

const iconMap = {
  BookOpen,
  Coffee,
  Mail
};

export function InformationalInterviews() {
  const sampleQuestions = [
    'How did you get started in this field?',
    'What does a typical day look like in your role?',
    'What skills are most important for success in this industry?',
    'What are the biggest challenges facing your industry right now?',
    'What trends do you see shaping the future of this field?',
    'What advice would you give someone starting their career in this area?',
    'How has your role evolved since you started?',
    'What do you wish you had known when you were starting out?',
    'Can you recommend any resources for learning more about this field?',
    'Who else would you suggest I speak with?'
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {informationalInterviews.map((phase, index) => {
          const Icon = iconMap[phase.icon] || BookOpen;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {phase.phase}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sample Interview Questions</CardTitle>
          <CardDescription>
            Thoughtful questions to ask during informational interviews
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Career & Experience Questions</h4>
              <ul className="space-y-2">
                {sampleQuestions.slice(0, 5).map((question, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Industry & Future Questions</h4>
              <ul className="space-y-2">
                {sampleQuestions.slice(5).map((question, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Informational Interview Success Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">Before the Interview</h4>
              <ul className="space-y-2 text-sm">
                <li>• Research the person and company thoroughly</li>
                <li>• Prepare specific questions about their experience</li>
                <li>• Set a clear agenda and time limit (20-30 minutes)</li>
                <li>• Choose a convenient format (phone, video, coffee)</li>
                <li>• Send questions in advance if requested</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">During the Interview</h4>
              <ul className="space-y-2 text-sm">
                <li>• Start with gratitude and respect their time</li>
                <li>• Listen actively and ask follow-up questions</li>
                <li>• Take notes (ask permission first)</li>
                <li>• Be genuine about your interests and goals</li>
                <li>• End by asking for referrals to others</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">After the Interview</h4>
              <ul className="space-y-2 text-sm">
                <li>• Send a thank you note within 24 hours</li>
                <li>• Implement advice they provided</li>
                <li>• Share relevant resources or articles</li>
                <li>• Keep them updated on your progress</li>
                <li>• Look for ways to help them in return</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}