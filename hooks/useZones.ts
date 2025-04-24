import { Zone } from "@/lib/definitions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "@/constants/data";

export function useZones() {
  return useQuery<Zone[]>({
    queryKey: ["zones"],
    queryFn: async () => {
      const { data } = await axios.get<{ zones: Zone[] }>(API_URL.ZONES);
      return data.zones;
    },
  });
}

export function useZone(zoneId: string) {
  return useQuery<Zone>({
    queryKey: ["zone", zoneId],
    queryFn: async () => {
      const { data } = await axios.get<{ zone: Zone }>(
        `${API_URL.ZONE.replace(":zoneId", zoneId)}`
      );
      return data.zone;
    },
    enabled: !!zoneId,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
