import { Route } from "@/lib/definitions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "@/constants/data";

export function useRoutes(zoneId: string) {
  return useQuery<Route[]>({
    queryKey: ["routes", zoneId],
    queryFn: async () => {
      const { data } = await axios.get<{ routes: Route[] }>(
        `${API_URL.ROUTES.replace(":zoneId", zoneId)}`
      );
      return data.routes;
    },
  });
}

export function useRoute(zoneId: string, routeId: string) {
  return useQuery<Route>({
    queryKey: ["route", zoneId, routeId],
    queryFn: async () => {
      const { data } = await axios.get<{ route: Route }>(
        `${API_URL.ROUTE.replace(":zoneId", zoneId).replace(
          ":routeId",
          routeId
        )}`
      );
      return data.route;
    },
    enabled: !!zoneId,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
