import { registryType } from "../types.js";

export function getDependencies(registry: registryType, choices: string[]) {
  const packages: Set<string> = new Set<string>();
  const icons: Set<string> = new Set<string>();
  const files: Set<string> = new Set<string>();
  for (let choice of choices) {
    const [component, variant] = choice.split("/");
    const currentDependencies = registry[component][variant];
    if (currentDependencies.packages)
      currentDependencies.packages.forEach((pkg) => packages.add(pkg));
    if (currentDependencies.icons)
      currentDependencies.icons.forEach((icon) => icons.add(`${icon}.svelte`));
    currentDependencies.files.forEach((file) =>
      files.add(`${component}/${file}`)
    );
    // adding recursive variant dependencies
    if (currentDependencies.variants)
      currentDependencies.variants.forEach((variant) => choices.push(variant));
  }
  return {
    files: [...files],
    icons: [...icons],
    packages: [...packages],
  };
}
