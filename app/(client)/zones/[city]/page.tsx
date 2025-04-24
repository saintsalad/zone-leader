"use client";

import React, { useState, use } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Timer,
  Trophy,
  Users,
  Medal,
  Flag,
  ArrowRight,
  Crown,
  ChevronDown,
  MapPin,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Mock data - replace with real data later
const cityData = {
  "quezon-city": {
    name: "Quezon City",
    description: "Home to the most diverse running routes in Metro Manila",
    totalPlayers: 450,
    totalChallenges: 1240,
    cityLeaderboard: {
      topPlayers: [
        {
          rank: 1,
          name: "Juan Dela Cruz",
          totalRuns: 85,
          successRate: "82%",
          records: 2,
          class: "S",
          title: "Route Leader",
          streak: 12,
          xp: 2500,
          crownCount: 5,
        },
        {
          rank: 2,
          name: "Maria Santos",
          totalRuns: 80,
          successRate: "78%",
          records: 1,
          class: "S",
          title: "",
          streak: 4,
          xp: 1800,
          crownCount: 3,
        },
        {
          rank: 3,
          name: "Pedro Reyes",
          totalRuns: 75,
          successRate: "75%",
          records: 1,
          class: "A",
          title: "",
          streak: 1,
          xp: 1200,
          crownCount: 1,
        },
      ],
      otherPlayers: [
        {
          rank: 4,
          name: "Ana Reyes",
          totalRuns: 65,
          successRate: "70%",
          class: "A",
          title: "",
          crownCount: 0,
        },
        {
          rank: 5,
          name: "John Smith",
          totalRuns: 60,
          successRate: "68%",
          class: "B",
          title: "",
          crownCount: 2,
        },
        {
          rank: 6,
          name: "Mike Johnson",
          totalRuns: 55,
          successRate: "65%",
          class: "B",
          title: "",
          crownCount: 0,
        },
        {
          rank: 7,
          name: "Sarah Lee",
          totalRuns: 45,
          successRate: "62%",
          class: "C",
          title: "",
          crownCount: 0,
        },
        {
          rank: 8,
          name: "James Wilson",
          totalRuns: 40,
          successRate: "60%",
          class: "C",
          title: "",
          crownCount: 0,
        },
        {
          rank: 9,
          name: "Lisa Garcia",
          totalRuns: 35,
          successRate: "58%",
          class: "C",
          title: "",
          crownCount: 0,
        },
        {
          rank: 10,
          name: "David Chen",
          totalRuns: 30,
          successRate: "55%",
          class: "D",
          title: "",
          crownCount: 0,
        },
      ],
    },
    routes: [
      {
        id: 1,
        name: "UP Academic Oval",
        distance: "5km",
        currentLeader: {
          name: "Juan Dela Cruz",
          time: "00:23:45",
          streak: 12,
          title: "Route Leader",
          class: "S",
        },
        weeklySlots: 10,
        slotsRemaining: 6,
        totalChallenges: 342,
        failedAttempts: 156,
        successRate: "54%",
        topRunners: [
          {
            name: "Juan Dela Cruz",
            runs: 45,
            rank: 1,
            class: "S",
            title: "Route Leader",
            bestTime: "00:23:45",
            streak: 12,
            crownCount: 0,
          },
          {
            name: "Maria Santos",
            runs: 42,
            rank: 2,
            class: "S",
            title: "",
            bestTime: "00:24:15",
            streak: 4,
            crownCount: 3,
          },
          {
            name: "Pedro Reyes",
            runs: 38,
            rank: 3,
            class: "A",
            title: "",
            bestTime: "00:24:45",
            streak: 1,
            crownCount: 1,
          },
        ],
        tierRestriction: "A and above",
        nextRequalification: "3 days",
      },
      {
        id: 2,
        name: "QC Memorial Circle Extended",
        distance: "10km",
        currentLeader: {
          name: "Maria Santos",
          time: "00:52:30",
          streak: 4,
          title: "Route Leader",
          class: "S",
        },
        weeklySlots: 8,
        slotsRemaining: 5,
        totalChallenges: 186,
        failedAttempts: 98,
        successRate: "47%",
        topRunners: [
          {
            name: "Maria Santos",
            runs: 28,
            rank: 1,
            class: "S",
            title: "Route Leader",
            bestTime: "00:52:30",
            streak: 4,
            crownCount: 0,
          },
          {
            name: "John Smith",
            runs: 25,
            rank: 2,
            class: "A",
            title: "",
            bestTime: "00:53:15",
            streak: 1,
            crownCount: 2,
          },
          {
            name: "Ana Reyes",
            runs: 22,
            rank: 3,
            class: "B",
            title: "",
            bestTime: "00:54:30",
            streak: 0,
            crownCount: 0,
          },
        ],
        tierRestriction: "B and above",
        nextRequalification: "5 days",
      },
      {
        id: 3,
        name: "QC-San Juan Circuit",
        distance: "20km",
        currentLeader: {
          name: "Pedro Reyes",
          time: "01:45:20",
          streak: 1,
          title: "Route Leader",
          class: "A",
        },
        weeklySlots: 5,
        slotsRemaining: 3,
        totalChallenges: 95,
        failedAttempts: 62,
        successRate: "35%",
        topRunners: [
          {
            name: "Pedro Reyes",
            runs: 15,
            rank: 1,
            class: "A",
            title: "Route Leader",
            bestTime: "01:45:20",
            streak: 1,
            crownCount: 0,
          },
          {
            name: "Juan Dela Cruz",
            runs: 12,
            rank: 2,
            class: "S",
            title: "",
            bestTime: "01:46:45",
            streak: 0,
            crownCount: 4,
          },
          {
            name: "Maria Santos",
            runs: 10,
            rank: 3,
            class: "S",
            title: "",
            bestTime: "01:47:30",
            streak: 0,
            crownCount: 2,
          },
        ],
        tierRestriction: "A and above",
        nextRequalification: "7 days",
      },
    ],
  },
  // Add other cities here...
};

