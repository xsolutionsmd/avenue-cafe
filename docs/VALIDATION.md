# Validation

October18,2026: first production release `07c928acf7cc4b41ab6db1eb8bc5ec35dcb3cb19` at https://avenuecafe.xsolutionsmd.com.

- Sol populated all85sourced menu entries and separate Home/Menu/Visit, preserving the inspected reference with actual cafe imagery. Ordinary browser/devtools fallback accepted; REA did not run.
- Astra quota fallback refinement preserves reference/content and adds clear mobile open/close feedback plus page metadata. Npm check and lifecycle container check passed.
- Actual linux/arm64 release tested in read-only UID101 runtime with no-new-privileges and disposable tmpfs:17route/resource/noindex/cache/version/private404 checks passed. The same immutable artifact is healthy on Oracle.
- Actual desktop1440x900/mobile390x844 views and mobile navigation, Escape focus, keyboard reopening, category jumps and disclosures passed. At320px/200%text, controls stay inside their cards and no horizontal overflow occurs. Real images load; full menu remains text-only.
- First public HTTPS/version and all3direct routes checked; phone/Maps destinations verified without a real call/transaction. Shared gateway changed under existing lock with fresh read/validation/CAS, preserving siblings.
- At first publication, infrastructure, independent live review and final handoff were still pending. They subsequently completed on October 18; the normal focused recheck passed 22/22 cases. These dated results do not establish later availability.
- Disposable candidate containers/networks/synthetic volumes, local runtime images and dedicated builder/cache removed. Active production image/config retained; source and task evidence remain needed for completion.

Factual uncertainties remain in kb/open-questions.md and are not filled with invented details.

October 18 follow-up: directory redirect correction.

- Independent review found `/menu` without a trailing slash redirecting to the internal HTTP port 8080. The same defect affected all three environments; canonical `/menu/` worked. It was unrelated to the Derek-only menu photos.
- `absolute_redirect off` keeps automatic directory redirects relative, retaining the browser's public scheme and host. See [Nginx's directive reference](https://nginx.org/en/docs/http/ngx_http_core_module.html#absolute_redirect).
- The regression check reproduced the old failure in the actual unprivileged Nginx 1.27 runtime. The corrected runtime passed 25 cases: GET/HEAD for Menu/Visit with and without encoded query parameters under all three public Host headers, successful relative targets, and a real 404 for an unknown path. Nginx configuration validation also passed.
- The same route check runs in the existing container lifecycle check. Publication and independent live confirmation subsequently completed; see the accepted results below.
- No page content or photo associations changed. Main and Abdul retain text-only menus; Derek's separate photo variation must remain on his branch.

October 18 expanded Derek-only menu source:

- Ten illustrated rows among 85 unique entries, using nine original photos/eight scenes. Three confirmed and seven likely associations retain provenance. Main and Abdul unchanged.
- Deterministic WebP crops/resizes; square images preserve intrinsic ratio. Actual local T3 browser views at 1440x900, 390x844 and 320px with doubled root text: all ten images load, retain ratios and fit the menu paper; captions and disclosures fit; no horizontal overflow.
- Explore/Escape focus, category jump, bread disclosure keyboard open/close and reload checked. Actual desktop/phone/narrow screenshots inspected. Hosted photo acceptance subsequently completed below.
- Runtime correction independently passed 56/56 live cases on d472f82 production/Abdul and 9c3ce9a Derek. No remaining route finding; dated host-availability incident is not a sustained-health claim.

October 18 accepted expanded live application and final records:

- Derek application revision `63d042f9687766f422f30166a9c887cbf242eb0c`: independent 54/54 photo/interaction cases plus 8/8 fresh rechecks, no findings. All ten actual crops loaded and fit their containing rows on desktop/mobile; 320px/doubled-text containment was observed in the focused review. Three confirmed/seven likely mappings, nine files/eight scenes, 75 photo gaps.
- Runtime correction: 56/56 independent cases plus 23/23 fresh rechecks, no findings. Production/Abdul remain exactly `d472f827ff25db2755538ae7fba14511e3ad74c4`; Derek retains the same three scoped runtime blobs. Full Derek application parity with main/Abdul is not claimed.
- Expanded product CI 39160095615 and managed release 39160095621 succeeded. Later docs-only publication uses the existing Derek workflow; its exact SHA, terminal checks, bounded live version and actual app/runtime/config comparison are retained in private final delivery evidence. No new product tests are claimed for documentation edits.
- All 17 original hashes verified; 15 authentic cafe files and two wrong-business exclusion references. Derived CSV contains 85 entries; the current rendered index has ten photo rows. Compact final crop/identity consistency check found no mismatches; no research or full-suite repetition.
- Main/Abdul menu photos remain zero. Home BLT and entrance imagery are unchanged. Hours/prices, floor/accessibility and an owner-controlled ordering system remain unresolved. MPR1-L1 remains a dated incident with unknown root cause, without a sustained-health guarantee.
