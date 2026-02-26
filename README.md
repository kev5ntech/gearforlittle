# Gear for Little

Expert baby gear reviews, comparisons, and buying guides.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) (hybrid/SSG output) |
| CMS | [Keystatic](https://keystatic.com) (git-based, local mode) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) (Vite plugin) |
| Content | MDX via `@astrojs/mdx` |
| Admin UI | React (required by Keystatic) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

- Site: http://localhost:4321
- Keystatic CMS admin: http://localhost:4321/keystatic

### Build

```bash
npm run build
```

Static output is written to `dist/`.

### Preview built site

```bash
npm run preview
```

## Project Structure

```
gearforlittle/
├── public/
│   ├── images/
│   │   ├── posts/          # Hero images for blog posts
│   │   └── products/       # Product images
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── posts/          # Blog post MDX files
│   │   ├── products/       # Product YAML files
│   │   └── comparisons/    # Comparison MDX files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── keystatic/      # Keystatic admin UI (SSR)
│   │   └── api/keystatic/  # Keystatic API routes (SSR)
│   └── styles/
│       └── global.css      # Tailwind 4 @theme configuration
├── astro.config.mjs
├── keystatic.config.ts
└── tsconfig.json
```

## Content Collections

### Posts (`src/content/posts/`)

Blog articles. Fields:
- `title` / `slug` — auto-slug from title
- `description` — meta description
- `publishDate` / `updatedDate`
- `author`
- `category` — strollers | car-seats | monitors | cribs | feeding | carriers | diaper-bags | travel | guides | registry
- `featured` — boolean
- `affiliateDisclosure` — boolean (default `true`)
- `heroImage` / `heroImageAlt`
- `content` — MDX body

### Products (`src/content/products/`)

Product entries. Fields:
- `name` / `slug` — auto-slug from name
- `brand`, `category`, `price`, `rating` (1–5)
- `affiliateUrl`, `amazonUrl`
- `image` / `imageAlt`
- `pros` / `cons` — arrays of strings
- `verdict`
- `isBestPick` — boolean

### Comparisons (`src/content/comparisons/`)

Head-to-head product comparisons. Fields:
- `title` / `slug`
- `product1` / `product2` — references to products collection
- `winner`
- `content` — MDX body

## Tailwind Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-500` | `#0D9488` | Warm teal — CTAs, links, brand |
| `secondary-500` | `#1E3A5F` | Soft navy — headings, footer |
| `accent-500` | `#F59E0B` | Warm amber — highlights, badges |
| `neutral-*` | Gray scale | Text, borders, backgrounds |

Use via Tailwind utilities: `text-primary-500`, `bg-secondary-600`, `border-accent-400`, etc.

## Production Deployment

The site uses `output: 'hybrid'` — content pages are statically pre-rendered (SSG), while Keystatic admin routes remain server-rendered. For production builds, add your target adapter:

```bash
# Netlify
npx astro add netlify

# Vercel
npx astro add vercel

# Cloudflare Pages
npx astro add cloudflare

# Self-hosted (Node)
npx astro add node
```

> **Note:** The Keystatic admin UI at `/keystatic` is intended for local development (git-based workflow). For team editing, consider switching to Keystatic's GitHub storage mode — see [Keystatic docs](https://keystatic.com/docs/github-mode).

## Affiliate Disclosure

This site uses affiliate links. All earnings help fund independent research. The `affiliateDisclosure` flag on each post controls whether a disclosure notice is shown.
