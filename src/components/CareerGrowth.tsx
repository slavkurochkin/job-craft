import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CareerPath } from './career-growth/CareerPath';
import { SkillDevelopment } from './career-growth/SkillDevelopment';
import { ActionPlanning } from './career-growth/ActionPlanning';
import { Resources } from './career-growth/Resources';
import { Warning } from './Warning';

export function CareerGrowth() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Career Growth & Planning</h1>
        <p className="text-muted-foreground mt-2">
          Plan your career progression and develop the skills needed for advancement
        </p>
      </div>

      <Tabs defaultValue="path" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="path">Career Path</TabsTrigger>
          <TabsTrigger value="development">Skill Development</TabsTrigger>
          <TabsTrigger value="planning">Action Planning</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="path" className="space-y-6">
          <CareerPath />
        </TabsContent>

        <TabsContent value="development" className="space-y-6">
          <SkillDevelopment />
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          <ActionPlanning />
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Resources />
        </TabsContent>
      </Tabs>
    </div>
  );
}