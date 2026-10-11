This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ERP login links

`https://www.dataraysmart.com/erp` is the product overview. The ERP+ navigation
entry and login buttons open `/erp/plus/login`; its sign-in button opens the
existing production Odoo login at `https://erp.dataraysmart.com/web/login`.
Credentials are entered on the ERP host, not collected by the public website.
The separate DataRay ERP small-business app still uses
`https://app.dataraysmart.com/login`.

Set `ERP_PLUS_APP_URL` in Vercel only when changing the ERP+ backend host.
`NEXT_PUBLIC_ERP_PLUS_APP_URL` is supported as a compatibility fallback.
Both a base URL and a complete `/web/login` URL are accepted; HTTPS is required.
Missing or invalid values use the existing production login, never the contact form.
Redeploy the website after changing this build-time configuration.

```bash
ERP_PLUS_APP_URL=https://erp.dataraysmart.com
npm run test:erp-login
```

Updating these links does not deploy or upgrade Odoo. Do not point production at
the local Odoo 20 release candidate until its backend release is approved.
