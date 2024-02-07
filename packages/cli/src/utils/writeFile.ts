import fsExtra from "fs-extra";

export async function writeFile(path: string, content: string) {
  await fsExtra.createFile(path);
  return fsExtra.writeFile(path, content);
}
