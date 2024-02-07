import { githubFetch } from "../utils/githubFetch.js";
import { registryType } from "../types.js";
import { rawPath } from "src/consts.js";

export async function getRegistry(): Promise<registryType> {
  const registryUrl = `${rawPath}/registry.json`;
  const registryJson = await githubFetch(registryUrl);
  const parsedRegistery = JSON.parse(registryJson) as registryType;
  return parsedRegistery;
}
