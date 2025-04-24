import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  Users,
  Map,
  Route,
  Activity,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

function Master() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Analytics Overview
          </h2>
          <p className="text-muted-foreground">
            Monitor your zones and player activities in real-time.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-sm text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">
            <ArrowUp className="h-4 w-4" />
            <span>23% vs last week</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Zones</CardTitle>
            <Map className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Active zones under management
                </p>
              </div>
              <div className="flex items-center space-x-1 text-green-500 text-sm bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">
                <ArrowUp className="h-3 w-3" />
                <span>4.3%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Active Players
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Current online players
                </p>
              </div>
              <div className="flex items-center space-x-1 text-red-500 text-sm bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded-lg">
                <ArrowDown className="h-3 w-3" />
                <span>2.1%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Routes</CardTitle>
            <Route className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Configured transport routes
                </p>
              </div>
              <div className="flex items-center space-x-1 text-green-500 text-sm bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">
                <ArrowUp className="h-3 w-3" />
                <span>12%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Server Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-2xl font-bold">Online</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  99.9% uptime
                </p>
              </div>
              <div className="flex items-center space-x-1 text-green-500 text-sm bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-lg">
                <span>Healthy</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-7">
        <Card className="md:col-span-4 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>
                  Player engagement across zones
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-blue-500"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-green-500"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-orange-500"></div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Placeholder for Overview component */}
          </CardContent>
        </Card>

        <Card className="md:col-span-3 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest player interactions</CardDescription>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Placeholder for RecentPlayers component */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Master;
