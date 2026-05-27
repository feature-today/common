# `@feature-today/common`

Shared TypeScript library for the feature-today organization. Currently exposes the `Project` type used by the project-selector in both `my` (the app) and `website` (marketing).

## Install

Consumed via git dependency (no npm publish yet):

```jsonc
// my/package.json
{
  "dependencies": {
    "@feature-today/common": "github:feature-today/common#main"
  }
}
```

After adding, run `pnpm install` in the consumer.

## Use

```ts
import type { Project } from "@feature-today/common";

const projects: Project[] = [
  { title: "Helpers4", path: "helpers4", description: "Reusable TS helpers." },
];
```

## Scripts

```bash
pnpm dev           # vite build --watch
pnpm build         # produces dist/ + .d.ts
pnpm typecheck     # tsc --noEmit
pnpm lint          # oxlint
pnpm fmt           # oxlint --fix
pnpm fmt.check     # oxlint (no fix)
pnpm test          # vitest run
pnpm test.coverage # vitest run --coverage
```

## Stack

Vite 7 lib mode · vite-plugin-dts · Vitest 3 · oxlint 1 · TypeScript 5.7+ strict · Node ≥ 24.

## License

[AGPL-3.0-or-later](./LICENSE). See the org-wide [licensing policy](https://github.com/feature-today/.dev/blob/main/LICENSING.md).
