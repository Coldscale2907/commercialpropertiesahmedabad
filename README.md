# Commercial Properties Ahmedabad

Production-ready lead generation website for **Slabs and Beams Realty** — built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

**Domain:** commercialpropertiesahmedabad.in

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build

```bash
npm run build
# Output: /out (static export)
```

## Netlify Deployment

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Set environment variables (see below)

Or deploy from CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (with country code, no +) | `919898989898` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Phone number (with country code, no +) | `919898989898` |
| `NEXT_PUBLIC_SITE_URL` | Full site URL | `https://commercialpropertiesahmedabad.in` |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 Measurement ID | (optional) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook Pixel ID | (optional) |

---

## Adding / Editing Properties

Edit `data/properties.ts`. Each property follows the `Property` interface in `types/index.ts`.

Key fields:
- `status`: `'Available' | 'Limited Units' | 'Selling Fast'` — controls badge color
- `featured`: `true/false` — reserved for future filtering
- `images`: Use Unsplash URLs or your own hosted images
- `priceOnRequest`: Set `true` to hide price and show "Price on Request"

---

## Analytics Setup

### Google Analytics 4
1. Create GA4 property at analytics.google.com
2. Copy Measurement ID (e.g. `G-XXXXXXXXXX`)
3. Set `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX` in Netlify env vars

### Meta Pixel
1. Create pixel at business.facebook.com
2. Copy Pixel ID
3. Set `NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX`

### Events Tracked
- `whatsapp_click` — all WhatsApp button clicks (with source label)
- `phone_call` — all call button clicks (with source label)
- `form_submit` — callback form submissions
- Meta: `Contact` event on WhatsApp clicks, `Lead` event on form submit

---

## WhatsApp Configuration

Update the number in `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```
Format: country code + number, no `+` or spaces. E.g. `919876543210` for India.

---

## Tech Stack

- **Next.js 14.2.5** — App Router, static export
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **Lucide React** — icons
- **React Hook Form + Zod** — form validation
- **Netlify** — hosting with form handling
