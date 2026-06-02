# restructure plan

component extraction + config-driven layout.

---

## step 1 — `app.config.ts`

create at project root. defines site-wide config accessible via `useAppConfig()`.

```ts
export default defineAppConfig({
  site: {
    name: 'nick anderson',
    tagline: 'i make sure ideas survive long enough to matter.',
  },
  nav: [
    { label: 'philosophy', to: '/philosophy' },
    { label: 'curriculum vitae', to: '/curriculum-vitae', tooltip: '↓ curriculum vitae.pdf' },
    { label: 'colophon', to: '/colophon' },
  ],
})
```

---

## step 2 — `app/components/AppNav.vue`

extract the `<header>` block from `default.vue`. scroll logic moves with it.
nav items loop via `v-for` over `config.nav`. tooltip conditional on `item.tooltip`.

---

## step 3 — `app/components/AppFooter.vue`

extract the `<footer>` block from `default.vue`.
name, tagline, nav items, pdf link all sourced from `useAppConfig()`.

---

## step 4 — simplify `default.vue`

```vue
<div class="min-h-screen flex flex-col">
  <AppNav />
  <main class="flex-1 pt-20">
    <slot />
  </main>
  <AppFooter />
</div>
```

layout is structural only — no content, no repetition.
