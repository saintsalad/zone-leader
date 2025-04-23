// stores/useUserStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@supabase/supabase-js';

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  lastUpdated: number | null;
  setLastUpdated: (ts: number) => void;
  clearUser: () => void;
}

const EXPIRATION_MINUTES = 10;

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      lastUpdated: null,
      setUser: (user) => set({ user, lastUpdated: Date.now() }),
      setLastUpdated: (ts) => set({ lastUpdated: ts }),
      clearUser: () => set({ user: null, lastUpdated: null }),
    }),
    {
      name: 'zone-user-storage',
      version: 1,
      // Rehydration logic
      onRehydrateStorage: () => (state) => {
        if (!state?.lastUpdated) return;

        const now = Date.now();
        const diffMinutes = (now - state.lastUpdated) / 1000 / 60;

        if (diffMinutes > EXPIRATION_MINUTES) {
            // Clear stale data
            console.log("🍪 clear")
            state.clearUser();
        }else{
            console.log("🍪 not expired")
        }
      },
    }
  )
);
