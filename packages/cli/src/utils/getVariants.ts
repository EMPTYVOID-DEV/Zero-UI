import { registryType } from "../types.js";

export function getVariants(registry: registryType) {
  const variants: string[] = [];
  for (let component in registry) {
    for (let variant in registry[component]) {
      variants.push(`${component}/${variant}`);
    }
  }
  return variants;
}
