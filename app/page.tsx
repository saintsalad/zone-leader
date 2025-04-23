import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Crown, Trophy, Users, Map, Calendar, Target, Shield, BarChart } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        {/* Hero Section - Improved with more Solo Leveling style */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 opacity-80 z-0" />
          <div className="absolute inset-0 bg-blue-600/10 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/0 to-gray-900 z-0" />
          <div className="container mx-auto px-4 z-10 pt-16">
            <div className="text-center space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                ARISE
              </h1>
              <p className="text-2xl md:text-4xl font-semibold text-gray-200">
                Become the Ultimate <span className="text-blue-400">Zone Leader</span>
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Challenge zones, defeat runners, and climb the ranks in this real-world running competition platform inspired by Solo Leveling.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Your Journey <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Solo Leveling style decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent z-10" />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
            <div className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Ranking System - Updated with better styling */}
        <section className="py-20 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5 bg-repeat opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Zone-Based Title System
                </span>
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Like hunters in Solo Leveling, our runners progress through a structured rank system based on their achievements and consistency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Zone Leader",
                  description: "Weekly winner of a zone. The first step in your journey to greatness.",
                  icon: <Crown className="w-8 h-8 text-yellow-500" />,
                  border: "border-yellow-500/20",
                  shadow: "shadow-yellow-500/5"
                },
                {
                  title: "Zone Master",
                  description: "4-week streak + requalifying run. Only the dedicated reach this level.",
                  icon: <Trophy className="w-8 h-8 text-blue-500" />,
                  border: "border-blue-500/20",
                  shadow: "shadow-blue-500/10"
                },
                {
                  title: "Zone Champion",
                  description: "12-week streak grants this permanent badge. The highest honor.",
                  icon: <Crown className="w-8 h-8 text-purple-500" />,
                  border: "border-purple-500/20",
                  shadow: "shadow-purple-500/10"
                },
              ].map((rank) => (
                <Card key={rank.title} className={`bg-gray-800/50 border-gray-700 hover:border-t-2 ${rank.border} transition-all duration-300 shadow-lg ${rank.shadow}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      {rank.icon}
                      {rank.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{rank.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section - Improved positioning and more minimal design */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-3">Development Roadmap</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our journey to build the ultimate runner&apos;s leveling platform is carefully planned. Here&apos;s what&apos;s coming:
              </p>
            </div>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
              
              <div className="space-y-24">
                {[
                  {
                    phase: "Phase 1",
                    title: "Foundations & MVP",
                    date: "April 21–May 3",
                    status: "in-progress",
                    items: [
                      { text: "Setup project with modern UI components", done: true },
                      { text: "Connect with Strava for runner authentication", done: false },
                      { text: "Create zone-based challenge system", done: false },
                      { text: "Implement activity validation", done: false }
                    ],
                    icon: <Calendar className="w-6 h-6" />
                  },
                  {
                    phase: "Phase 2",
                    title: "Weekly Crown System",
                    date: "May 4–10",
                    status: "upcoming",
                    items: [
                      { text: "Automated weekly zone leader selection", done: false },
                      { text: "Zone ownership tracking", done: false },
                      { text: "Runner profile and achievements", done: false }
                    ],
                    icon: <Crown className="w-6 h-6" />
                  },
                  {
                    phase: "Phase 3",
                    title: "Tier System + PvP",
                    date: "May 11–18",
                    status: "upcoming",
                    items: [
                      { text: "Runner skill classification (D → S rank)", done: false },
                      { text: "Head-to-head runner challenges", done: false },
                      { text: "Fair play monitoring system", done: false }
                    ],
                    icon: <Shield className="w-6 h-6" />
                  },
                  {
                    phase: "Phase 4",
                    title: "Title & Streak System",
                    date: "May 19–24",
                    status: "upcoming",
                    items: [
                      { text: "Progressive title system (Leader → Master → Champion)", done: false },
                      { text: "Visual streak tracking", done: false },
                      { text: "Zone ownership displays", done: false }
                    ],
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    phase: "Phase 5",
                    title: "Final Polish & Launch",
                    date: "May 25–30",
                    status: "upcoming",
                    items: [
                      { text: "Admin controls and monitoring", done: false },
                      { text: "Invite top runners for private testing", done: false },
                      { text: "Finalize balanced competition rules", done: false }
                    ],
                    icon: <BarChart className="w-6 h-6" />
                  }
                ].map((phase, index) => (
                  <div key={phase.phase} className="flex flex-col md:flex-row items-center">
                    {/* Left content */}
                    <div className="md:w-[45%] md:pr-8 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                      {index % 2 === 0 && (
                        <>
                          <div className="flex md:flex-row-reverse md:justify-start items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-blue-400">{phase.phase}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              phase.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {phase.status === 'completed' ? 'Completed' : 
                               phase.status === 'in-progress' ? 'In Progress' : 
                               'Upcoming'}
                            </span>
                          </div>
                          <h4 className="text-2xl font-bold mb-1">{phase.title}</h4>
                          <p className="text-sm text-gray-400 mb-3">{phase.date}</p>
                          <ul className="space-y-2 md:ml-auto text-gray-300">
                            {phase.items.map((item, i) => (
                              <li key={i} className="flex md:flex-row-reverse items-start gap-2">
                                <span className={`flex-grow md:text-right ${item.done ? 'text-blue-400' : ''}`}>{item.text}</span>
                                <div className={`mt-0.5 w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center ${
                                  item.done 
                                    ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                                    : 'bg-gray-800/50 border-gray-700'
                                }`}>
                                  {item.done && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    
                    {/* Circle in the middle */}
                    <div className="relative md:w-[10%] flex-shrink-0 order-1 md:order-2">
                      <div className={`w-12 h-12 mx-auto rounded-full bg-gray-800 border-2 flex items-center justify-center text-blue-400 z-20 ${
                        phase.status === 'completed' ? 'border-green-500' :
                        phase.status === 'in-progress' ? 'border-blue-500' :
                        'border-purple-500'
                      }`}>
                        {phase.icon}
                      </div>
                    </div>
                    
                    {/* Right content */}
                    <div className="md:w-[45%] md:pl-8 order-2 md:order-3 mt-6 md:mt-0">
                      {index % 2 === 1 && (
                        <>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-blue-400">{phase.phase}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              phase.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {phase.status === 'completed' ? 'Completed' : 
                               phase.status === 'in-progress' ? 'In Progress' : 
                               'Upcoming'}
                            </span>
                          </div>
                          <h4 className="text-2xl font-bold mb-1">{phase.title}</h4>
                          <p className="text-sm text-gray-400 mb-3">{phase.date}</p>
                          <ul className="space-y-2 text-gray-300">
                            {phase.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className={`mt-0.5 w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center ${
                                  item.done 
                                    ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                                    : 'bg-gray-800/50 border-gray-700'
                                }`}>
                                  {item.done && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                <span className={item.done ? 'text-blue-400' : ''}>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features - Enhanced styling */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-3">Key Features</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our platform offers a unique blend of real-world running and digital progression inspired by Solo Leveling.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Real-World Zones",
                  description: "Compete in designated running zones spread across your city",
                  icon: <Map className="w-10 h-10 text-blue-500" />,
                },
                {
                  title: "PvP Challenges",
                  description: "Direct duels with other runners to climb the ranks faster",
                  icon: <Users className="w-10 h-10 text-blue-500" />,
                },
                {
                  title: "Tier System",
                  description: "Progress from D to S rank based on your performance",
                  icon: <Trophy className="w-10 h-10 text-blue-500" />,
                },
                {
                  title: "Weekly Crowns",
                  description: "Become the leader of your zone and defend your title",
                  icon: <Crown className="w-10 h-10 text-blue-500" />,
                },
              ].map((feature) => (
                <Card key={feature.title} className="bg-gray-800/30 border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/50 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced styling */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5 bg-repeat opacity-20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to <span className="text-blue-400">Level Up</span>?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the ranks of elite runners and prove yourself in the zones. Your journey to become a Zone Champion begins now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                Register Now <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10 text-lg px-8 py-6 h-auto">
                View Zones Map
              </Button>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-12">
              <p className="text-gray-500">
                Built with passion by runners, for runners. Experience the thrill of Solo Leveling in the real world.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
