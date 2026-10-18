# Runtime and integration contract

Landing scope only. No custom API, database, payment, ordering, authentication or staff-inquiry service.

- `GET /health`: plain `ok`, HTTP 200, no-store.
- `GET /version.json`: JSON containing exact built Git `revision`, no-store, no stale ETag.
- Authored static routes `/`, `/menu/`, `/visit/`: each must have its own build output and direct-load/refresh support.
- Missing assets/routes retain HTTP 404; private dot paths are not served.
- All three demonstration environments use robots noindex/nofollow, including response headers. No visitor-facing preview banner.
- Real primary link: `tel:+14102968300`.
- Map: `https://www.google.com/maps?cid=12875415791561100458`; direction link may use the verified full street address.
- No forms or requests suggesting online ordering. Current hours/prices are not API data and must not be invented.
- Images and fonts are self-hosted optimized production copies; use original media only from the accepted business library and keep provenance.

The existing static kit (Vite build, unprivileged Nginx on 8080, read-only runtime with disposable temporary mounts) supplies this contract. Astra verified the populated source revision `374472fb425ea09ff5d5f4b3c5c5c99b5de0b2a8` in the actual read-only Compose runtime on October 18: all authored routes, 85 menu entries, image/font/code resources, health/version/cache/noindex semantics and private/missing-path 404 behavior passed 17 checks. Actual desktop/mobile container views and navigation also passed. Phone and Maps hrefs match the sourced contact identity; no call or transaction was made. This is verified local runtime evidence; ARM64/public release and independent live review remain later steps.
