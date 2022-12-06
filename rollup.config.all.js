import { createRollupConfigEmbed } from "./rollup.createConfig";

export default createRollupConfigEmbed((config) => {
  return {
    ...config,
    input: "src/index.ts",
    output: {
      sourcemap: true,
      format: "umd",
      exports: "named",
      name: "VSCO_Captured",
      file: "dist/captured.min.js",
    },
  };
});
