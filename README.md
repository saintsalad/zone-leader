# 🏃‍♂️ Zone Leader

**Zone Leader** is a competitive running platform powered by Strava that turns real-world routes into ranked battlegrounds. Runners compete to claim territory, rise through skill-based tiers, and earn prestigious titles like **Zone Leader**, **Zone Master**, and **Zone Champion** by consistently proving their performance over time.

## 🚀 Features

### 🔹 Strava-Integrated Challenges

- Secure login via Strava OAuth2.
- Auto-fetch recent activities and manually submit challenges.
- Clean validation using GPS data and route matching (Turf.js).

### 🔹 Zone-Based Competition

- Real-world routes act as “zones” runners can compete on.
- Weekly challenges with limited slots to avoid spam.
- System auto-selects winners based on best time or pace.

### 🔹 Tier System

- Runners are placed into dynamic skill tiers (D → S).
- Compete only within your tier to keep it fair and motivating.
- `X-Tier` for early testers and special invitees.

### 🔹 PvP Duels

- Challenge other runners directly within or above your tier.
- Choose the route, submit runs, and let the system declare a winner.
- Built-in cooldown and fair-play enforcement.

### 🔹 Streak-Based Titles

- 1 week win = `Zone Leader`
- 4 consecutive wins = `Zone Master` (requires re-performance to prevent gatekeeping)
- 12-week streak = `Zone Champion` (permanent badge and profile recognition)

### 🔹 Anti-Cheat & Validation

- Path validation via Turf.js + polyline decoding
- Suspicious runs flagged based on distance, pace, and GPS match
- Future-ready for AI-based trust scoring

### 🔹 Recognition & Growth

- XP system for wins, streaks, and successful challenges
- Public profiles showing zones won, PvP history, and tier
- Designed to tell your personal progression arc through stats

---

## 🧠 What Makes It Unique?

- Combines real-world fitness with the **structure of ranked gaming**.
- Adds meaningful context to Strava data through **territory control** and **performance arcs**.
- Designed to prevent gatekeeping and encourage **continual effort**, not just one-time wins.
- Every user has a chance to rise — it’s built for **rivalries, redemption, and rank climbing**.

---

## 📦 Tech Stack

- **Frontend**: Next.js (App Router), TailwindCSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth), optional FastAPI for ML
- **Geospatial**: Turf.js, @mapbox/polyline
- **Integrations**: Strava API (OAuth2, activity:read)
- **Deployment**: Vercel

---

## 🧪 Currently In:

**Private Alpha**  
We are actively testing with select runners. Want early access? Reach out via email or DM.

---

## 📬 Contact

- **Project Lead**: Saint Salad
- **Website**: [zone-leader.vercel.app](https://zone-leader.vercel.app)

---

## ✅ Roadmap (May 2025)

- [x] MVP: Login, challenge, leaderboard
- [x] Tier system & XP
- [x] Route validation & anti-cheat
- [ ] PvP matchups & duel logs
- [ ] Route Master requalification logic
- [ ] Zone Champion badge system
- [ ] AI-based trust scoring (Frechet/DTW)

---

## 📄 License

MIT – free for personal use or contribution. Contact for commercial interest.
