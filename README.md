# FieldFirst Academy — Landing Page

A static, dependency-free landing page. No build step — open `index.html` in a browser, or serve the folder with any static host.

## Structure

```
fieldfirst-academy/
├── index.html        All markup and content
├── css/
│   └── styles.css    Design tokens + all styles
├── js/
│   └── script.js      Mobile nav, scroll reveal, stat counter, form handling
└── README.md
```

## Design system

Colors are intentionally limited to five values, defined at the top of `styles.css`:

- `--cool-900` / `--cool-100` — the cool (navy / pale grey) base used for text, backgrounds and structure
- `--warm-600` / `--warm-200` — the warm (amber) accent, reserved for calls to action, key numbers, and highlights
- `--white`

Everything else (borders, soft text, hover states) is derived from these five with opacity, so changing a token updates the whole page.

Fonts: **Big Shoulders Display** for headings, **Inter** for body text, loaded from Google Fonts via `<link>` tags in `index.html`.

## Things to fill in before launch

- **Academy name** — "FieldFirst Academy" is a placeholder. Update the `<title>`, the two `.logo` blocks (header + footer), and the footer copyright line.
- **Contact details** — phone, email and address are marked `[Add ...]` in the final CTA section and footer.
- **Social links** — the three footer icons point to `#`; swap in real profile URLs.
- **Photography** — the hero, founder and "why field training matters" areas currently use custom line-icon illustrations rather than photos. Drop in real training/field photography where you have it.
- **Contact form** — `js/script.js` validates the form and shows a success state client-side only; it doesn't send anywhere yet. Wire the `<form id="contactForm">` submit handler up to your email service, form backend, or CRM of choice.

## Browser support

Plain HTML/CSS/JS — no framework, no build tooling. Uses CSS Grid, `IntersectionObserver`, and `prefers-reduced-motion`, all safe in current browsers.
