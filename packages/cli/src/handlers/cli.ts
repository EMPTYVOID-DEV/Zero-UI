import inquirer from "inquirer";
import { registryType } from "../types.js";
import { validatePath } from "../utils/validatePath.js";
import { getVariants } from "../utils/getVariants.js";

export async function cli(registry: registryType): Promise<{
  componentsPath: string;
  choices: string[];
}> {
  const { componentsPath } = await inquirer.prompt({
    name: "componentsPath",
    type: "input",
    message: "Where do you want your components to live",
    default: "src/lib/zeroUi",
    validate: validatePath,
  });

  const { choices } = await inquirer.prompt({
    name: "choices",
    type: "checkbox",
    pageSize: 15,
    default: [],
    message: "Select the components variants you want add",
    choices: getVariants(registry).map((el) => ({
      checked: false,
      name: el,
    })),
  });

  return { componentsPath, choices };
}
