export default defineAppConfig({
	profile: {
		name: 'nick anderson',
		tagline: 'i make sure ideas survive long enough to matter.',
		proclamation: '', // TODO
	},
	site: {
		nav: [
			{ name: 'philosophy', to: '/philosophy' },
			{ name: 'curriculum vitae', to: '/curriculum-vitae', tooltip: '↓ nick-anderson_resume.pdf' },
			{ name: 'colophon', to: '/colophon' },
		],
	}
})
