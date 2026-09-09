# FieldFirst Academy — Landing Page

A static, dependency-free landing page. No build step — open `index.html` in a browser, or serve the folder with any static host.

## Structure

```
fieldfirst-academy/
├── index.html        All markup and content
├── css/
│   └── styles.css    Design tokens + all styles
├── js/
│   └── script.js      Nav, scroll-reveal, journey line, stat counter, form handling
└── README.md
```

## Design system

Dark, single-canvas theme — no alternating colored section blocks. Tokens live at the top of `styles.css`:

- `--bg` / `--bg-elev` / `--bg-elev-2` — near-black base and two elevation steps for cards and panels
- `--ink` / `--ink-soft` / `--ink-faint` — white text at three opacities
- `--accent` (warm coral) and `--accent-2` (cool violet) — blended into `--grad`, used for buttons, gradient text, glow rings, and the connecting lines
- `--radius-full` (999px) for pill buttons, `--radius-lg` for cards, `--radius-md` for inputs

Fonts: **Space Grotesk** for headings, **Inter** for body text, loaded from Google Fonts.

## Animation

- `[data-reveal]` elements fade + rise into view on scroll (`IntersectionObserver` in `script.js`), with optional stagger via a `--d` CSS variable on siblings
- Two looping marquee rows beneath the hero (pure CSS `@keyframes`, no JS)
- A gradient orb + two orbiting rings in the hero, drifting/spinning continuously
- The training-journey connector line draws itself in once scrolled into view
- The founder's "30 years" stat counts up once in view
- All of the above respect `prefers-reduced-motion: reduce` — animations are disabled and elements simply appear in place

## Things to fill in before launch

- **Academy name** — "FieldFirst Academy" is a placeholder. Update the `<title>`, the two `.logo` blocks (header + footer), and the footer copyright line.
- **Contact details** — phone, email and address are marked `[Add ...]` in the final CTA section and footer.
- **Social links** — the three footer icons point to `#`; swap in real profile URLs.
- **Photography** — sections currently rely on abstract gradient/line-icon visuals rather than photos. Drop in real training/field photography where you have it.
- **Contact form** — `js/script.js` validates the form and shows a success state client-side only; it doesn't send anywhere yet. Wire the `<form id="contactForm">` submit handler up to your email service, form backend, or CRM of choice.

## Browser support

Plain HTML/CSS/JS — no framework, no build tooling. Uses CSS Grid, `background-clip: text`, `IntersectionObserver`, and `prefers-reduced-motion`, all safe in current browsers.
