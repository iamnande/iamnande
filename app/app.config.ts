declare module '@nuxt/schema' {
  interface AppConfig {
    profile: {
      name: string
      tagline: string
      proclamation: string
    }
    site: {
      vcs: string
      nav: Array<{
        name: string
        to: string
        tooltip?: string
      }>
    }
  }
}

export default defineAppConfig({
	profile: {
		name: 'nick anderson',
		tagline: 'i make sure ideas survive long enough to matter.',
		proclamation: '', // TODO
	},
	site: {
		vcs: 'https://github.com/iamnande/iamnande',
		nav: [
			{ name: 'philosophy', to: '/philosophy' },
			{ name: 'curriculum vitae', to: '/curriculum-vitae', tooltip: '↓ nick-anderson_resume.pdf' },
			{ name: 'colophon', to: '/colophon' },
		],
	}
})
