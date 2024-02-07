import { logger } from "../utils/logger.js";

export async function githubFetch(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // @ts-ignore
      throw new Error("error occured", {
        cause: {
          res: response,
        },
      });
    }
    const content = await response.text();
    return content;
  } catch (e: any) {
    if (!e.cause?.res) {
      logger.error("It seems you don't have a network connection.");
      process.exit(1);
    }
    const { status, statusText } = e.cause.res;
    switch (status) {
      case 429:
        logger.error(
          "You have reached github api requests limit. You can load what you need directly from altron repository."
        );
        break;
      case 403:
        logger.error(
          "You have reached github api requests limit. You can load what you need directly from altron repository."
        );
        break;
      case 404:
        logger.error(
          `Unable to load the file with the url : ${url}. Please report this issue on the cli repository.`
        );
        break;
      default:
        logger.error(
          `Unknown error occured when loading the file with the url: "${url}". You open an issue on the cli repository with this message ${statusText}.`
        );
        break;
    }
    process.exit(1);
  }
}
