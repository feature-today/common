/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * A project entry shown in the project-selector UI.
 *
 * @example
 * ```ts
 * const helpers4: Project = {
 *   title: "Helpers4",
 *   path: "helpers4",
 *   description: "A TypeScript lib to avoid rewriting helpers again and again.",
 * };
 * ```
 */
export interface Project {
  /** Human-readable name displayed on the card. */
  title: string;
  /** URL path segment (without leading slash). */
  path: string;
  /** Short tagline displayed under the title. */
  description: string;
}
