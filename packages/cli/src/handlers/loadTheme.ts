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
      logger.success("Successfully loading and writing the theme.");
    })
    .catch(() => {
      logger.error("There was an issue when loading the theme.css file.");
    });
}
