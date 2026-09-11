Real screenshot helps a ton. Here's the actual diagnosis, not a general checklist:

## The #1 problem: the hero has no anchor image
That thin-line CAD/wireframe render floating in empty white space is exactly what's killing it. Compare to Kempower/ABB: their heroes are full-bleed, high-resolution product photography or polished 3D renders that fill real visual weight in the frame. Your hero has a small, low-fidelity wireframe illustration surrounded by a sea of unstyled white space. That's not "restrained/editorial" whitespace — it's *empty* whitespace, because there's nothing confident enough to justify it. This single fix would move the needle more than anything else.

**Fix:** get (or generate) a real studio-quality render or photo of the Altus II — filling 40-50% of the hero, not 15%.

## The product images are the deeper issue, and they repeat everywhere
The same thin-outline wireframe graphic appears in the hero, the "Power Usage Billing" section, and "End the Power Struggle" section. Three sections, same weak asset, just recentered in a gray box. This reads exactly like Minit Charger's actual current site — small, undifferentiated, template-feeling imagery — the thing we explicitly said to avoid. If the brochure/marketing collateral doesn't have better photography, that's the actual blocker, not the layout code.

## Icon grid reads as generic SaaS, not industrial
Those pastel-mint rounded-square icon badges with soft drop-shadow cards are a default component-library look (feels like shadcn/Tailwind UI defaults untouched). Kempower/ABB never use bouncy card shadows or candy-colored icon backgrounds — their icon treatment is flat, monochrome or single-accent-line icons with no card chrome at all, just icon + bold label + one line, sitting directly on the section background.

## Typography isn't doing "statement" work
"ALTUS II" and section headers are only moderately bold/sized — there's no true oversized declarative moment anywhere on the page (compare to Kempower's giant "MORE" or ABB's huge stat numerals). Everything is roughly the same visual weight, so nothing anchors the eye.

## The green CTA band is flat and default
Solid green background, two white pill buttons, centered text — no texture, no image, no industrial grounding. Kempower/ABB always put a real environment/product photo behind or beside their final CTA band.

## Priority fix order
1. **Source or generate real hero-quality product imagery** — this unblocks everything else; without it the page can't hit "premium."
2. **Strip the icon cards down** — remove shadow, remove pastel badges, go flat/monochrome, sit directly on background.
3. **Push typography scale contrast** — make "ALTUS II" and stat numbers genuinely oversized (2–3x current), let secondary text stay small.
4. **Give the CTA band a photographic background** instead of flat green.
5. Only after 1–4, revisit spacing/rhythm — the spec table and stats band are actually close to fine as-is.

Do you have access to better Altus II renders/photos in the marketing collateral folder, or is the wireframe graphic literally the best asset available? That answer determines whether this is a layout fix or an asset problem.