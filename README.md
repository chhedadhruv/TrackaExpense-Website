# TrackaExpense website

Marketing and legal site for the TrackaExpense app: <https://trackaexpense.dhruvchheda.com>.

Next.js 15 (static export), TypeScript, Tailwind CSS 3. Colours and fonts follow the app's theme
(`src/app/globals.css` holds the light and dark tokens).

## Run

```sh
yarn install
yarn dev        # http://localhost:3000
yarn build      # static export to out/
yarn lint
```

## Environment

The contact form sends through EmailJS. Set these in `.env.local` and in the Vercel project:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Without them the form shows a message asking people to email instead.

## Where things live

- `src/app/` routes: home, features, roadmap, changelog, faq, about, contact, privacy, terms, delete-account
- `src/lib/site.ts` site constants, store links and navigation (single source for links)
- `src/lib/privacy.ts`, `src/lib/terms.ts` legal text
- `public/screens/` app screenshots, `public/fonts/` Lato and Kufam (from the app)

## Content rules

- Only claim what the app does today; upcoming work belongs on the roadmap page without dates.
- No user counts, ratings or "free"/"ad-free" superlatives.
- Update the changelog, the privacy policy date and `SITE.version` with each store release.

## Deploy

Vercel, framework preset Next.js (`vercel.json` sets it). Open a pull request to get a preview.

## Licence

MIT, see `LICENSE`.
