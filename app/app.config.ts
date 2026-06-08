export default defineAppConfig({
  profile: {
    name: "nick anderson",
    tagline: "iron won't heat itself.",
    subheading:
      "software engineer. infrastructure, distributed systems, platforms, products - let's build a healthier internet.",
    cta: "let's connect.",
    experiences: [
      {
        company: "ngrok",
        role: "sr software engineer",
        startDate: "2025-09",
        endDate: null,
        summary: "real builders. a mission worth shipping toward. it shows.",
      },
      {
        company: "kong",
        role: "sr software engineer",
        startDate: "2022-01",
        endDate: "2025-08",
        summary:
          "the enterprise gateway. identity, authz, distributed-systems. publicly, at scale. systems hold, or don't.",
      },
      {
        company: "nike",
        role: "lead software engineer",
        startDate: "2019-10",
        endDate: "2021-12",
        summary: "", // TODO: dev tools, mdcat, paas, app registry, service mesh
      },
      {
        company: "nike",
        role: "software engineer manager",
        startDate: "2018-09",
        endDate: "2019-10",
        summary: "", // TODO
      },
      {
        company: "nike",
        role: "senior software engineer",
        startDate: "2014-04",
        endDate: "2018-09",
        summary: "", // TODO
      },
      {
        company: "u.s. bank",
        role: "system administrator",
        startDate: "2012-03",
        endDate: "2014-04",
        summary:
          "automating enterprise CMS and search systems for usbank.com and call centers.",
      },
      {
        company: "u.s. army reserve",
        role: "multi-role bridge company platoon sergeant",
        startDate: "2010-03",
        endDate: "2023-08",
        summary: "", // TODO
      },
    ],
  },
  projects: [
    {
      name: "cardmod",
      tags: ["go", "api", "ff8", "gaming"],
      description:
        "ff8 magic calculation api. backend done. nuxt frontend coming.",
      url: "https://github.com/iamnande/cardmod",
    },
    {
      name: "rawr",
      tags: ["rust", "authz", "infrastructure"],
      description:
        "righteous authorization with rust. pluggable authz system - in-memory for single process, distributed when you need it. on pause, not abandoned. shrimp is life.",
      url: "https://github.com/iamnande/rawr",
    },
    {
      name: "homelab",
      tags: ["nix", "infrastructure", "self-hosted"],
      description:
        "the journey to a home lab worth fighting for. more docs than code right now, that's half the point.",
      url: "https://github.com/iamnande/homelab",
    },
  ],
  contact: [
    { label: "linkedin", url: "https://www.linkedin.com/in/iamnande" },
    { label: "github", url: "https://github.com/iamnande" },
    { label: "email", url: "mailto:nick.mhq.synthetic350@passmail.net" },
  ],
  site: {
    vcs: "https://github.com/iamnande/iamnande",
    cv: { label: "↓ nick-anderson_resume.pdf", href: "#" },
    nav: [
      { name: "philosophy", to: "/philosophy" },
      {
        name: "colophon",
        to: "https://github.com/iamnande/iamnande/discussions/13",
        external: true,
      },
    ],
  },
});
