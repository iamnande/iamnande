# tech

## stack

| role        | choice                                    |
|-------------|-------------------------------------------|
| framework   | nuxt (v4.x)                               |
| components  | nuxt ui (v4.x)                            |
| scroll state| @vueuse/core                              |
| animation   | motion-v                                  |
| fonts       | fontsource (npm, self-hosted, no cdn)     |
| deployment  | vercel → dockerfile (caddy, static files) |

## fonts

| role                    | typeface               | package                               |
|-------------------------|------------------------|---------------------------------------|
| ui chrome, labels, nav  | geist mono             | @fontsource-variable/geist-mono       |
| article / body text     | atkinson hyperlegible  | @fontsource/atkinson-hyperlegible     |

## rendering

`nuxt generate` - static for initial deployment. 

SSR is a config change when we're ready to kick-out articles.

## content

manual for now. nuxt content is our eventuality once we've made our stack house
into a proper stack home.
