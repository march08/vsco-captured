export const createSimpleLogger = (prefix: string) => ({
  log: (...rest: any[]) => {
    try {
      console.log(`[${prefix}]`, ...rest);
    } catch (e) {
      console.error(e);
    }
  },
});
