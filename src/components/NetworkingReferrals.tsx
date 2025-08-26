import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ReferralSources } from './networking/ReferralSources';
import { NetworkingStrategies } from './networking/NetworkingStrategies';
import { NetworkingPlatforms } from './networking/NetworkingPlatforms';
import { MessageGenerator } from './networking/MessageGenerator';
import { InformationalInterviews } from './networking/InformationalInterviews';
import { Warning } from './Warning';

export function NetworkingReferrals() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Warning />
      
      <div className="mb-8">
        <h1>Networking & Referrals</h1>
        <p className="text-muted-foreground mt-2">
          Build strategic relationships and unlock the hidden job market through effective networking
        </p>
      </div>

      <Tabs defaultValue="sources" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="sources">Referral Sources</TabsTrigger>
          <TabsTrigger value="strategies">Strategies</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="interviews">Info Interviews</TabsTrigger>
        </TabsList>

        <TabsContent value="sources">
          <ReferralSources />
        </TabsContent>

        <TabsContent value="strategies">
          <NetworkingStrategies />
        </TabsContent>

        <TabsContent value="platforms">
          <NetworkingPlatforms />
        </TabsContent>

        <TabsContent value="messages">
          <MessageGenerator />
        </TabsContent>

        <TabsContent value="interviews">
          <InformationalInterviews />
        </TabsContent>
      </Tabs>
    </div>
  );
}