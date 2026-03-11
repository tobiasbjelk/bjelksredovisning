# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Swedish accounting firm ("Bjelksredovisning") single-page marketing website. All content is in Swedish.

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview production build locally

## Tech Stack

- **Astro 6** (static site, single `index.astro` page)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (configured in `astro.config.mjs`)
- **TypeScript** with strict config extending `astro/tsconfigs/strict`
- Node >= 22.12.0

## Architecture

Single-page site with anchor-based navigation (#hem, #tjanster, #om-oss, #kontakt).

### Content System

Uses Astro Content Collections (`src/content.config.ts`) with two collections:

- **`site`** — loaded from `src/data/site.json` (a JSON array). Contains hero, about, and contact data as separate entries keyed by `id`. Components look up entries by id (e.g., `siteData.find(entry => entry.id === "hero")`).
- **`tjanster`** — loaded via glob from `src/data/tjanster/*.md`. Each markdown file has frontmatter: `title`, `description`, `icon` (emoji), `order` (number for sorting). Sorted by `order` in the Tjanster component.

### Custom Theme Colors

Defined in `src/styles/global.css` using Tailwind 4 `@theme` directive:
- `brand-light` (#f0f9ff), `brand-accent` (#38bdf8), `brand-accent-dark` (#0ea5e9)

### Layout

- `src/layouts/Layout.astro` — base HTML layout with `lang="sv"`, accepts optional `title` and `description` props
- `src/pages/index.astro` — assembles all section components in order
- `src/components/` — one component per page section (Navbar, Hero, Tjanster, OmOss, Kontakt, Footer)

### Client-Side JS

Minimal — only the mobile hamburger menu toggle in `Navbar.astro` (inline `<script>` tag).
