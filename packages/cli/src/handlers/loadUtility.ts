import path from "path";
import { rawPath, workingDir } from "../consts.js";
import { githubFetch } from "../utils/githubFetch.js";
import { writeFile } from "../utils/writeFile.js";
import { logger } from "../utils/logger.js";

export async function loadTheme(componentsPath: string) {
  const themeUrl = `${rawPath}/registry/theme.css`;
  return githubFetch(themeUrl)
    .then((content) => {
      const themePath = path.join(workingDir, componentsPath, "theme.css");
      return writeFile(themePath, content);
    })
    .then(() => {
      logger.success("Successfully loading and writing the theme.css file");
    })
    .catch(() => {
      logger.error("There was an issue when loading the theme.css file.");
    });
}

export async function loadTypes(componentsPath: string) {
  const typesUrl = `${rawPath}/registry/types.d.ts`;
  return githubFetch(typesUrl)
    .then((content) => {
      const typesPath = path.join(workingDir, componentsPath, "types.d.ts");
      return writeFile(typesPath, content);
    })
    .then(() => {
      logger.success("Successfully loading and writing the types.d.ts file.");
    })
    .catch(() => {
      logger.error("There was an issue when loading the types.d.ts file.");
    });
}
