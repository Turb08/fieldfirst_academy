# FieldFirst Academy — Landing Page + Screening Tool

Static, dependency-free. No build step — open any `index.html` in a browser, or serve the root folder with any static host.

## Structure

```
fieldfirst-academy/
├── index.html              Landing page
├── screening/
│   └── index.html          Internal candidate screening tool (/screening)
├── css/
│   └── styles.css          Shared design tokens + all base styles
├── js/
│   └── script.js           Shared: nav toggle, scroll-reveal, journey line, stat counter, form handling
└── README.md
```

## Pages

### `/` — Landing page
The public-facing academy site. Sections: hero, what we do, field training, programs, training model, journey, differentiators, founder, who it's for, employers, about, contact/enquiry form.

### `/screening` — FieldScore SA-16
Internal candidate screening scorecard. Linked from the shared nav. Three parts:
- **Part A** — Self-report (candidate rates 1–5, 8 questions, 40 pts)
- **Part B** — Role-play rubric (assessor scores live pitch, 5 criteria, 25 pts)
- **Part C** — Trial observation (scored after field day, 6 criteria, 30 pts)

Weighted total (20/40/40%) feeds a result card at the bottom with a hire band, a text breakdown, and copy/download/reset actions. The page links `../css/styles.css` and `../js/script.js` for shared tokens and nav behaviour, then adds its own scoped styles in a `<style>` block.

`noindex` meta is set — this page won't appear in search results.

## Design system

Tokens in `css/styles.css`:
- `--bg` / `--bg-elev` / `--bg-elev-2` — near-black base and two elevation steps
- `--ink` / `--ink-soft` / `--ink-faint` — white text at three opacities
- `--accent` (coral) + `--accent-2` (violet) blended into `--grad`
- `--radius-full` for pill buttons, `--radius-lg` for cards, `--radius-md` for inputs

Fonts: **Space Grotesk** + **Inter** (both pages) + **IBM Plex Mono** (screening page only).

## Things to fill in before launch

- **Academy name** — "FieldFirst Academy" is a placeholder everywhere.
- **Contact details** — phone, email, address marked `[Add ...]` in the landing page CTA and footer.
- **Social links** — footer icons point to `#`.
- **Contact form** — validates client-side only; wire `<form id="contactForm">` to your backend or email service.
- **Screening page access** — currently unprotected. Add basic auth, a token param, or move it behind your hosting provider's access rules before sharing externally.

## Browser support

CSS Grid, `background-clip: text`, `IntersectionObserver`, `prefers-reduced-motion`. All safe in current browsers.
