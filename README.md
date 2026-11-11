# Canto Violation Solutions

Marketing site for a pre-launch NYC building-violation resolution practice, built
from the research brief in `raw messy data/info.md`.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · zero runtime
dependencies beyond the framework.

```bash
npm install
npm run dev      # http://localhost:3000
```

**Before doing anything else, read [`ASSETS-NEEDED.md`](./ASSETS-NEEDED.md).** It
lists every photograph to request from the owner, every business fact the site
cannot state yet, and the one engineering task that blocks launch (the contact
form does not deliver anywhere).

---

## The design problem, and the shape of the answer

This business has no reviews, no listings, no press, no photography, and no
years-in-business. Every conventional trust device is unavailable.

But the visitor arrives in a specific state: they are holding a government notice
with a deadline and a fine, and they do not understand it. So the trust engine
here is **demonstrated command of the subject** — the site earns credibility by
explaining the thing that is scaring you better than anyone else does.

That makes the violation-type content the backbone of the site rather than a
footnote, and it makes the home page a teaching tool rather than a pitch. The
hero renders the notice itself and reads it for you, and the page only asks for
anything once it has already been useful.

### Visual direction

Deep evergreen, ivory, and charcoal form the Canto palette. The header and
footer use the supplied Canto wordmark on ivory.

| Token | Value | Role |
|---|---|---|
| `ink` / `ink-700` | `#12361a` `#45634c` | Evergreen for headings, heroes, and primary actions |
| `body` | `#252d28` | Charcoal for body copy, the utility bar, and the footer |
| `muted` / `dim` | `#515d53` `#d5dfd1` | Secondary text on light and dark surfaces |
| `rule` / `mist` / `paper` | `#cdd5ca` `#e9ede5` `#f7f5ef` | Dividers, pale sage panels, and ivory pages |
| `signal` / `signal-300` | `#b4232a` `#ffb3ae` | Urgent information on light and dark surfaces |
| `accent` / `accent-300` | `#386146` `#b5c9ad` | Links and structural emphasis on light and dark surfaces |
| `focus` | `#70816c` | Keyboard focus ring |

**Type.** Archivo for display, set heavy (620) and tight (`-0.035em`); Public
Sans for body — the U.S. Web Design System typeface, on-subject for a civic
practice; IBM Plex Mono for violation numbers and field labels. The display face
is deliberately a **grotesque, not a serif**: warm neutrals plus a high-contrast
display serif is the most over-produced look in circulation, and the grotesque is
what keeps this palette reading modern rather than trad-editorial.

**Contrast is verified, not assumed.** A DOM audit walks every text element on
every route, resolves its true computed background through the ancestor chain,
and checks the ratio against the AA threshold for its size and weight — 1,616
elements across 9 routes at three viewport widths, zero failures. The same pass
checks every route for horizontal overflow at 390/768/1280.

The site's structural device is the **form field**: mono uppercase label, hairline
rule, value below. It encodes "this is a record" rather than decorating.

### The home page

Three set pieces, each specific to this business rather than to a layout:

1. **The notice anatomy** (`components/notice-anatomy.tsx`) — the hero renders an
   *illustration* of a violation notice and annotates it. Hovering or focusing an
   annotation lights the matching field; switching agency re-issues the whole
   document. By the time a visitor reaches the CTA they already know what a
   violation number is and where to find it — which is exactly what the intake
   form asks for. It carries a visible SAMPLE stamp and obviously synthetic
   values; it must never be made to resemble a genuine issued document.
2. **The escalation line** (`components/escalation-clock.tsx`) — one continuous
   rail that visibly worsens left to right, from notice served through to
   judgment and blocked sale. Owners consistently don't know what an unresolved
   violation *becomes*, and that is why matters sit. States no day counts and no
   dollar figures: both vary by agency and class, and inventing them would be
   the genuinely harmful thing to do.
3. **The agency index** (`components/agency-index.tsx`) — a dense reference table
   (code / matter / issuer / hearing / how it closes), replacing what was nine
   identical "Read more →" cards. Density is the point: someone holding a notice
   wants to scan for their agency and see in one glance whether a hearing is
   involved.

---

## Architecture

```
src/
  app/
    page.tsx                  home — notice anatomy, escalation line, index
    services/page.tsx         hub, grouped by how visitors think about them
    services/[slug]/page.tsx  9 static pages, one per violation type
    process/page.tsx          the 5-stage engagement
    about/page.tsx            the owner
    faq/page.tsx              questions + agency acronym decoder, FAQPage JSON-LD
    contact/page.tsx          intake form
    sitemap.ts robots.ts not-found.tsx
  content/                    ← the data layer. Edit copy HERE, not in pages.
    site.ts                   name, contact (PLACEHOLDERs), service area, nav
    services.ts               9 services + categories
    notice.ts                 sample notice fields, annotations, escalation
    process.ts                the 5 stages
    faq.ts                    questions, grouped
    media.ts                  image manifest + the shot list to request
  components/                 reusable UI; ui/index.tsx holds the primitives
  lib/actions.ts              intake server action — DELIVERY NOT WIRED UP
public/media/                 locally-generated SVG placeholders (no CDN)
```

All 19 routes are statically generated. Client components are limited to the
mobile nav, the notice anatomy, the FAQ accordion, the scroll reveal, and the
intake form.

### Content provenance

`info.md` found three overlapping-but-different service lists across three
sources. This site uses the **union** of all three, and every entry in
`services.ts` carries a `source` field recording where it came from. Nothing
factual about the business is invented; anything unverified is either marked
`PLACEHOLDER` in the UI or listed in `ASSETS-NEEDED.md`.

---

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
