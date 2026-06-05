export default defineAppConfig({
	profile: {
		name: 'nick anderson',
		tagline: 'iron won\'t heat itself.',
		subheading: 'software engineer. infrastructure, distributed systems, platforms, products - let\'s build a healthier internet.',
		cta: 'let\'s connect.',
		experiences: [
			{
				company: 'ngrok',
				role: 'sr software engineer',
				startDate: '2025-09',
				endDate: null,
				summary: 'the tastiest blend of product and platform. building things that matter to developers, ...',
			},
			{
				company: 'kong',
				role: 'sr software engineer',
				startDate: '2022-01',
				endDate: '2025-08',
				summary: 'identity & access management, distributed-systems, and platforms supporting AI/API/Event gateway products.'
			},
			{
				company: 'nike',
				role: 'lead software engineer',
				startDate: '2022-01',
				endDate: '2025-08',
				summary: 'identity & access management, distributed-systems, and platforms supporting AI/API/Event gateway products.'
			},
			{
				company: 'nike',
				role: 'software engineer manager',
				startDate: '2022-01',
				endDate: '2025-08',
				summary: 'identity & access management, distributed-systems, and platforms supporting AI/API/Event gateway products.'
			},
			{
				company: 'nike',
				role: 'senior software engineer',
				startDate: '2022-01',
				endDate: '2025-08',
				summary: 'platform automation'
			},
			{
				company: 'u.s. bank',
				role: 'system administrator',
				startDate: '2012-08',
				endDate: '2014-04',
				summary: 'automating enterprise CMS and search systems for usbank.com and call centers.'
			}
		],
	},
	projects: [
		{
			name: 'cardmod',
			tags: ['go', 'api', 'ff8', 'gaming'],
			description: 'ff8 magic calculation api. backend done. nuxt frontend coming.',
			url: 'https://github.com/iamnande/cardmod',
		},
		{
			name: 'rawr',
			tags: ['rust', 'authz', 'infrastructure'],
			description: 'righteous authorization with rust. pluggable authz system - in-memory for single process, distributed when you need it. on pause, not abandoned. shrimp is life.',
			url: 'https://github.com/iamnande/rawr',
		},
		{
			name: 'homelab',
			tags: ['nix', 'infrastructure', 'self-hosted'],
			description: 'the journey to a home lab worth fighting for. more docs than code right now, that\'s half the point.',
			url: 'https://github.com/iamnande/homelab',
		},
	],
	contact: [
		{ label: 'linkedin', url: 'https://www.linkedin.com/in/iamnande' },
		{ label: 'github', url: 'https://github.com/iamnande' },
		{ label: 'email', url: 'mailto:nick.mhq.synthetic350@passmail.net' },
	],
	site: {
		vcs: 'https://github.com/iamnande/iamnande',
		nav: [
			{ name: 'philosophy', to: '/philosophy' },
			{ name: 'curriculum vitae', to: '/curriculum-vitae', tooltip: '↓ nick-anderson_resume.pdf' },
			{ name: 'colophon', to: '/colophon' },
		],
	}
})
