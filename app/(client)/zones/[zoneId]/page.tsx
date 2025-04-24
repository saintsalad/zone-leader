"use client";

import React, { useState, use } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Timer,
  Users,
  Flag,
  ArrowRight,
  Lock,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useZone } from "@/hooks/useZones";
import { useRoutes } from "@/hooks/useRoutes";
import type { Route } from "@/lib/definitions";
import { Enums } from "@/database.types";

function LoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500 mx-auto" />
        <p className="text-slate-300 text-lg">Loading zone details...</p>
      </div>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center">
      <div className="text-center space-y-4 p-8 bg-red-500/10 rounded-lg border border-red-500/20 max-w-md mx-auto">
        <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
        <h2 className="text-xl font-semibold text-white">Error Loading Zone</h2>
        <p className="text-slate-300">{message}</p>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
          className="bg-white/5 hover:bg-white/10 border-red-500/20"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}

function City({ params }: { params: Promise<{ zoneId: string }> }) {
  const unwrappedParams = use(params);
  const {
    data: zone,
    isLoading: isZoneLoading,
    error: zoneError,
  } = useZone(unwrappedParams.zoneId);
  const {
    data: routes,
    isLoading: isRoutesLoading,
    error: routesError,
  } = useRoutes(unwrappedParams.zoneId);

  const [selectedTier, setSelectedTier] = useState<Enums<"class">>("d");

  // Handle loading states
  if (isZoneLoading || isRoutesLoading) {
    return <LoadingState />;
  }

  // Handle error states
  if (zoneError) {
    return <ErrorState message="Failed to load zone information" />;
  }

  if (routesError) {
    return <ErrorState message="Failed to load routes information" />;
  }

  if (!zone) {
    return <ErrorState message="Zone not found" />;
  }

  const canChallenge = (routeClass: "d" | "c" | "b" | "a" | "s") => {
    const tiers = ["d", "c", "b", "a", "s"] as const;
    const playerTierIndex = tiers.indexOf(selectedTier);
    const routeTierIndex = tiers.indexOf(routeClass);
    return playerTierIndex >= routeTierIndex;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Zone Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{zone.name}</h1>
          <p className="text-slate-200 max-w-2xl">{zone.description}</p>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2 text-slate-200">
              <Users className="h-5 w-5" />
              <span>{zone.total_players || 0} players</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Flag className="h-5 w-5" />
              <span>{zone.total_routes || 0} routes</span>
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
            <Select
              value={selectedTier}
              onValueChange={(value) =>
                setSelectedTier(value as typeof selectedTier)
              }
            >
              <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select your tier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s">Class S</SelectItem>
                <SelectItem value="a">Class A</SelectItem>
                <SelectItem value="b">Class B</SelectItem>
                <SelectItem value="c">Class C</SelectItem>
                <SelectItem value="d">Class D</SelectItem>
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
            {routes && routes.length > 0 ? (
              <div className="grid gap-6">
                {routes.map((route: Route) => (
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
                            {route.distance}km
                          </Badge>
                        </div>
                        <Button
                          variant="outline"
                          className={`border-white/10 ${
                            canChallenge(route.class)
                              ? "bg-white/10 hover:bg-white/20 text-white"
                              : "bg-slate-800/50 text-slate-500 cursor-not-allowed"
                          }`}
                          disabled={!canChallenge(route.class)}
                        >
                          {canChallenge(route.class) ? (
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
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-sm text-gray-400">
                            Route Leader
                          </div>
                          <div className="text-xl text-white">
                            {route.route_leader || "No leader yet"}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-sm text-gray-400">Class</div>
                          <div className="text-xl text-white">
                            Class {route.class.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/5 rounded-lg border border-white/10">
                <p className="text-slate-300">
                  No routes available in this zone
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default City;
