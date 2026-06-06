# SquareOne LP

A Next.js + Tailwind landing page. Layout modeled on a B2B consulting site, built
with placeholder content so you can edit it section by section.

## Editing

Each section is its own component in `src/components/`:

| Section       | File                              |
| ------------- | --------------------------------- |
| Top nav       | `src/components/Navbar.tsx`       |
| Hero          | `src/components/Hero.tsx`         |
| Services grid | `src/components/Services.tsx`     |
| Process steps | `src/components/Process.tsx`      |
| Projects      | `src/components/Projects.tsx`     |
| Testimonials  | `src/components/Testimonials.tsx` |
| News / blog   | `src/components/News.tsx`         |
| Footer        | `src/components/Footer.tsx`       |

The page is assembled in `src/app/page.tsx` — comment out a line to drop a section.

Brand colors live in `src/app/globals.css` under `@theme inline` (`--color-brand-*`,
`--color-ink`). Change those to re-skin the whole site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

### 1. Push to GitHub
```bash
git remote add origin https://github.com/lloyd-ma-sites/squareone-lp.git
git add -A
git commit -m "Initial landing page"
git push -u origin main
```

### 2. Vercel
- Import the repo at vercel.com/new — it auto-detects Next.js, no config needed.
- Every push to `main` redeploys.

### 3. Point your GoDaddy domain
- In Vercel: Project → Settings → Domains → add your domain.
- In GoDaddy DNS, add the records Vercel shows you:
  - Apex (`yourdomain.com`): `A` record → `76.76.21.21`
  - `www`: `CNAME` → `cname.vercel-dns.com`
- DNS can take up to a few hours to propagate.
