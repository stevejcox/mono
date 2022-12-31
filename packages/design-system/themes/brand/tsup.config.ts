import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { dependencies } from "./package.json";

export default defineConfig({
	entry: ["src/index.ts"],
	outDir: "dist",
	splitting: false,
	bundle: true,
    minify: false,
	sourcemap: true,
	format: ["esm"],
    dts: true,
	target: "node15",
	platform: "browser",
	esbuildPlugins: [vanillaExtractPlugin()],
	external: Object.keys(dependencies),
	clean: true,
});
