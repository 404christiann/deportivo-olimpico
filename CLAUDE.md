# Agent Handoff

## Status

This is the local Onzio sales-preview snapshot for **Deportivo Olimpico** in Guadalupe, California. It is sample-only and has not been published. Do not create a remote repository, push, deploy, or send this preview without Christian's explicit approval.

## Active Prospect

- Club: Deportivo Olimpico
- Location: Guadalupe, CA / Central Coast
- Level: UPSL Premier Division
- Website: https://deportivoolimpico.com/
- Instagram: https://www.instagram.com/deportivoolimpicoca
- YouTube: https://youtube.com/@DeportivoOlimpicoCA
- Tryout form: https://forms.gle/HJq8fFpvB55iuZKHA

The public nav has been adapted to the requested tabs: Home, About, Roster, Schedule, and Contact. The Contact tab points to `/sponsors`, which combines sponsor logos with the get-in-touch/contact form.

## Assets

- Temporary crest: `public/prospect/deportivo-olimpico-logo.png`, copied from the current public website logo.
- Temporary Supabase placeholders:
  - Horizontal: `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/assets/deportivoOlimpicoAssets/placeholder2.png`
  - Vertical: `https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/assets/deportivoOlimpicoAssets/placeholder1.png`
- Intake record: `/Users/christianalcala/Downloads/onzioProspects/deportivo-olimpico/intake/PROSPECT_INTAKE.yaml`

Send-ready status is blocked until Christian supplies or approves the final photo placement, real sponsor logos/names, exact club palette if different from the current black/white/gray website treatment, and any real merchandise images.

## Commands

```bash
npm run dev
npm run validate
```

The latest validation passed: `next typegen`, TypeScript, ESLint, production build, and template validation.

## Boundaries

- No authentication, database, persistence, payments, tracking, API routes, or production operations.
- Sample roster, staff, fixtures, sponsors, store products, and analytics are fictional unless Christian replaces them.
- Pro opens by default. Starter remains available with `?tier=starter` and hides Pro-only sponsor/store/stat/admin surfaces.
- The preview keeps `noindex` / `nofollow`.

## Verification Notes

- Desktop home: requested nav labels render, placeholder assets load, no horizontal overflow.
- Mobile 390px: desktop nav hides, menu opens with all six requested items, background scroll locks, no horizontal overflow.
- Sponsor route: renders in Pro and gates in Starter.
- Shared-state sample mutation: adding a sponsor in admin appears on the public Sponsor page when navigating client-side before refresh.
- Console: duplicate gallery-key errors were fixed by giving repeated placeholder gallery URLs unique query slots. Remaining browser warnings are template-level Next image loader/aspect-ratio warnings for local SVG/static assets.
