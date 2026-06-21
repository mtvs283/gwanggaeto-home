<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 (Turbopack) frontend app — no backend, database, or other services. Commands are in `package.json` (`dev`, `build`, `start`, `lint`).

- Run dev: `npm run dev` (serves on http://localhost:3000).
- `npm run lint` currently reports pre-existing errors (e.g. `no-html-link-for-pages` in several `app/*/page.tsx` files); these are existing code issues, not an environment problem.
