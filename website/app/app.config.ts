export default defineAppConfig({
  global: {
    picture: {
      dark: "https://avatars.githubusercontent.com/u/7806510?v=4",
      light: "https://avatars.githubusercontent.com/u/7806510?v=4",
      alt: "my profile picture",
    },
    email: "nick@morethq.com",
  },
  ui: {
    pageHero: {
      slots: {
        container:
          "flex flex-col lg:grid py-12 sm:py-24 lg:py-24 gap-16 sm:gap-y-24",
      },
    },
    colors: {
      primary: "stone",
    },
  },
  footer: {
    credits: `built with nuxt ❤`,
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/iamnande/iamnande",
        target: "_blank",
        "aria-label": "nick anderson on github",
      },
    ],
  },
});
