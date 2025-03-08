import path from "path";
import { rawPath, workingDir } from "../consts.js";
import { githubFetch } from "../utils/githubFetch.js";
import { writeFile } from "../utils/writeFile.js";
import { logger } from "../utils/logger.js";

export async function loadFiles(
  files: string[],
  parentDir: "components" | "icons",
  componentsPath: string
) {
  const loadPromises = files.map(async (file) => {
    const fileUrl = `${rawPath}/${parentDir}/${file}`;
    try {
      const content = await githubFetch(fileUrl);
      const filePath = path.join(workingDir, componentsPath, parentDir, file);
      await writeFile(filePath, content);
      logger.success(`successfully loading and writing the file ${file}`);
    } catch {
      logger.error(`There was an issue when writing this file ${file}`);
    }
  });
  await Promise.allSettled(loadPromises);
}
