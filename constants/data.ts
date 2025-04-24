import { LayoutDashboard, LandPlot, Route, Users } from "lucide-react";
import { NavItem } from "@/lib/definitions";
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/master/",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    title: "Zones",
    href: "/master/zones",
    icon: LandPlot,
    label: "Zones",
  },
  {
    title: "Routes",
    href: "/master/routes",
    icon: Route,
    label: "Routes",
  },
  {
    title: "Players",
    href: "/master/players",
    icon: Users,
    label: "Players",
  },
];

export const ROUTE_ID_PATTERN = [
  {
    zone_id: "quezon-city",
    routes: [
      {
        name: "UP Oval Trail",
        route_id: "qc000",
      },
      {
        name: "Quezon City Memorial Circle",
        route_id: "qc001",
      },
    ],
  },
  {
    zone_id: "taguig",
    routes: [
      {
        name: "Track 30th",
        route_id: "tg000",
      },
    ],
  },
];

const API_BASE_URL = "/api/v1";
export const API_URL = {
  ZONES: `${API_BASE_URL}/zones`,
  ZONE: `${API_BASE_URL}/zones/:zoneId`,
  ROUTES: `${API_BASE_URL}/zones/:zoneId/routes`,
  ROUTE: `${API_BASE_URL}/zones/:zoneId/routes/:routeId`,
  PLAYERS: `${API_BASE_URL}/players`,
};
