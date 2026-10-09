# Empire Group

A React and TypeScript website built with Vite and Tailwind CSS v4. All application components and page sections are written in TSX.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

```sh
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Available scripts

- `npm run dev` starts the development server.
- `npm run typecheck` checks TypeScript without creating output files.
- `npm run build` typechecks the project and creates a production build in `dist/`.
- `npm run preview` serves the production build locally.

The React entry point is `src/main.tsx`; `src/App.tsx` composes the site from the individual components in `src/sections/`. Tailwind is loaded from `src/style.css` and configured as a Vite plugin in `vite.config.ts`.