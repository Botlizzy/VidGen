# VID-GEN

VID-GEN is a prompt-to-publish landing experience for content creators. The current frontend includes the responsive landing page, prompt studio visual, workflow and automation sections, and routed login and sign-up screens.

## Vercel deployment

This repository is configured as a Vite static deployment for Vercel. Import the repository with the project root set to the repository root. The committed `vercel.json` uses `pnpm install --frozen-lockfile`, runs `pnpm build:client`, publishes `dist/public`, and rewrites client-side routes such as `/login` and `/signup` to `index.html`.

Do not use the managed Express `start` command as the Vercel deployment command. The Express entry remains available for environments that run the complete managed project, while Vercel should serve the static Vite output.

## Local verification

```bash
pnpm check
pnpm build:client
pnpm build
```

The Vercel deployment should complete when `dist/public/index.html` is generated successfully. After deployment, verify `/`, `/login`, and `/signup` directly in the browser.
