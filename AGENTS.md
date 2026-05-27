# AGENTS.md — feature-today/common

This repository inherits the [canonical organization rules](https://github.com/feature-today/.dev/blob/main/AGENTS.md). Only project-specific details are documented here.

## Scope

`@feature-today/common` — shared, tree-shakable TypeScript library consumed by `my` and `website`.

Currently contains: the `Project` type. Future additions: shared UI components (header, footer), small helpers (delegate to `@helpers4/*` when possible).

## Scopes (Conventional Commits)

`types`, `ui`, `utils`, `build`, `test`, `deps`, `ci`, `docs`.

## Layout

```
src/
├── index.ts          # re-exports
├── types/            # shared types (Project, …)
│   ├── index.ts
│   └── <name>.ts + <name>.test.ts
├── ui/               # (future) shared Qwik components
└── utils/            # (future) micro-helpers — prefer @helpers4/*
```

## Rules

- **No `any`** — use `unknown` or specific types.
- **Tree-shakable** — `sideEffects: false`, ESM only, individual file exports.
- **No runtime dependencies** at this stage — devDeps only. When peers are needed (Qwik for `ui/`), declare them as `peerDependencies`.
- **Prefer `@helpers4/*`** over custom utility functions.
- **AGPL header** on every source file.
- **Tests next to source** as `<name>.test.ts`.
