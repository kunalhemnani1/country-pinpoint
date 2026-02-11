# 🌍 Country Pinpoint

> Guess the country from cryptic clues, one hint at a time. Daily puzzles, 5 guesses, hardest to easiest.

A daily geography guessing game built for Reddit using [Devvit](https://developers.reddit.com/). Inspired by LinkedIn's Pinpoint, but with countries instead of categories — and a completely different dark, vibrant theme.

![Built with](https://img.shields.io/badge/React-19-blue) ![Built with](https://img.shields.io/badge/Tailwind-4-06B6D4) ![Built with](https://img.shields.io/badge/TypeScript-5-3178C6) ![Platform](https://img.shields.io/badge/Platform-Reddit%20Devvit-FF4500)

---

## How It Works

1. **A new puzzle every day** — All players get the same country to guess each day
2. **Start with the hardest clue** — Clue #1 is obscure trivia; clue #5 is an iconic giveaway
3. **5 guesses max** — Each wrong guess reveals the next (easier) clue
4. **See community stats** — After finishing, check how your performance compares to other players

### Example Progression

| Clue # | Category  | Hint |
|--------|-----------|------|
| 1      | Tradition | *"This country practices forest bathing (Shinrin-yoku) as a form of therapy"* |
| 2      | History   | *"It had a period of isolation called Sakoku lasting over 200 years"* |
| 3      | Culture   | *"Home to the world's oldest company, founded in 578 AD"* |
| 4      | Geography | *"An archipelago of nearly 7,000 islands in the Pacific Ocean"* |
| 5      | Landmark  | *"Famous for Mount Fuji and cherry blossom season"* |

> Answer: **Japan** 🇯🇵

---

## Screenshots

### Splash Screen (Feed View)
The compact card shown in the Reddit feed with game info and a "Play Now" button.

### Game Screen (Expanded View)
Dark-themed game UI with revealed clues, autocomplete country search, guess history, and result screen with community stats.

---

## Tech Stack

| Layer     | Technology |
|-----------|------------|
| Frontend  | React 19, Tailwind CSS 4 |
| Backend   | Hono, Node.js 22 (serverless) |
| Database  | Redis (Devvit built-in) |
| Build     | Vite, TypeScript 5 |
| Platform  | Reddit Devvit |
| Linting   | ESLint, Prettier |

---

## Project Structure

```
src/
├── client/                  # Frontend (runs in Reddit iframe)
│   ├── splash.tsx           # Inline feed view — "Play Now" entry
│   ├── game.tsx             # Expanded game view
│   ├── index.css            # Custom animations & theme
│   ├── components/
│   │   ├── ClueCard.tsx     # Difficulty-colored clue display
│   │   ├── CountrySearch.tsx # Autocomplete country input
│   │   ├── GuessHistory.tsx # Visual guess tracker (✓/✗)
│   │   └── ResultScreen.tsx # Win/lose screen with stats
│   └── hooks/
│       └── usePinpoint.ts   # Game state management hook
├── server/                  # Backend (Devvit serverless)
│   ├── index.ts             # Hono app entry point
│   ├── core/
│   │   └── post.ts          # Reddit post creation
│   └── routes/
│       ├── api.ts           # /api/init & /api/guess endpoints
│       ├── menu.ts          # Mod menu actions
│       ├── forms.ts         # Form handlers
│       └── triggers.ts      # App install trigger
└── shared/                  # Shared between client & server
    ├── api.ts               # Type definitions
    ├── puzzles.ts           # 50 country puzzles (5 clues each)
    └── countries.ts         # Country list for autocomplete
```

---

## Getting Started

### Prerequisites

- **Node.js 22+** installed
- A **Reddit account** connected to [Reddit Developers](https://developers.reddit.com/)
- Devvit CLI: `npm install -g devvit`

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/country-pinpoint.git
cd country-pinpoint

# Install dependencies
npm install

# Login to Devvit
npm run login
```

### Local Development

```bash
npm run dev
```

This runs `devvit playtest`, creating a temporary test version on a test subreddit. Changes rebuild automatically.

### Build

```bash
npm run build
```

### Type Check & Lint

```bash
npm run type-check
npm run lint
```

---

## Deployment

### 1. Upload to Reddit

```bash
npm run deploy
```

Runs type-check → lint → tests → uploads to Devvit.

### 2. Publish (make installable)

```bash
npm run launch
```

### 3. Install on a subreddit

```bash
npx devvit install <subreddit-name>
```

### 4. Create a puzzle post

Go to the subreddit → **Mod menu** → **"Create Country Pinpoint Puzzle"**

This creates a Reddit post with today's daily puzzle. All users who open it get the same country to guess.

---

## Game Mechanics

| Feature | Detail |
|---------|--------|
| **Puzzles** | 50 countries with 5 handcrafted clues each |
| **Daily rotation** | Deterministic date-based selection — no cron jobs needed |
| **Difficulty** | Clues ordered hardest → easiest (science/history → landmarks/food) |
| **Guesses** | 5 max — each wrong guess reveals the next clue |
| **Persistence** | Game state saved per-user per-post in Redis |
| **Stats** | Community guess distribution shown after completion |
| **Autocomplete** | Real-time country search with keyboard navigation |

---

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local playtest on Reddit |
| `npm run build` | Build client and server |
| `npm run deploy` | Type-check + lint + upload to Devvit |
| `npm run launch` | Deploy + publish for review |
| `npm run login` | Authenticate with Reddit |
| `npm run type-check` | Run TypeScript compiler checks |
| `npm run lint` | Run ESLint on all source files |

---

## Roadmap

- 🎮 **Multiplayer mode** — Race other players on the same clues with tiebreaker rounds
- ⏱️ **Timed mode** — 30-second countdown per clue for competitive play
- 🏋️ **Practice mode** — Unlimited puzzles outside the daily rotation
- 🖼️ **Rich hints** — Country silhouettes, flag color palettes, traditional music, food photos
- 🔥 **Streak tracking** — Consecutive-day stats with Reddit flair/badges
- 🗺️ **Continent hints** — Mini world map highlight after 2 wrong guesses
- 📝 **200+ puzzles** — Expand the pool so dailies don't repeat for 6+ months

---

## License

[BSD-3-Clause](LICENSE)
