# 🏃‍♂️ Strivyx

**Strivyx** is a competitive running platform powered by Strava that transforms real-world routes into ranked battlegrounds. Runners compete weekly to become the **Route Leader** of each zone by submitting their best performance. It's not just about participation — it's about conquering territory through skill, consistency, and heart.

---

## 🚀 Features

### 🔹 Strava-Integrated Challenges

- Secure login via Strava OAuth2
- Fetch recent activities and manually submit runs
- Validates distance, route match, and pace using GPS and Turf.js

### 🔹 Zone-Based Competition

- Real-world running tracks become competitive zones
- Weekly challenge slots with limited entries per zone
- Fastest valid run is crowned **Route Leader** of that week

### 🔹 Route Leader Title System

- Each zone has only **one title per week**: `Route Leader`
- Previous titleholders get a **bronze crown badge** on their profile
- Crown count is shown as `👑xN` to track zone dominance history
- No indefinite reigns — every leader must defend their title weekly

### 🔹 Tier-Based Matchmaking

- Runners are grouped into tiers (D → S)
- You can only compete in challenges for your current tier
- Tier is auto-assigned based on pace, completion rate, and challenge results

### 🔹 PvP Challenges

- Directly challenge another runner in the same or higher tier
- Select an official route and compete head-to-head
- System declares the winner based on time, route completion, and validation rules
- PvP history is shown on your profile

### 🔹 Anti-Cheat & Validation

- Route matching via polyline decoding + Turf.js
- Suspicious runs flagged (e.g., shortcutting, pace inconsistency)
- System ensures fairness and consistency for all competitors

---

## 💡 What Makes Strivyx Unique?

- Built around **territorial competition** instead of passive logging
- Clear and **singular leaderboard title**: Route Leader
- Promotes **weekly participation and redemption arcs**
- Avoids “gatekeeping” by resetting crowns every week
- Tracks personal dominance history visually (`👑x12`, `👑x3`, etc.)
- Tier-based matchmaking keeps runners challenged at their level

---

## 🧱 Tech Stack

| Layer       | Tech                                   |
| ----------- | -------------------------------------- |
| Frontend    | Next.js, Tailwind CSS, shadcn/ui       |
| Backend     | Supabase (PostgreSQL, Auth)            |
| Integration | Strava API (OAuth2, activity:read)     |
| Geospatial  | Turf.js, @mapbox/polyline              |
| Scheduling  | Vercel Cron or Supabase Edge Functions |

---

## 📦 Roadmap

- [x] Strava login and activity fetch
- [x] Zone creation and challenge slot system
- [x] Weekly evaluation and Route Leader selection
- [x] PvP tier-based head-to-head system
- [x] Tier evaluation and progression
- [ ] Public leaderboard and profile history (👑xN)
- [ ] Admin tools for tester management (`X-Tier`)
- [ ] Optional AI route trust scoring (future)

---

## 🧪 Current Status

**Private Alpha**  
We’re actively testing Strivyx with a closed group of early runners and testers. Want in? Contact us below.

---

## 📬 Contact

- **Project Lead**: Saint Salad
- **Email**: hello@strivyx.app _(placeholder)_
- **Live Preview**: [strivyx.vercel.app](https://strivyx.vercel.app)
