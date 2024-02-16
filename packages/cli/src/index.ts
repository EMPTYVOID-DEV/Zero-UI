import { welcome } from "./handlers/welcome.js";
import { logger } from "./utils/logger.js";
import { getRegistry } from "./handlers/getRegistry.js";
import { cli } from "./handlers/cli.js";
import { getDependencies } from "./handlers/getDependencies.js";
import { loadFiles } from "./handlers/loadFiles.js";
import { loadTheme, loadTypes } from "./handlers/loadUtility.js";
import { installPackages } from "./handlers/installPackages.js";

async function main() {
  welcome();
  const registry = await getRegistry();
  const { choices, componentsPath, isTypes } = await cli(registry);
  const { files, icons, packages } = getDependencies(registry, choices);
  await loadFiles(files, "components", componentsPath);
  await loadFiles(icons, "icons", componentsPath);
  await loadTheme(componentsPath);
  if (isTypes) await loadTypes(componentsPath);
  await installPackages(packages);
}

main().catch((e) => {
  logger.error(
    `It seems unknown error has occured. Can you open issue with this message ${e.message}`,
  );
});
