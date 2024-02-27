import path from "path";
import url from "url";
import { createRequire } from "module";
import type { Step } from "@puppeteer/replay";
import { writeFile } from "fs/promises";

export const resolvePath = (
  currentPath: string,
  ...paths: string[]
): string => {
  return path.join(url.fileURLToPath(new URL(".", currentPath)), ...paths);
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    const timmer = setTimeout(() => {
      clearTimeout(timmer);
      resolve();
    }, ms);
  });
};

export const loadFlow = (
  name: string,
  options: { overwrite?: boolean } = {},
) => {
  const flow = createRequire(import.meta.url)(`../../flows/${name}.json`);
  const steps: Array<
    Step & {
      index: number;
    }
  > = Array.isArray(flow) ? flow : Array.isArray(flow.steps) ? flow.steps : [];
  steps.forEach((step, index) => {
    step.index = index;
  });
  const overwrite = options.overwrite || false;
  if (overwrite) {
    writeFile(
      resolvePath(import.meta.url, `../../flows/${name}.json`),
      JSON.stringify(
        {
          title: name,
          steps,
        },
        null,
        2,
      ),
    );
  }
  return {
    title: name,
    steps,
  };
};
