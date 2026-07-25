# Deportivo Olimpico Onzio Preview

Independent Onzio sales-preview snapshot for **Deportivo Olimpico** in Guadalupe, California. The app is a static concept preview with a public club website and a shared-state admin preview. It does not include authentication, a database, persistence, payments, tracking, API operations, or production club operations.

## Repository

- Local path: `/Users/christianalcala/Downloads/onzioProspects/deportivo-olimpico/site`
- Remote: `git@github.com:404christiann/deportivo-olimpico.git`
- Branch: `main`
- Current pushed baseline: `399aef8` `Open version selector by default`
- Deployment: not deployed to Vercel from this task; keep `noindex` / `nofollow`

## Run Locally

```bash
npm install
npm run dev
```

The preview defaults to Pro. Use `?tier=starter` to review the Starter version and `?tier=pro` to return to Pro. The concept version selector opens by default on initial load.

## Current Scope

- Public nav: Home, About, Roster, Schedule, Store, Contact.
- Schedule is a non-clickable dropdown parent. `Matches` links to `/schedule`; `Tryouts` links to `/tryouts`.
- Contact points to `/sponsors`, combining sponsor presentation and the contact form.
- Store is a Pro feature with the 2026 home and away jersey imagery, front and back views, and a polished home-page kit panel.
- Tryouts has a public `/tryouts` page and admin-editable tryout content. The registration CTA links to the Google Form supplied by Christian.
- Schedule includes the Rose City-inspired fixtures view, mobile spacing fixes, Fall/Spring season handling, and match-area links.
- Roster includes nationality flags on cards and profile modals.
- About uses the historic team photo and the captioned history design.
- League affiliation marks show US Soccer, FIFA, and UPSL logos with white/color variants depending on header state.
- Sponsors use the supplied white sponsor logos in the carousel and footer.
- Public and admin surfaces share Starter/Pro tier state through the URL query string.
- The version selector opens by default and was verified switching Pro to Starter and back on desktop and mobile.
- Admin has a clearer `View website` button on desktop and a compact `View site` button in the mobile admin header.

## Visual Baseline

- Palette:
  - Primary: `#264a29`
  - Secondary/dark: `#171a0f`
  - Detail/accent: `#b18b1e`
- Display/headings: Archivo, self-hosted at `src/app/fonts/archivo-variable.ttf`.
- Body/UI: Inter.
- Header/nav text uses Archivo.
- Homepage hero has desktop and mobile height fixes to cover the bottom white gap.
- Mobile menu has aligned numbered rows, aligned Schedule submenu dashes, and a white `Open admin preview` button.

## Assets

- Crest: `public/prospect/deportivo-olimpico-logo.png`
- Club image and jersey assets are referenced from Supabase under:
  `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/assets/deportivoOlimpicoAssets`
- League marks are referenced from:
  `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/leagueLogos`
- Flags are referenced from:
  `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/flags`
- Intake notes live at:
  `/Users/christianalcala/Downloads/onzioProspects/deportivo-olimpico/intake/PROSPECT_INTAKE.yaml`

## Verify

```bash
npm run validate
```

Latest validation passed: `next typegen`, TypeScript, ESLint, production build, and template validation.

Additional browser verification passed with a temporary Playwright spec:

- Desktop: Pro default, switch to Starter, Pro-only nav hides, `/store?tier=starter` gates, switch back to Pro reveals store content.
- Mobile 390px: Pro menu shows Store/Contact, switch to Starter hides those links, `/store?tier=starter` gates, switch back to Pro reveals store content.

## Publish Gate

The GitHub snapshot has been pushed to `main`. Do not deploy to Vercel, share a live deployment, or remove `noindex` / `nofollow` unless Christian explicitly approves that next step.
