# Security Maintenance

## Release Checks

Run `npm ci`, `npm run test:security`, `npm run lint`, `npm run typecheck`,
`npm run build` and `npm audit`. Test contact/newsletter success using a mocked
mail transport; never send test messages to production recipients automatically.
Test account-page hydration, unique script nonces, framing rejection, mobile
layout, Academy access checks and ERP login/download links.

Link the verified Vercel project and team before deployment. Stage with
`vercel deploy --prod --skip-domain`, verify that exact build, then promote it.
Do not disable Deployment Protection for tests. Keep the previous deployment for
rollback. Do not include local environment files or browser auth state in artifacts.

## November 2026 Hardening

- Public mail routes enforce bounded JSON, field types/lengths, known services,
  email validation, same-origin browser submissions and HTML escaping. Honeypots
  discard bot submissions without sending. Provider failures return generic 503s.
- Framing is denied site-wide. Account pages use per-request script nonces and
  private/no-store responses; only those pages are dynamically rendered.
- The broader marketing script policy remains report-only pending compatibility
  review. It is not a substitute for an enforced site-wide script policy.
- Fresh Academy routes do not mount marketing analytics. Vercel telemetry also
  filters Academy URLs and strips query strings/fragments. Previously loaded
  Google scripts during SPA navigation need a separate telemetry audit.
- Dependency updates are proposed weekly by Dependabot; they are not auto-merged.

## Owner-Controlled Follow-Up

1. Treat the historical Resend credential as exposed until its revocation is
   verified. Create a restricted sending key in Resend, update the Vercel secret,
   stage and validate delivery, promote, then revoke the old key. Never paste keys
   into issues, chats or source. Review sending activity. Do not force-push history.
2. Publish/review the staged log-only mail-API rate observation rule in Vercel.
   After legitimate traffic is understood, separately approve an enforced shared
   quota/bot challenge. Origin checks and honeypots do not stop direct HTTP bots.
3. Review RLS, grants, triggers, storage, auth redirects and recovery on the actual
   Academy Supabase project. The ERP project's policies do not validate Academy.
4. Exercise two synthetic learners: cross-user progress/profile access, enrollment
   self-approval, direct database requests, expired/reused recovery links and MFA.
   Do not run write tests against customer accounts.
5. ERP+ is a separate Odoo deployment. Its operator must restrict database
   administration routes and configure HSTS at its TLS proxy. Marketing deployment
   alone cannot remediate those settings.

Report suspected vulnerabilities privately to the repository owner. Exclude
credentials, session cookies, customer records and password-reset links.
