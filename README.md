# Avenue Cafe website

Sourced presentation website for Avenue Cafe in Towson, Maryland. See [the factual KB](kb/INDEX.md), [current handoff](kb/HANDOFF.md) and [workflow](WORKFLOW.md).

This is a dedicated static-site repository. The frontend lives in `app/`; the existing Vite build and Nginx runtime provide health and revision endpoints. Use `python scripts/app.py check` for container checks. Local development uses `app.ps1 start` with an explicit free port when other projects are active.

Branches: `main`, `derek-dev`, `abdul-dev`. Current work starts on Derek's branch; the authorized initial pipeline establishes all three independent environments. No custom ordering or payment platform is in scope.

Public content and selected optimized business photos belong here. Private provenance originals, commercial context, credentials and browser evidence stay outside the repository.
