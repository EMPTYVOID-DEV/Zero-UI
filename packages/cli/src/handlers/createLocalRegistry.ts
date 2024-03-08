import { workingDir } from "src/consts.js";
import { registryType } from "../types.js";
import { writeJson } from "../utils/writeJson.js";
import path from "path";
import { logger } from "src/utils/logger.js";

export function createLocalRegistry(
  choices: string[],
  componentPath: string,
  registry: registryType
) {
  const localRegistry: registryType = {};
  for (let choice of choices) {
    const [component, variant] = choice.split("/");
    if (!localRegistry[component]) localRegistry[component] = {};
    localRegistry[component][variant] = registry[component][variant];
  }
  return writeJson(
    path.join(workingDir, componentPath, "registry.json"),
    localRegistry
  )
    .then(() => {
      logger.success(
        `successfully loading and writing the local registry.json file`
      );
    })
    .catch(() => {
      logger.error(
        `There was an issue when writing the local registry.json file`
      );
    });
}
