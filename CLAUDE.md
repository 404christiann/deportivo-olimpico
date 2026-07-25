# Agent Handoff

## Status

This is the Onzio sales-preview snapshot for **Deportivo Olimpico** in Guadalupe, California. It is sample-only and has been pushed to GitHub at `git@github.com:404christiann/deportivo-olimpico.git` on `main`.

Current pushed baseline: `399aef8` `Open version selector by default`.

Do not deploy to Vercel, send a live deployment, remove `noindex` / `nofollow`, or present this as a production system unless Christian explicitly approves that next step.

## Active Prospect

- Club: Deportivo Olimpico
- Location: Guadalupe, CA / Central Coast
- Level: UPSL Premier Division
- Website: https://deportivoolimpico.com/
- Instagram: https://www.instagram.com/deportivoolimpicoca
- YouTube: https://youtube.com/@DeportivoOlimpicoCA
- Tryout form now used in the app: https://docs.google.com/forms/d/e/1FAIpQLSeAHgyGh3TIcwSbB0unqJNWD6QjEC9FSlmDRGsfJAaHHJ6y8w/viewform

## Current Public Experience

- Nav tabs: Home, About, Roster, Schedule, Store, Contact.
- Schedule is a dropdown trigger, not a page link.
  - `Matches` links to `/schedule`.
  - `Tryouts` links to `/tryouts`.
- Contact links to `/sponsors`, which combines sponsors and the contact form.
- Homepage hero uses `Small town.` in white and `Big heart.` in `#b18b1e`, with desktop and mobile bottom-gap fixes.
- Header affiliations show US Soccer, FIFA, and UPSL marks, switching white/color variants with transparent/solid header state.
- About page is Rose City-inspired, uses `historic_team.jpg`, and includes the caption concept: `A Name Built On History. Est.1968 Deportivo Olimpico Guadalupe California`.
- Roster cards and profile modals show nationality flags.
- Schedule page uses a Rose City-inspired fixtures view, with mobile spacing fixes and a cleaned-up month/season control.
- Store page and home shop section use the supplied 2026 home/away jersey images, including front/back product views.
- Sponsors use the supplied white sponsor logos in the carousel and footer.
- Tryouts page is brief, Rose City-inspired, uses `OD_together_pic.jpg`, and has admin-editable dates/content.

## Current Admin Experience

- Admin preview remains sample-only and client-side.
- Admin `View website` is a clear button on desktop sidebar.
- Mobile admin header includes a compact `View site` button.
- Public mobile menu includes a white `Open admin preview` button.
- Tryouts are editable through `/admin/tryouts`.
- Standings, schedule, store, sponsors, roster, stats, analytics, seasons, and content controls remain tier-gated Pro surfaces where applicable.

## Tier Behavior

- Pro opens by default.
- Starter is available with `?tier=starter`.
- Pro is available with `?tier=pro`.
- Concept version selector opens by default on initial load.
- Tier state is URL-backed in `src/components/tier/TierProvider.tsx`.
- Starter hides Pro-only public/admin surfaces such as Store, Contact/Sponsors, Stats, Analytics, Standings, Seasons, and richer profile controls.
- Verified Pro to Starter and Starter back to Pro on desktop and mobile after the selector was changed to open by default.

## Visual System

- Palette:
  - Primary: `#264a29`
  - Secondary/dark: `#171a0f`
  - Detail/accent: `#b18b1e`
- Display/headings: Archivo, self-hosted at `src/app/fonts/archivo-variable.ttf`.
- Body/UI: Inter.
- Nav tab text: Archivo.
- Avoid introducing broad palette shifts or unrelated redesigns; most recent changes were small, screenshot-driven polish fixes.

## Assets

- Crest: `public/prospect/deportivo-olimpico-logo.png`
- Deportivo assets base:
  `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/assets/deportivoOlimpicoAssets`
- League marks base:
  `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/leagueLogos`
- Flags base:
  `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/flags`
- Sponsor assets are under:
  `deportivoOlimpicoAssets/sponsors`
- Intake record:
  `/Users/christianalcala/Downloads/onzioProspects/deportivo-olimpico/intake/PROSPECT_INTAKE.yaml`

## Commands

```bash
npm run dev
npm run validate
```

If a dev server is already running, use its existing port instead of killing it unless Christian asks. During the last verification, port `3000` was already running for this repo.

## Verification Notes

Latest `npm run validate` passed: `next typegen`, TypeScript, ESLint, production build, and template validation.

Temporary Playwright verification also passed:

- Desktop tier switch: Pro default, switch to Starter, Store/Contact disappear, `/store?tier=starter` gates, switch back to Pro reveals store content.
- Mobile tier switch at 390px: mobile Pro menu shows Store/Contact, Starter hides them, `/store?tier=starter` gates, switch back to Pro reveals store content.

Temporary Playwright files were removed after verification. The repo was clean after that check.

## Boundaries

- No authentication, database, persistence, payments, tracking, API routes, or production operations.
- Sample roster, staff, fixtures, results, statistics, standings, products, and sponsors are fictional or preview-only unless Christian replaces them.
- The app is a static concept preview, not a production CMS.
- Keep changes scoped to this snapshot unless Christian explicitly asks to update the master/template.
- Use `apply_patch` for manual edits and preserve unrelated user changes.
