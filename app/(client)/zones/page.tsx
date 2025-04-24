"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Users, Timer } from "lucide-react";
import Link from "next/link";
import { useZones } from "@/hooks/useZones";

function Zones() {
  const [searchQuery, setSearchQuery] = useState("");
  //const [selectedDistance, setSelectedDistance] = useState<string | null>(null);

  // const distances = ["5km", "10km", "20km"];

  // const filteredZones = zones.filter((zone) => {
  //   const matchesSearch = zone.city
  //     .toLowerCase()
  //     .includes(searchQuery.toLowerCase());
  //   return matchesSearch;
  // });

  const {
    data: zones,
    isLoading: isZonesLoading,
    isError: isZonesError,
  } = useZones();

  if (isZonesLoading) {
    return <div className="pt-16">Loading...</div>;
  }

  if (isZonesError) {
    return <div className="pt-16">Error loading zones</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 p-6 pt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Metro Manila Running Zones
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Discover running routes across Metro Manila. Choose from various
            distances and join other players in your area and conquer the
            routes.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search zones by city..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {/* {distances.map((distance) => (
              <Button
                key={distance}
                variant={selectedDistance === distance ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSelectedDistance(
                    selectedDistance === distance ? null : distance
                  )
                }
                className={
                  selectedDistance === distance
                    ? "bg-blue-600"
                    : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                }
              >
                {distance}
              </Button>
            ))} */}
          </div>
        </div>

        {/* Zone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {zones &&
            zones.map((zone) => (
              <Link href={`/zones/${zone.zone_id}`} key={zone.id}>
                <Card
                  key={zone.id}
                  className="bg-white/10 border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      {zone.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-200">
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4 text-blue-400" />
                        <span>{zone.total_routes} routes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span>{zone.total_players} players</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {/* {zone.routes.map((route) => (
                        <Badge
                          key={route.distance}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-200"
                        >
                          {route.distance} ({route.count})
                        </Badge>
                      ))} */}
                        N/A
                      </div>
                    </div>
                    <div className="pt-2">
                      <Badge
                        variant="outline"
                        className="border-white/20 text-gray-200"
                      >
                        {/* {zone.area} */} N/A
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Zones;
