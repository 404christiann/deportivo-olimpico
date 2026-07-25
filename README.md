# Deportivo Olimpico Onzio Mockup

Local sales-preview snapshot for Deportivo Olimpico. This is a static concept preview with a public club website and shared-state admin preview. It does not include auth, a database, persistence, payments, tracking, or production operations.

## Run Locally

```bash
npm install
npm run dev
```

The preview defaults to Pro. Use `?tier=starter` to review the Starter version.

## Current Scope

- Public tabs: Home, About, Roster, Schedule, Contact. Contact points to `/sponsors`, which combines sponsor logos with the contact form.
- Club facts are sourced from the public Deportivo Olimpico site and social links.
- Placeholder images come from Supabase under `deportivoOlimpicoAssets`.
- The official website logo is temporarily stored at `public/prospect/deportivo-olimpico-logo.png`.
- Intake notes live at `/Users/christianalcala/Downloads/onzioProspects/deportivo-olimpico/intake/PROSPECT_INTAKE.yaml`.

## Verify

```bash
npm run validate
```

Latest validation passed.

## Publish Gate

Do not publish, push, deploy, or send this preview until Christian explicitly approves it after local review.
