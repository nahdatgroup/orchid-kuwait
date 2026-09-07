# Orchid International — Website

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React. Bilingual
(English / Arabic) with full RTL support.

The site now hosts three pages behind real routes:

| Route      | Page                                                             |
| ---------- | ----------------------------------------------------------------- |
| `/`        | Group landing page — logo intro + Kuwait/Oman company selector    |
| `/kuwait`  | Orchid Company for Landscaping and Garden Maintenance (Kuwait)    |
| `/oman`    | Orchid International Trading and Contracting Company LLC (Oman)  |

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Routing

Routing is handled by a small dependency-free router at `src/lib/router.jsx`
(`BrowserRouter`, `Routes`/`Route`, `Link`, `useLocation`) rather than
`react-router-dom` — it covers exactly the three static routes this project
needs, with no extra dependency to install. If you'd rather use
`react-router-dom` directly, `npm install react-router-dom` and swap the
imports in `App.jsx` and the components that import from `src/lib/router` —
the API surface used (`Link`, `useLocation`, `BrowserRouter`, `Routes`,
`Route`) matches it.

Because routing is client-side, a production deploy needs the host
configured to serve `index.html` for unknown paths (e.g. Netlify's
`_redirects: /* /index.html 200`, Vercel's rewrites, or nginx's
`try_files ... /index.html`) so that a direct visit to `/oman` or `/kuwait`
doesn't 404.

## What to swap in before launch

1. **Oman photography** — `src/assets/oman/` currently holds the three
   photos supplied (a construction steel-frame shot, an aerial villa, and a
   grand stone building), reused across the hero slider, About, Services
   and Projects sections. Drop in real project photography with the same
   filenames (`hero-construction.jpg`, `hero-estate.jpg`,
   `about-building.jpg`) to replace them everywhere at once, or add new
   files and repoint the imports in `src/data/omanContent.js` — that's the
   only place Oman images are wired up.

2. **Oman projects & services copy** — placeholder project names
   (`Dhofar Residence`, etc.) live in `src/data/omanContent.js`
   (`getOmanProjects`); service copy lives in `src/i18n/translations.js`
   under `oman.services.items` (both `en` and `ar`).

3. **Kuwait content** — unchanged from before: `src/data/content.js` for
   images/data, `src/i18n/translations.js` for copy.

4. **Contact forms** — both the Kuwait and Oman contact forms show a
   "Thank you" confirmation on submit but don't send anywhere yet. Wire
   them up to your email service or backend of choice.

## Structure

```
src/
  lib/router.jsx        minimal Link/Routes/useLocation implementation
  pages/
    Landing.jsx          "/" — logo intro + company selector
    Kuwait.jsx           "/kuwait" — the landscaping site (formerly Home.jsx)
    Oman.jsx             "/oman" — the trading & contracting site
  components/
    Navbar, Hero, About, ...      Kuwait site's existing sections
    landing/CompanyCard.jsx       the two company-selector panels
    oman/                         Oman site's sections (Navbar, Hero,
                                   About, Services, Projects, Contact, Footer)
  data/
    content.js            Kuwait copy + image imports
    omanContent.js        Oman copy + image imports
  i18n/
    translations.js       all UI strings (en/ar), including `landing.*` and `oman.*`
    LanguageContext.jsx    language/dir state
    usePageMeta.js         sets <title> + meta description per page/language
  assets/
    oman/                  the three supplied Oman photos
```

## Notes

- Fully responsive (mobile / tablet / desktop), keyboard-focus visible,
  respects `prefers-reduced-motion`.
- The Kuwait and Oman navbars/footers each carry a small link back to `/`
  (the group landing page) so the two company sites read as one group.
- Gallery lightbox on the Kuwait page supports click-to-open, arrow-key
  navigation, and close on Esc or backdrop click.
