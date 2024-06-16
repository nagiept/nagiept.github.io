import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://nagiept.github.io/',
	outDir: "./docs",
    base: '/nagiept.github.io',
	compressHTML: false,
	scopedStyleStrategy: 'class',
	devToolbar: {
		enabled: false
	},
});