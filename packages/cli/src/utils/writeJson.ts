import fsExtra from "fs-extra";

export async function writeJson(path: string, content: { [key: string]: any }) {
  await fsExtra.createFile(path);
  return fsExtra.writeJSON(path, content);
}
