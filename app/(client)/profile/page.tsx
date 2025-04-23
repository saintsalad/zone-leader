"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/utils/store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getStravaAuthUrl } from "@/utils/strava";

// Static Strava athlete data for demonstration
const stravaData = {
  firstname: "John",
  lastname: "Doe",
  profile:
    "https://dgalywyr863hv.cloudfront.net/pictures/athletes/default-avatar.png",
  stats: {
    totalRuns: 156,
    totalDistance: 1250.5,
    totalTime: "125h 30m",
    averagePace: "5:30",
  },
};

const Profile = () => {
  const { user } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {user ? (
        <div className="container mx-auto px-4 pt-20">
          <div className="bg-gray-900 rounded-lg shadow-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div
                className="relative w-32 h-32 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${stravaData.profile})` }}
                // alt="Profile"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-100">
                  {stravaData.firstname} {stravaData.lastname}
                </h1>
                <p className="text-gray-400 mt-2">{user.email}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Total Runs</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {stravaData.stats.totalRuns}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Total Distance</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {stravaData.stats.totalDistance}km
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Total Time</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {stravaData.stats.totalTime}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Average Pace</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {stravaData.stats.averagePace}/km
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Link href={getStravaAuthUrl()}>
                <Button>Connect to Strava</Button>
              </Link>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Logout</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gray-900 border-gray-800">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-gray-200">
                      Are you sure you want to logout?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                      You will need to login again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleLogout}
                      disabled={isLoading}
                      className="bg-red-600 text-white hover:bg-red-700"
                    >
                      {isLoading ? "Logging out..." : "Logout"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-16 text-center">Loading profile...</div>
      )}
    </>
  );
};

export default Profile;
