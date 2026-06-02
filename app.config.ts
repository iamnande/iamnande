import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
	profile: {
		name: 'nick anderson',
		proclamation: 'i make sure ideas survive long enough to matter. // TODO fix this, i dont like',
	},
	site: {
		nav: [
			{ name: 'philosophy', to: '/philosophy' },
			{ name: 'curriculum vitae', to: '/curriculum-vitae', tooltip: '↓ nick-anderson_resume.pdf' },
			{ name: 'colophon', to: '/colophon' },
		],
	}
})
