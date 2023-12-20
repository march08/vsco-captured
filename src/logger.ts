import { shouldLog } from "./utils";

export const createSimpleLogger = (prefix: string) => ({
  log: (...rest: any[]) => {
    if (!shouldLog()) {
      return;
    }
    try {
      console.log(`[${prefix}]`, ...rest);
    } catch (e) {
      console.error(e);
    }
  },
});
