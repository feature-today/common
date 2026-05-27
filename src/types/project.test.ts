/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";
import type { Project } from "./project.js";

describe("Project type", () => {
  it("accepts a well-formed object", () => {
    const project: Project = {
      title: "Helpers4",
      path: "helpers4",
      description: "Reusable TS helpers.",
    };
    expect(project.title).toBe("Helpers4");
    expect(project.path).toBe("helpers4");
    expect(project.description.length).toBeGreaterThan(0);
  });
});