interface Runner {
  name: string;
  runs: number;
  rank: number;
  class: string;
  title: string;
  bestTime: string;
  streak: number;
  crownCount?: number;
}

interface Route {
  id: number;
  name: string;
  distance: string;
  currentLeader: {
    name: string;
    time: string;
    streak: number;
    title: string;
    class: string;
  };
  weeklySlots: number;
  slotsRemaining: number;
  totalChallenges: number;
  failedAttempts: number;
  successRate: string;
  topRunners: Runner[];
  tierRestriction: string;
  nextRequalification: string;
}

// Add RouteMap component
const RouteMap = ({ routeName }: { routeName: string }) => {
  return (
    <div className="relative h-32 bg-slate-800/50 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-1">
        <MapPin className="h-6 w-6 text-slate-500" />
        <span className="text-sm text-slate-500">Map for {routeName}</span>
      </div>
    </div>
  );
};

function City({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = use(params);
  const city = cityData[resolvedParams.city as keyof typeof cityData];
  const [showAllPlayers, setShowAllPlayers] = useState(false);
  const [selectedTier, setSelectedTier] = useState("D"); // Default to lowest tier

  if (!city) {
    return <div>City not found</div>;
  }

  // Update the getTitleBadge function for simpler colors
  const getTitleBadge = (title: string, crownCount?: number) => {
    if (title === "Route Leader") {
      return (
        <Badge variant="outline" className="border-amber-500/50 text-amber-500">
          <Crown className="w-3 h-3 mr-1" /> Leader
        </Badge>
      );
    } else if (crownCount && crownCount > 0) {
      return (
        <Badge variant="outline" className="border-slate-500/50 text-slate-400">
          <Crown className="w-3 h-3 mr-1" /> x{crownCount}
        </Badge>
      );
    }
    return null;
  };

  // Update the getClassColor function for simpler colors
  const getClassColor = (playerClass: string) => {
    switch (playerClass) {
      case "S":
        return "text-amber-500 border-amber-500/20";
      case "A":
        return "text-slate-200 border-slate-200/20";
      case "B":
        return "text-slate-300 border-slate-300/20";
      case "C":
        return "text-slate-400 border-slate-400/20";
      case "D":
        return "text-slate-500 border-slate-500/20";
      default:
        return "text-slate-400 border-slate-400/20";
    }
  };

  const canChallenge = (routeTier: string) => {
    const tiers = ["D", "C", "B", "A", "S"];
    const routeMinTier = routeTier.split(" ")[0]; // Get "A" from "A and above"
    const playerTierIndex = tiers.indexOf(selectedTier);
    const routeTierIndex = tiers.indexOf(routeMinTier);
    return playerTierIndex >= routeTierIndex;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      {/* City Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{city.name}</h1>
          <p className="text-slate-200 max-w-2xl">{city.description}</p>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 text-slate-200">
              <Users className="h-5 w-5" />
              <span>{city.totalPlayers} players</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Flag className="h-5 w-5" />
              <span>{city.totalChallenges} challenges completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Player Tier Selection */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <h3 className="text-slate-200">Your Current Tier:</h3>
            <Select value={selectedTier} onValueChange={setSelectedTier}>
              <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select your tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="S">Class S</SelectItem>
                <SelectItem value="A">Class A</SelectItem>
                <SelectItem value="B">Class B</SelectItem>
                <SelectItem value="C">Class C</SelectItem>
                <SelectItem value="D">Class D</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Routes Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              Available Routes
            </h2>
            <div className="grid gap-6">
              {city.routes.map((route: Route) => (
                <Card key={route.id} className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <Timer className="h-5 w-5 text-slate-400" />
                        <span>{route.name}</span>
                        <Badge
                          variant="secondary"
                          className="bg-slate-500/20 text-slate-200"
                        >
                          {route.distance}
                        </Badge>
                      </div>
                      <Button
                        variant="outline"
                        className={`border-white/10 ${
                          canChallenge(route.tierRestriction)
                            ? "bg-white/10 hover:bg-white/20 text-white"
                            : "bg-slate-800/50 text-slate-500 cursor-not-allowed"
                        }`}
                        disabled={!canChallenge(route.tierRestriction)}
                      >
                        {canChallenge(route.tierRestriction) ? (
                          <>
                            Challenge Route{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Tier Locked <Lock className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <RouteMap routeName={route.name} />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-sm text-gray-400">
                              Weekly Slots
                            </div>
                            <div className="text-xl text-white">
                              {route.slotsRemaining}/{route.weeklySlots}
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-sm text-gray-400">
                              Success Rate
                            </div>
                            <div className="text-xl text-white">
                              {route.successRate}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          <Medal className="h-4 w-4 text-slate-400" />
                          Top Runners
                        </h3>
                        <div className="space-y-2">
                          {route.topRunners.map((runner) => (
                            <div
                              key={runner.name}
                              className="flex items-center justify-between bg-white/5 rounded-lg p-2"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400 w-4">
                                  #{runner.rank}
                                </span>
                                <div>
                                  <div className="text-white text-sm">
                                    {runner.name}
                                  </div>
                                  <div className="flex items-center gap-1 mt-0.5">
                                    {getTitleBadge(
                                      runner.title,
                                      runner.crownCount
                                    )}
                                    <Badge
                                      variant="outline"
                                      className={cn(
                                        "text-xs py-0",
                                        getClassColor(runner.class)
                                      )}
                                    >
                                      {runner.class}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right text-xs">
                                <div className="text-white font-mono">
                                  {runner.bestTime}
                                </div>
                                {runner.streak > 0 && (
                                  <div className="text-amber-400">
                                    {runner.streak}w streak
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* City Leaderboard Section - Takes up 1 column */}
          <div>
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Crown className="h-6 w-6 text-yellow-400" />
                City Leaderboard
              </h2>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-yellow-400" />
                        Top Players
                      </h3>
                      {city.cityLeaderboard.topPlayers.map((player) => (
                        <div
                          key={player.rank}
                          className="flex items-center justify-between bg-white/5 rounded-lg p-2"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-medium text-slate-400 w-6">
                              #{player.rank}
                            </span>
                            <div>
                              <div className="text-white text-sm">
                                {player.name}
                              </div>
                              <div className="flex items-center gap-1 mt-0.5">
                                {getTitleBadge(player.title, player.crownCount)}
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "text-xs py-0",
                                    getClassColor(player.class)
                                  )}
                                >
                                  {player.class}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="text-right text-xs">
                            <div className="text-slate-300">
                              {player.totalRuns} runs • {player.xp} XP
                            </div>
                            {player.streak > 0 && (
                              <div className="text-amber-400">
                                {player.streak}w streak
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          Other Players
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowAllPlayers(!showAllPlayers)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          {showAllPlayers ? "Show Less" : "Show All"}
                          <ChevronDown
                            className={`ml-2 h-4 w-4 transition-transform ${
                              showAllPlayers ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </div>
                      <ScrollArea
                        className={`space-y-1 ${
                          showAllPlayers ? "max-h-[400px]" : "max-h-[200px]"
                        }`}
                      >
                        {city.cityLeaderboard.otherPlayers.map((player) => (
                          <div
                            key={player.rank}
                            className="flex items-center justify-between bg-white/5 rounded-lg p-2 mb-1"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-slate-400 w-6">
                                #{player.rank}
                              </span>
                              <div>
                                <div className="text-white text-sm">
                                  {player.name}
                                </div>
                                <div className="flex items-center gap-1 mt-0.5">
                                  {getTitleBadge(
                                    player.title,
                                    player.crownCount
                                  )}
                                  <Badge
                                    variant="outline"
                                    className={cn(
                                      "text-xs py-0",
                                      getClassColor(player.class)
                                    )}
                                  >
                                    {player.class}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="text-right text-xs">
                              <div className="text-slate-300">
                                {player.totalRuns} runs
                              </div>
                              <div className="text-green-400">
                                {player.successRate}
                              </div>
                            </div>
                          </div>
                        ))}
                      </ScrollArea>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City;
