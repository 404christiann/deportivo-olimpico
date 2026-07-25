# Deportivo Olimpico Implementation Record

## Objective

Maintain an independent Onzio concept snapshot for Deportivo Olimpico that can be reviewed as a premium public club site plus sample admin preview. The snapshot should remain static, sample-only, and easy to hand off.

## Current Baseline

- Branch: `main`
- Remote: `git@github.com:404christiann/deportivo-olimpico.git`
- Current pushed commit: `399aef8` `Open version selector by default`
- Current tier default: Pro
- Starter review path: append `?tier=starter`
- Pro review path: append `?tier=pro`
- Version selector: open by default on initial page load
- Publish status: GitHub snapshot pushed; Vercel/live deployment not approved yet

## Implemented Scope

- Deportivo Olimpico config in `src/config/clubs/deportivo-olimpico/index.ts`
- Active config import in `src/config/prospect.ts`
- Brand palette injected through CSS custom properties:
  - `#264a29` primary
  - `#171a0f` dark/secondary
  - `#b18b1e` detail/accent
- Local crest in `public/prospect/deportivo-olimpico-logo.png`
- Supabase-hosted club assets, sponsor logos, league marks, jersey imagery, and flags
- Self-hosted Archivo display font plus Inter body/UI font
- Public routes for home, about, roster, schedule, match area, sponsors/contact, store, stats, standings, staff, and tryouts
- Admin routes for dashboard, roster, schedule, seasons, standings, sponsors, staff, stats, store, tryouts, and analytics
- Shared URL-backed tier switching for public and admin surfaces
- `noindex` / `nofollow` metadata remains enabled

## Major UI Decisions

- Homepage uses a full-viewport green/gold hero with the crest and the line `Small town. Big heart.`
- Desktop and mobile hero heights were adjusted to cover the bottom white gap.
- Header starts transparent on hero pages and uses white league marks, then switches to color marks on solid header state.
- Public desktop nav uses Archivo and includes a non-clickable Schedule dropdown parent.
- Mobile nav has aligned number/dash columns, a clear Schedule submenu, and a white `Open admin preview` button.
- Schedule page was redesigned as a fixtures page inspired by Rose City, with improved mobile spacing.
- Matchday slideshow uses selected Deportivo action/team photos and sits above the standings/table area.
- About page follows the Rose City-inspired editorial pattern and uses the historic team photo.
- Ready-for-next-level CTA uses the supplied action photo across the section and links to the tryout flow.
- Home and store shop surfaces present the 2026 home/away jersey imagery with front/back views.
- Sponsor carousel and footer use the supplied white sponsor marks.
- Admin has a visible `View website` button on desktop and a compact `View site` button on mobile.

## Tier Behavior

Starter hides or gates Pro-only features:

- Store
- Contact/Sponsors
- Stats
- Analytics
- Standings
- Seasons
- Expanded profile/detail controls
- Content controls

Verified behavior:

- Pro opens with no query parameter.
- Switching to Starter updates the URL to `?tier=starter`.
- Starter hides Store and Contact from public desktop nav and mobile menu.
- Starter gates `/store` with the Pro-version message.
- Switching back to Pro updates the URL to `?tier=pro`.
- Pro reveals Store content again.

## Verification

Use:

```bash
npm run validate
```

Latest validation passed:

- `next typegen`
- `tsc --noEmit --pretty false`
- `eslint`
- `next build`
- `node scripts/validate-template.mjs`

Additional temporary Playwright verification passed on the active local server:

- Desktop viewport: Pro to Starter and back to Pro
- Mobile 390px viewport: Pro to Starter and back to Pro
- Pro-only nav/content visibility changed correctly in both viewports

The temporary Playwright spec and generated `test-results/` folder were removed after the check.

## Handoff Rules

- Keep prospect changes scoped to this snapshot unless Christian explicitly asks for a master/template change.
- Do not deploy or publish a live URL without explicit approval.
- Do not add auth, persistence, payments, tracking, APIs, or production operations.
- Preserve the sample-only nature of the preview.
- Keep `README.md` and `CLAUDE.md` synced after shipped UI or workflow changes.
