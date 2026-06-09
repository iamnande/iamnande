export default defineAppConfig({
  profile: {
    name: "nick anderson",
    tagline: "iron won't heat itself.",
    subheading:
      "software engineer. infrastructure, distributed systems, platforms, products -- let's build a healthier internet.",
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
        summary:
          "built THE platform. paas, routing, certs, the works. go, containers, terraform, aws -- new ground.",
      },
      {
        company: "nike",
        role: "software engineer manager",
        startDate: "2018-09",
        endDate: "2019-10",
        summary:
          "cloud architecture, ci/cd, the account model that scaled. security protocols at the governance level. half the team r&d, half embedded. adoption by presence, not mandate.",
      },
      {
        company: "nike",
        role: "senior software engineer",
        startDate: "2014-04",
        endDate: "2018-09",
        summary:
          "cms to platform engineer. moved nike.com from vendor to infrastructure we owned. slept under the desk. nande was born.",
      },
      {
        company: "u.s. bank",
        role: "system administrator",
        startDate: "2012-03",
        endDate: "2014-04",
        summary:
          "started with teamsite and a myspace profile. automated everything in reach -- deployments, identity, marketing sql with the dba team. first taste of what's possible. always present.",
      },
      {
        company: "u.s. army reserve",
        role: "multi-role bridge company platoon sergeant",
        startDate: "2010-03",
        endDate: "2023-08",
        summary:
          "people first, then the mission. pv2 to platoon sergeant, every role earned. three simultaneous rafts in blackout. trained operators across units and nations. achieved in spite of. life was the lesson.",
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
        "righteous authorization with rust. pluggable authz system -- in-memory for single process, distributed when you need it. on pause, not abandoned. shrimp is life.",
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
