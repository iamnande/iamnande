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
    colors: {
      primary: "rose",
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
