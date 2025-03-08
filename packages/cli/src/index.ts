#!/usr/bin/env node

import { welcome } from "./handlers/welcome.js";
import { logger } from "./utils/logger.js";
import { getRegistry } from "./handlers/getRegistry.js";
import { cli } from "./handlers/cli.js";
import { getDependencies } from "./handlers/getDependencies.js";
import { loadFiles } from "./handlers/loadFiles.js";
import { installPackages } from "./handlers/installPackages.js";
import { createLocalRegistry } from "./handlers/createLocalRegistry.js";

async function main() {
  welcome();
  const registry = await getRegistry();
  const { choices, componentsPath } = await cli(registry);
  const { files, icons, packages } = getDependencies(registry, choices);
  await createLocalRegistry(choices, componentsPath, registry);
  await loadFiles(files, "components", componentsPath);
  await loadFiles(icons, "icons", componentsPath);
  await installPackages(packages);
}

main().catch((e) => {
  logger.error(
    `It seems unknown error has occured. Can you open issue with this message ${e.message}`
  );
});
