import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Slider } from '../ui/slider';
import { Input } from '../ui/input';
import { Award, BookOpen, Users, TrendingUp, Target, Plus, Minus, Lightbulb, Calendar, Download } from 'lucide-react';
import { useState } from 'react';

export function SkillDevelopment() {
  const [skills, setSkills] = useState([
    { name: 'Leadership', current: 7, target: 9, category: 'Leadership', priority: 'High' },
    { name: 'Technical Expertise', current: 8, target: 9, category: 'Technical', priority: 'Medium' },
    { name: 'Communication', current: 6, target: 8, category: 'Soft Skills', priority: 'High' },
    { name: 'Strategic Thinking', current: 5, target: 8, category: 'Leadership', priority: 'High' },
    { name: 'Project Management', current: 7, target: 8, category: 'Leadership', priority: 'Medium' },
    { name: 'Data Analysis', current: 6, target: 7, category: 'Technical', priority: 'Low' },
  ]);

  const [performanceQuadrant] = useState([
    { name: 'John Smith', performance: 9, potential: 8, category: 'Star' },
    { name: 'Sarah Johnson', performance: 8, potential: 9, category: 'High Potential' },
    { name: 'Mike Chen', performance: 7, potential: 6, category: 'Core Performer' },
    { name: 'Lisa Wang', performance: 5, potential: 8, category: 'Emerging Talent' },
    { name: 'You', performance: 7, potential: 7, category: 'Core Performer' },
  ]);

  const developmentAreas = [
    {
      category: 'Technical Skills',
      icon: BookOpen,
      color: 'text-blue-600',
      actions: [
        'Complete online courses and certifications',
        'Contribute to open source projects',
        'Attend technical conferences and workshops',
        'Practice with hands-on projects'
      ]
    },
    {
      category: 'Leadership Skills',
      icon: Users,
      color: 'text-green-600',
      actions: [
        'Take on mentoring opportunities',
        'Lead cross-functional projects',
        'Join leadership development programs',
        'Practice public speaking and presentations'
      ]
    },
    {
      category: 'Business Acumen',
      icon: TrendingUp,
      color: 'text-purple-600',
      actions: [
        'Understand company financials and metrics',
        'Study market trends and competitors',
        'Develop customer empathy through research',
        'Learn about business strategy frameworks'
      ]
    }
  ];

  const updateSkill = (index, field, value) => {
    setSkills(prev => prev.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    ));
  };

  const addSkill = () => {
    setSkills(prev => [...prev, {
      name: '',
      current: 1,
      target: 5,
      category: 'Technical',
      priority: 'Medium'
    }]);
  };

  const removeSkill = (index) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const exportToPDF = () => {
    // Create comprehensive PDF-formatted content
    const pdfContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Personal Skills Development Plan</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 3px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { margin: 0; color: #333; font-size: 28px; }
        .header p { margin: 5px 0 0 0; color: #666; }
        .section { margin-bottom: 35px; }
        .section h2 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 8px; margin-bottom: 15px; }
        .skill-item { margin: 15px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .skill-name { font-weight: bold; font-size: 16px; color: #333; }
        .skill-details { margin: 8px 0; color: #555; }
        .progress-bar { background: #f0f0f0; height: 20px; border-radius: 10px; margin: 5px 0; position: relative; }
        .progress-fill { height: 100%; border-radius: 10px; }
        .current-level { background: #4CAF50; }
        .target-level { background: #2196F3; }
        .recommendations { background: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; margin: 10px 0; }
        .action-item { margin: 5px 0; padding-left: 20px; position: relative; }
        .action-item::before { content: "→"; position: absolute; left: 0; color: #4CAF50; font-weight: bold; }
        .footer { margin-top: 40px; border-top: 2px solid #eee; padding-top: 20px; text-align: center; color: #666; }
        @media print { body { margin: 20px; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>Personal Skills Development Plan</h1>
        <p>Generated on ${new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
    </div>

    <div class="section">
        <h2>Skills Assessment Summary</h2>
        ${skills.map(skill => `
        <div class="skill-item">
            <div class="skill-name">${skill.name || 'Unnamed Skill'}</div>
            <div class="skill-details">
                Category: ${skill.category} | Priority: ${skill.priority}
            </div>
            <div class="skill-details">
                Current Level: ${skill.current}/10 | Target Level: ${skill.target}/10 | Gap: ${skill.target - skill.current}
            </div>
            <div class="progress-bar">
                <div class="progress-fill current-level" style="width: ${skill.current * 10}%"></div>
            </div>
        </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Development Recommendations</h2>
        ${developmentAreas.map(area => `
        <div class="recommendations">
            <h3>${area.category}</h3>
            ${area.actions.map(action => `<div class="action-item">${action}</div>`).join('')}
        </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Action Plan Framework</h2>
        <div class="recommendations">
            <h3>30-Day Goals</h3>
            <div class="action-item">Complete skills assessment and identify top 3 priority areas</div>
            <div class="action-item">Research learning resources and create study schedule</div>
            <div class="action-item">Find accountability partner or mentor</div>
        </div>
        
        <div class="recommendations">
            <h3>60-Day Goals</h3>
            <div class="action-item">Begin structured learning (courses, books, practice)</div>
            <div class="action-item">Apply new skills in real projects or scenarios</div>
            <div class="action-item">Seek feedback from colleagues or supervisors</div>
        </div>
        
        <div class="recommendations">
            <h3>90-Day Goals</h3>
            <div class="action-item">Demonstrate improved competency in target skills</div>
            <div class="action-item">Update skill levels and reassess gaps</div>
            <div class="action-item">Plan next development cycle</div>
        </div>
    </div>

    <div class="footer">
        <p>Created with Job Craft - Your Career Development Platform</p>
        <p><em>Print this page to PDF using your browser's print function</em></p>
    </div>
</body>
</html>`;

    // Create blob and download HTML file that can be printed to PDF
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Skills-Development-Plan-PDF.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Also open in new window for immediate printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(pdfContent);
      printWindow.document.close();
      printWindow.focus();
      
      // Trigger print dialog after content loads
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  const getQuadrantColor = (performance, potential) => {
    if (performance >= 8 && potential >= 8) return 'bg-green-100 text-green-800 border-green-200';
    if (performance >= 7 && potential >= 8) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (performance >= 8 && potential < 8) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (performance >= 6 && potential >= 6) return 'bg-gray-100 text-gray-800 border-gray-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getQuadrantLabel = (performance, potential) => {
    if (performance >= 8 && potential >= 8) return 'Star Performer';
    if (performance < 7 && potential >= 8) return 'High Potential';
    if (performance >= 8 && potential < 8) return 'Solid Performer';
    if (performance >= 6 && potential >= 6) return 'Core Performer';
    return 'Needs Development';
  };

  return (
    <div className="space-y-6">
      
      {/* Introduction Section */}
      <Card className="bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <BookOpen className="h-5 w-5" />
            Why Skill Development Matters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Career Advancement</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Developing targeted skills opens doors to promotions and new opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Strategic Focus</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Focus your learning efforts on skills that maximize career impact
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Market Value</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                In-demand skills increase your marketability and earning potential
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Personal Skills Assessment & Goals
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-1">
                Track your current skill levels and set development targets. Use the 1-10 scale where 1 = Beginner and 10 = Expert.
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportToPDF} size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Plan
              </Button>
              <Button onClick={addSkill} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Skill
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">💡 How to Use This Tool</h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• <strong>Current Level:</strong> Honestly assess where you are today (1 = learning, 5 = competent, 10 = expert)</li>
              <li>• <strong>Target Level:</strong> Set where you want to be in 6-12 months</li>
              <li>• <strong>Priority:</strong> High priority = critical for your next career move</li>
              <li>• <strong>Gap Analysis:</strong> Focus on skills with the largest gaps first</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <Input
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateSkill(index, 'name', e.target.value)}
                      placeholder="Enter skill name"
                      className="font-medium max-w-xs"
                    />
                    <Badge 
                      variant={skill.priority === 'High' ? 'destructive' : 
                              skill.priority === 'Medium' ? 'default' : 'secondary'}
                    >
                      {skill.priority} Priority
                    </Badge>
                  </div>
                  <Button
                    onClick={() => removeSkill(index)}
                    size="sm"
                    variant="ghost"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Current Level</span>
                      <span className="text-sm font-medium">{skill.current}/10</span>
                    </div>
                    <Slider
                      value={[skill.current]}
                      onValueChange={(value) => updateSkill(index, 'current', value[0])}
                      max={10}
                      step={1}
                      className="mb-2"
                    />
                    <Progress value={skill.current * 10} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Target Level</span>
                      <span className="text-sm font-medium">{skill.target}/10</span>
                    </div>
                    <Slider
                      value={[skill.target]}
                      onValueChange={(value) => updateSkill(index, 'target', value[0])}
                      max={10}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex items-center gap-2">
                      <Progress value={skill.target * 10} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground">
                        Gap: {skill.target - skill.current}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <select
                    value={skill.category}
                    onChange={(e) => updateSkill(index, 'category', e.target.value)}
                    className="text-sm border rounded px-2 py-1"
                  >
                    <option value="Technical">Technical</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Soft Skills">Soft Skills</option>
                    <option value="Business">Business</option>
                  </select>
                  <select
                    value={skill.priority}
                    onChange={(e) => updateSkill(index, 'priority', e.target.value)}
                    className="text-sm border rounded px-2 py-1"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Performance vs Potential Matrix
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            This tool helps you understand where you stand relative to your peers and identifies development opportunities. 
            It's commonly used by companies for talent planning and succession.
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">📊 Understanding the Matrix</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-green-700 dark:text-green-300">
              <div>
                <strong>Performance:</strong> Your current job effectiveness and results delivery
              </div>
              <div>
                <strong>Potential:</strong> Your capacity for growth and taking on bigger roles
              </div>
              <div>
                <strong>Star Performer:</strong> High performance + High potential (promotion ready)
              </div>
              <div>
                <strong>High Potential:</strong> Strong future ability but developing current skills
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative h-80 border rounded-lg p-4">
                <div className="absolute inset-4">
                  {/* Quadrant labels */}
                  <div className="absolute top-0 left-0 text-xs text-muted-foreground">High Potential</div>
                  <div className="absolute top-0 right-0 text-xs text-muted-foreground">Star Performer</div>
                  <div className="absolute bottom-0 left-0 text-xs text-muted-foreground">Needs Development</div>
                  <div className="absolute bottom-0 right-0 text-xs text-muted-foreground">Solid Performer</div>
                  
                  {/* Grid lines */}
                  <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-muted-foreground/30"></div>
                  <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-muted-foreground/30"></div>
                  
                  {/* Axis labels */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">Performance →</div>
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs">Potential →</div>
                  
                  {/* Data points */}
                  {performanceQuadrant.map((person, index) => (
                    <div
                      key={index}
                      className={`absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
                        person.name === 'You' ? 'bg-blue-500 ring-2 ring-blue-200' : 'bg-gray-400'
                      }`}
                      style={{
                        left: `${(person.performance / 10) * 100}%`,
                        bottom: `${(person.potential / 10) * 100}%`
                      }}
                      title={`${person.name} - Performance: ${person.performance}, Potential: ${person.potential}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Team Positioning</h4>
              {performanceQuadrant.map((person, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border ${getQuadrantColor(person.performance, person.potential)} ${
                    person.name === 'You' ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{person.name}</span>
                    <Badge variant="outline">
                      {getQuadrantLabel(person.performance, person.potential)}
                    </Badge>
                  </div>
                  <div className="text-sm mt-1">
                    Performance: {person.performance}/10 | Potential: {person.potential}/10
                  </div>
                </div>
              ))}
              
              <div className="p-4 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Your Development Focus</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  As a Core Performer, focus on developing high-impact skills to move toward Star Performer status.
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Seek stretch assignments</li>
                  <li>• Develop leadership capabilities</li>
                  <li>• Build strategic thinking skills</li>
                  <li>• Increase visibility with senior leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Actionable Development Strategies
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Concrete actions you can take to develop skills in each category. Start with your high-priority skill gaps.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {developmentAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className={`h-5 w-5 ${area.color}`} />
                    <h4 className="font-medium">{area.category}</h4>
                  </div>
                  <div className="space-y-3">
                    {area.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full border-2 border-muted flex items-center justify-center mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            Creating Your Development Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">30-60-90 Day Framework</h4>
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/50">
                  <h5 className="font-medium text-blue-800 dark:text-blue-200">First 30 Days</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Assess current skills, identify gaps, and create learning resources list
                  </p>
                </div>
                <div className="p-3 border-l-4 border-green-400 bg-green-50 dark:bg-green-950/50">
                  <h5 className="font-medium text-green-800 dark:text-green-200">Next 60 Days</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Start courses, practice new skills, seek mentorship or guidance
                  </p>
                </div>
                <div className="p-3 border-l-4 border-purple-400 bg-purple-50 dark:bg-purple-950/50">
                  <h5 className="font-medium text-purple-800 dark:text-purple-200">Final 90 Days</h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Apply skills in real projects, get feedback, update skill levels
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Success Tips</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Focus on 2-3 skills maximum to avoid overwhelm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-blue-500 mt-0.5" />
                  <span>Find accountability partners or mentors</span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-purple-500 mt-0.5" />
                  <span>Mix theoretical learning with practical application</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-orange-500 mt-0.5" />
                  <span>Track progress weekly and adjust plan as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <span>Celebrate small wins to maintain motivation</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}