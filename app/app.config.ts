export default defineAppConfig({
  profile: {
    name: "nick anderson",
    tagline: "iron does not heat itself.",
    subheading:
      "software engineer. infrastructure, distributed systems, platforms, products -- let's build a better internet.",
    cta: "let's connect.",
    experiences: [
      {
        company: "ngrok",
        role: "sr software engineer",
        startDate: "2025-09",
        endDate: null,
        summary:
          "the tastiest blend of products and people. increasing the pace of innovation on the internet. shrimp is life.",
      },
      {
        company: "kong",
        role: "sr software engineer",
        startDate: "2022-01",
        endDate: "2025-08",
        summary:
          "reformed THE enterprise gateway into a hyper-growth giant. identity, authorization, distributed systems. everything a platform needs.",
      },
      {
        company: "nike",
        role: "lead software engineer",
        startDate: "2019-10",
        endDate: "2021-12",
        summary:
          "built THE engine (sdks, terraform providers, paas) capable of running the matrix.",
      },
      {
        company: "nike",
        role: "software engineer manager",
        startDate: "2018-09",
        endDate: "2019-10",
        summary:
          "devops & infrastructure. identity, networking, and observability models which scaled thousands of cloud accounts. half the team r&d, half embedded. adoption by presence & collaboration, not mandate.",
      },
      {
        company: "nike",
        role: "senior software engineer",
        startDate: "2014-04",
        endDate: "2018-09",
        summary:
          "converted from cms to platform engineer. moved nike.com off vendor-managed hardware to self-managed infrastructure (ucs/vmware+openstack). 17 weeks from boxes open to cutover. iamnande was born (iykyk).",
      },
      {
        company: "u.s. bank",
        role: "system administrator",
        startDate: "2012-03",
        endDate: "2014-04",
        summary:
          "started with teamsite and a myspace profile. stood up usbank.com & call-center search via google search appliance. automated everything in reach -- deployments, identity, audit reports. first taste of what's possible.",
      },
      {
        company: "u.s. army reserve",
        role: "platoon sergeant, multi-role bridge",
        startDate: "2010-03",
        endDate: "2023-08",
        summary:
          'kicked a TON of rocks before i led. learned how to "life" with the finest of engineers. trained hundres of humans and dozens of operators across units and nations.',
      },
    ],
  },
  projects: [
    {
      name: "cardmod",
      tags: ["go", "api", "ff8", "gaming"],
      description:
        "you ever wish a highly-specific game companion app existed to help craft character builds? i definitely didn't build my own calculator for card to magic refinement calculations for such a purpose. (shhh, don't tell my other projects)",
      url: "https://github.com/iamnande/cardmod",
    },
    {
      name: "rawr",
      tags: ["rust", "authz", "infrastructure"],
      description:
        "righteous authorization with rust -- like the hipster gods intended. lightning fast (20M checks/s), pluggable component architecture -- in-memory by default, distributed when you need it. no za for you.",
      url: "https://github.com/iamnande/rawr",
    },
    {
      name: "homelab",
      tags: ["nix", "infrastructure", "self-hosted"],
      description:
        "the journey to a home lab worth fighting for. more docs than code right now.",
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
