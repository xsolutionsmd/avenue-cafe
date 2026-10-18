# Validation

October 18, 2026: populated Home, Menu and Visit source at `374472fb425ea09ff5d5f4b3c5c5c99b5de0b2a8`. This is local preparation, not a released or formally accepted build.

- Sol's `npm run check` passed with all 85 sourced menu keys exactly once. Actual desktop/mobile checks covered 1440×900, 390×844 and 320px with enlarged text, navigation, category jumps, disclosures, keyboard and history. Captures and limitations accompany the blueprint.
- Astra independently built the production Nginx image for linux/amd64. The actual planned read-only Compose runtime passed 17 HTTP/resource checks: all authored routes, images/fonts/CSS/JS, health, exact revision, no-store version responses, noindex headers, missing routes/assets and private file paths returning 404. User 101:101, no-new-privileges, disposable tmpfs and healthy state were verified. No persistent mounts.
- The built container was inspected in the browser at desktop and 390px, including opening mobile navigation, following Menu, direct Visit loading, 85 visible menu records, image loading and no horizontal overflow. The phone href was inspected; no call was placed.
- No ARM64 release, public deployment, formal independent live review or Slack delivery has occurred. REA failed before browser launch. Derek's October 18 correction permits the documented ordinary browser/developer-tools fallback, so the tooling failure is no longer a gate. Reconstruction evidence is being reconciled for acceptance; browser evidence is not labeled REA evidence.
- The disposable local container, image, network and dedicated builder/cache were removed by exact identity. Source, optimized media, provenance and relevant captures are retained for completing this build.

Factual uncertainties remain in `kb/open-questions.md`; they have not been filled with invented operating details.
