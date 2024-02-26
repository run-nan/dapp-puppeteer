import path from "path";
import url from "url";

export const resolvePath = (
  currentPath: string,
  ...paths: string[]
): string => {
  return path.join(url.fileURLToPath(new URL(".", currentPath)), ...paths);
};
