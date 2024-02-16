import path from "path";
import { rawPath, workingDir } from "../consts.js";
import { githubFetch } from "../utils/githubFetch.js";
import { writeFile } from "../utils/writeFile.js";
import { logger } from "../utils/logger.js";

export async function loadFiles(
  files: string[],
  parentDir: "components" | "icons",
  componentsPath: string,
) {
  const loadPromises = files.map((file) => {
    const fileUrl = `${rawPath}/registry/${parentDir}/${file}`;
    return githubFetch(fileUrl)
      .then((content) => {
        const filePath = path.join(workingDir, componentsPath, parentDir, file);
        return writeFile(filePath, content);
      })
      .then(() => {
        logger.success(`successfully loading and writing the file ${file}`);
      })
      .catch(() => {
        logger.error(`There was an issue when writing this file ${file}`);
      });
  });
  await Promise.allSettled(loadPromises);
}
