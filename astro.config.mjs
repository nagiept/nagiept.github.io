import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://nagiept.github.io/',
    base: '',
	compressHTML: false,
	scopedStyleStrategy: 'class',
	devToolbar: {
		enabled: false
	},
});