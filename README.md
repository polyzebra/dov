## DOV Drone Landing Page

Modern SaaS-style landing page for DOV Drone, a premium drone services business based in Ireland.

## Getting Started

Install dependencies and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a local environment file by copying the example:

```bash
cp .env.example .env.local
```

Then fill in the following values in `.env.local`:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`

Key files:

- `app/page.tsx` — homepage composition
- `components/layout` — header and footer
- `components/sections` — hero, services, about, contact
- `components/ui` — reusable UI primitives

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize Geist for a clean, premium feel.

## Notes

- Tailwind CSS v4 is used with a light, sky-inspired palette.
- The contact form posts to `/api/contact` using Resend for email delivery.
