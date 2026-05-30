# SNV Studio 3

Futuristic, storytelling-first studio portfolio scaffold built with Next.js + Supabase.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase (BaaS backend, no custom Node API required)
- React Three Fiber + drei (3D scene layer)
- GSAP (timeline/scroll layer)

## Run

```bash
npm install
npm run dev
```

Set env vars first:

```bash
cp .env.example .env.local
```

## Render Deploy

- Node version: `20.x` (repo pins this via `package.json` engines and `.nvmrc`)
- Build command: `npm run build` (do not use `npm install && npm run build`)
- Start command: `npm run start`
- Optional blueprint: [`render.yaml`](./render.yaml)

## Project Structure

```text
app/
  about/page.tsx
  contact/page.tsx
  layout.tsx
  not-found.tsx
  page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  globals.css
components/
  3d/
    HeroScene.tsx
  layout/
    SiteHeader.tsx
    SiteFooter.tsx
  sections/
    HeroSection.tsx
    IdentitySection.tsx
    CapabilitiesSection.tsx
    WorkSection.tsx
    ProcessSection.tsx
    CTASection.tsx
  ui/
    SectionShell.tsx
lib/
  content.ts
  data/
    projects.ts
  supabase/
    browser.ts
    config.ts
    server.ts
supabase/
  schema.sql
types/
  project.ts
```

## Architecture Notes

- Data fetch for primary portfolio content runs on server components.
- Supabase access is isolated in `lib/supabase/*`.
- `lib/data/*` owns query logic and fallback behavior.
- `components/*` stay presentation-focused.

## Supabase

Create `projects` table:

```sql
-- run supabase/schema.sql
```

Required columns:

- `slug` (unique, text)
- `name` (text)
- `category` (text)
- `impact` (text)
- `summary` (text, optional)
- `is_featured` (boolean)
- `rank` (integer, optional)

## Current Progress

1. Storytelling homepage scaffold complete.
2. Hero 3D scene scaffold live.
3. `/work`, `/work/[slug]`, `/about`, `/contact` routes scaffolded.
4. Supabase-backed project queries with static fallback implemented.

## Next Step

1. Bind GSAP scroll timelines to hero camera and section transitions.
2. Add Supabase-backed contact submissions.
3. Add content tables for testimonials, process blocks, and capability pods.
