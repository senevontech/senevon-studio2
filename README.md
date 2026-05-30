# SNV Studio 3

Futuristic, storytelling-first studio portfolio scaffold built with Next.js.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Component-driven section architecture (3D-ready placeholders)

## Run

```bash
npm install
npm run dev
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
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
```

## Current Phase

Phase 1 is implemented:

- Visual foundation and design tokens
- Storytelling homepage structure
- Reusable section shell for fast expansion
- Placeholder slot reserved for upcoming React Three Fiber hero scene

## Next Phase

1. Add `@react-three/fiber` + `@react-three/drei`.
2. Integrate GSAP scroll timelines.
3. Build `/work` + `/work/[slug]` pages with media-rich case studies.
