import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Warning } from './Warning';
import { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Code, 
  Brain, 
  CheckCircle,
  Clock,
  Star,
  Target,
  Lightbulb,
  RefreshCw,
  Building,
  Monitor
} from 'lucide-react';

export function InterviewPrep() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [practiceAnswer, setPracticeAnswer] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const interviewTypes = [
    {
      type: 'Behavioral',
      icon: Users,
      color: 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800',
      description: 'Questions about past experiences and soft skills',
      questions: [
        'Tell me about a time you had to work with a difficult team member',
        'Describe a situation where you had to meet a tight deadline',
        'Give an example of when you had to adapt to a significant change',
        'Tell me about a time you made a mistake and how you handled it',
        'Describe a situation where you had to convince someone to see your point of view',
        'Tell me about a time you went above and beyond in your role',
        'Describe a conflict you had with a coworker and how you resolved it',
        'Give an example of when you had to learn something new quickly'
      ]
    },
    {
      type: 'Technical',
      icon: Code,
      color: 'bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800',
      description: 'Role-specific technical knowledge and problem-solving',
      questions: [
        'Walk me through your approach to solving a complex technical problem',
        'How would you optimize a slow-performing application?',
        'Explain a recent project you worked on and the technologies used',
        'How do you stay updated with the latest industry trends?',
        'Describe your debugging process when encountering an error',
        'How would you handle scaling an application for high traffic?',
        'Explain the trade-offs between different architectural approaches',
        'What tools do you use for code quality and testing?'
      ]
    },
    {
      type: 'Situational',
      icon: Brain,
      color: 'bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800',
      description: 'Hypothetical scenarios to assess problem-solving',
      questions: [
        'How would you handle competing priorities from different stakeholders?',
        'What would you do if you disagreed with your manager\'s approach?',
        'How would you approach a project with unclear requirements?',
        'Describe how you would onboard a new team member',
        'How would you handle a situation where a project is falling behind schedule?',
        'What would you do if you discovered a major bug right before a release?',
        'How would you manage a team member who is underperforming?',
        'Describe how you would handle a difficult client or customer'
      ]
    }
  ];

  const starMethod = {
    S: { title: 'Situation', description: 'Set the context and background' },
    T: { title: 'Task', description: 'Explain the task or challenge you faced' },
    A: { title: 'Action', description: 'Detail the specific actions you took' },
    R: { title: 'Result', description: 'Share the outcomes and what you learned' }
  };

  const preparationChecklist = [
    'Research company history, mission, and values',
    'Review job description and required skills',
    'Prepare 3-5 STAR method examples',
    'Practice common interview questions',
    'Prepare thoughtful questions to ask interviewer',
    'Review your resume and portfolio',
    'Plan your interview outfit',
    'Test technology for virtual interviews'
  ];

  const getRandomQuestion = (type) => {
    const typeQuestions = interviewTypes.find(t => t.type === type)?.questions || [];
    const randomIndex = Math.floor(Math.random() * typeQuestions.length);
    return typeQuestions[randomIndex];
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    
    // Store interval ID to clear it later
    window.currentTimerInterval = interval;
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    if (window.currentTimerInterval) {
      clearInterval(window.currentTimerInterval);
    }
  };

  const resetTimer = () => {
    setTimer(0);
    stopTimer();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Interview Preparation</h1>
        <p className="text-muted-foreground mt-2">
          Practice and prepare for different types of interviews
        </p>
      </div>

      <Tabs defaultValue="practice" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="practice">Practice Questions</TabsTrigger>
          <TabsTrigger value="star">STAR Method</TabsTrigger>
          <TabsTrigger value="preparation">Preparation</TabsTrigger>
          <TabsTrigger value="tips">Tips & Strategies</TabsTrigger>
        </TabsList>

        <TabsContent value="practice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {interviewTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className={`border ${type.color}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      {type.type} Questions
                    </CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">

                    <div className="max-h-64 overflow-y-auto space-y-2">
                      {type.questions.map((question, qIndex) => (
                        <Button
                          key={qIndex}
                          variant="ghost"
                          className="w-full text-left h-auto p-3 text-xs justify-start"
                          onClick={() => {
                            setSelectedQuestion({ type: type.type, question, color: type.color });
                            setPracticeAnswer('');
                            resetTimer();
                          }}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {selectedQuestion && (
            <Card className={selectedQuestion.color}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Practice Session
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">{selectedQuestion.type}</Badge>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-mono">{formatTime(timer)}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-medium mb-2">Question:</h4>
                  <p>{selectedQuestion.question}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button
                      onClick={isTimerRunning ? stopTimer : startTimer}
                      size="sm"
                      variant={isTimerRunning ? "destructive" : "default"}
                    >
                      {isTimerRunning ? "Stop Timer" : "Start Timer"}
                    </Button>
                    <Button onClick={resetTimer} size="sm" variant="outline">
                      Reset
                    </Button>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Your Answer (use STAR method):</label>
                    <Textarea
                      value={practiceAnswer}
                      onChange={(e) => setPracticeAnswer(e.target.value)}
                      placeholder="Situation: Describe the context...&#10;Task: Explain what you needed to accomplish...&#10;Action: Detail the steps you took...&#10;Result: Share the outcome and what you learned..."
                      className="mt-2 min-h-[200px]"
                    />
                  </div>
                  

                </div>
              </CardContent>
            </Card>
          )}

          {!selectedQuestion && (
            <Card className="border-2 border-dashed">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">Ready to Practice?</h3>
                <p className="text-muted-foreground mb-4">
                  Select a question type above to start practicing your interview responses
                </p>
                <p className="text-sm text-muted-foreground">
                  Tip: Use the STAR method (Situation, Task, Action, Result) to structure your answers
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="star" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                The STAR Method
              </CardTitle>
              <CardDescription>
                Structure your behavioral interview answers for maximum impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {Object.entries(starMethod).map(([letter, details]) => (
                    <div key={letter} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                          {letter}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">{details.title}</h4>
                        <p className="text-sm text-muted-foreground">{details.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/50">
                  <h4 className="font-medium mb-3">Example STAR Response</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-blue-700 dark:text-blue-300">Situation:</strong> 
                      <span className="ml-2">Our team faced a critical bug three days before product launch.</span>
                    </div>
                    <div>
                      <strong className="text-blue-700 dark:text-blue-300">Task:</strong> 
                      <span className="ml-2">I needed to identify the root cause and fix it without delaying the launch.</span>
                    </div>
                    <div>
                      <strong className="text-blue-700 dark:text-blue-300">Action:</strong> 
                      <span className="ml-2">I coordinated with QA, traced the issue to a database query, and implemented a fix while creating comprehensive test cases.</span>
                    </div>
                    <div>
                      <strong className="text-blue-700 dark:text-blue-300">Result:</strong> 
                      <span className="ml-2">We launched on time with zero critical bugs, and the improved testing process prevented similar issues.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preparation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Interview Preparation Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {preparationChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Questions to Ask Interviewer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• What does success look like in this role?</li>
                  <li>• What are the biggest challenges facing the team?</li>
                  <li>• How do you measure performance?</li>
                  <li>• What opportunities exist for growth?</li>
                  <li>• Can you describe the team culture?</li>
                  <li>• What are the next steps in the process?</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Virtual Interview Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Test camera, microphone, and internet</li>
                  <li>• Choose a clean, well-lit background</li>
                  <li>• Have backup contact information ready</li>
                  <li>• Close unnecessary applications</li>
                  <li>• Keep water and notes nearby</li>
                  <li>• Test the video platform beforehand</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* In-Person Interview Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  In-Person Interview Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-blue-700">Before You Go</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Research the office location and parking</li>
                    <li>• Plan to arrive 10-15 minutes early</li>
                    <li>• Prepare physical copies of your resume</li>
                    <li>• Dress appropriately for company culture</li>
                    <li>• Prepare a portfolio or work samples</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-blue-700">During the Interview</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Firm handshake and eye contact</li>
                    <li>• Read the room energy and match it</li>
                    <li>• Use open body language</li>
                    <li>• Take notes to show engagement</li>
                    <li>• Ask about office culture and environment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-blue-700">Office Tour Insights</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Observe team dynamics and energy</li>
                    <li>• Note workspace setup and tools</li>
                    <li>• Ask about collaboration spaces</li>
                    <li>• Show genuine interest in the environment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Virtual Interview Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-green-600" />
                  Virtual Interview Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Technical Setup</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Test camera, microphone, and internet 30min before</li>
                    <li>• Use a laptop/desktop, avoid phones</li>
                    <li>• Have a backup device and internet connection</li>
                    <li>• Close all unnecessary applications</li>
                    <li>• Charge devices and have chargers ready</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-green-700">Environment & Presentation</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Choose a clean, professional background</li>
                    <li>• Ensure good lighting (face the light source)</li>
                    <li>• Position camera at eye level</li>
                    <li>• Minimize distractions and noise</li>
                    <li>• Have water and notes within reach</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-green-700">Virtual Engagement</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Look at the camera, not the screen</li>
                    <li>• Use hand gestures naturally</li>
                    <li>• Speak clearly and slightly slower</li>
                    <li>• Use the mute button when not speaking</li>
                    <li>• Share screen smoothly if needed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Universal Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Universal Interview Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-green-700">✅ Do This</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Research the company thoroughly</li>
                    <li>• Prepare specific examples using STAR method</li>
                    <li>• Ask thoughtful questions about the role</li>
                    <li>• Show genuine enthusiasm and interest</li>
                    <li>• Listen actively and ask for clarification</li>
                    <li>• Send personalized thank you notes</li>
                    <li>• Follow up appropriately after interviews</li>
                    <li>• Be authentic and show your personality</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-red-700">❌ Avoid This</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Speaking negatively about past employers</li>
                    <li>• Giving vague or generic answers</li>
                    <li>• Interrupting the interviewer</li>
                    <li>• Appearing unprepared or disinterested</li>
                    <li>• Focusing only on salary and benefits</li>
                    <li>• Using your phone during the interview</li>
                    <li>• Lying or exaggerating experiences</li>
                    <li>• Forgetting to ask questions at the end</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication & Body Language */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Communication & Body Language Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Verbal Communication</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Speak clearly and at moderate pace</li>
                    <li>• Use the interviewer's name occasionally</li>
                    <li>• Provide specific examples and metrics</li>
                    <li>• Ask clarifying questions when needed</li>
                    <li>• Summarize key points effectively</li>
                    <li>• Show enthusiasm in your voice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Body Language (In-Person)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Maintain good posture throughout</li>
                    <li>• Use open, confident gestures</li>
                    <li>• Make appropriate eye contact (80% rule)</li>
                    <li>• Smile naturally and genuinely</li>
                    <li>• Lean in slightly when listening</li>
                    <li>• Mirror interviewer's energy level</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Follow-up Strategy</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Send thank you within 24 hours</li>
                    <li>• Reference specific conversation points</li>
                    <li>• Reiterate your interest and fit</li>
                    <li>• Include additional relevant information</li>
                    <li>• Connect on LinkedIn appropriately</li>
                    <li>• Follow up if no response in 1 week</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Handling Difficult Situations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-600" />
                Handling Challenging Interview Situations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Technical Difficulties (Virtual)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Stay calm and communicate the issue</li>
                    <li>• Have backup contact information ready</li>
                    <li>• Switch to phone if video fails</li>
                    <li>• Apologize briefly and move on</li>
                    <li>• Test everything 30 minutes prior</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Difficult Questions</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Take a moment to think before answering</li>
                    <li>• Ask for clarification if unclear</li>
                    <li>• Be honest about knowledge gaps</li>
                    <li>• Show how you would find the answer</li>
                    <li>• Redirect to your strengths when possible</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Unexpected Scenarios</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Multiple interviewers at once</li>
                    <li>• Running significantly over/under time</li>
                    <li>• Interviewer seems disengaged</li>
                    <li>• Asked to complete unexpected tasks</li>
                    <li>• Interview format changes suddenly</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Stress Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Practice deep breathing techniques</li>
                    <li>• Reframe nerves as excitement</li>
                    <li>• Focus on conversation, not interrogation</li>
                    <li>• Remember they want you to succeed</li>
                    <li>• Have confidence in your preparation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}