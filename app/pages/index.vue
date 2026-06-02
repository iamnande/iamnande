<template>
  <div class="max-w-5xl mx-auto px-8 py-24 space-y-32">

    <!-- hero -->
    <section class="min-h-[calc(100vh-5rem)] flex flex-col justify-center space-y-6">
      <blockquote class="font-mono text-4xl text-fg">iron won't heat itself.</blockquote>
      <p class="font-mono text-sm text-fg/60">sr software engineer. platform, product, infrastructure - let's build a healthier internet.</p>
      <a href="#contact" class="font-mono text-sm text-accent hover:text-fg transition-colors">let's connect.</a>
    </section>

    <!-- current role -->
    <section class="space-y-8">
      <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">current role</h2>
      <div class="space-y-2">
        <p class="font-mono text-sm text-fg/60">ngrok · sr software engineer · sep '25 - present</p>
        <p class="font-mono text-sm text-fg/80">the tastiest blend of product and platform. building things that matter to developers, at a company that still believes in it's core mission.</p>
      </div>
    </section>

    <!-- work history -->
    <section class="space-y-8">
      <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">work history</h2>
      <div class="space-y-10">
        <div class="space-y-2">
          <p class="font-mono text-sm text-fg/60">kong · sr software engineer · jan '22 - aug '25</p>
          <p class="font-mono text-sm text-fg/80">api infrastructure, access control, and the unglamorous work that keeps distributed systems honest.</p>
        </div>
        <div class="space-y-2">
          <p class="font-mono text-sm text-fg/60">nike · lead software engineer · apr '14 - dec '21</p>
          <p class="font-mono text-sm text-fg/80">eight years, a handful of hats. cms to private cloud to developer platforms - each chapter built on the last.</p>
        </div>
        <div class="space-y-2">
          <p class="font-mono text-sm text-fg/60">u.s. bank · system admin · oct '12 - apr '14</p>
          <p class="font-mono text-sm text-fg/80">turned manual deployments into something repeatable. shipped google's yellow search blades for call center and public search.</p>
        </div>
        <div class="space-y-2">
          <p class="font-mono text-sm text-fg/60">u.s. army reserve · multi-role bridge platoon sergeant · mar '10 - aug '23</p>
          <p class="font-mono text-sm text-fg/80">thirteen years. crewmember to platoon sergeant - mastered the role before leading any of them.</p>
        </div>
      </div>
    </section>

    <!-- projects -->
    <section class="space-y-8">
      <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">projects</h2>
      <div class="space-y-10">
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm text-fg">cardmod</span>
            <span class="font-mono text-xs text-fg/40">[go, api, ff8, gaming]</span>
          </div>
          <p class="font-mono text-sm text-fg/80">ff8 magic calculation api. backend done. nuxt frontend coming.</p>
          <a href="https://github.com/iamnande/cardmod" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-accent/60 hover:text-accent transition-colors">↗ github</a>
        </div>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm text-fg">rawr</span>
            <span class="font-mono text-xs text-fg/40">[rust, authz, infrastructure]</span>
          </div>
          <p class="font-mono text-sm text-fg/80">righteous authorization with rust. pluggable authz system - in-memory for single process, distributed when you need it. on pause, not abandoned. shrimp is life.</p>
          <a href="https://github.com/iamnande/rawr" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-accent/60 hover:text-accent transition-colors">↗ github</a>
        </div>
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm text-fg">homelab</span>
            <span class="font-mono text-xs text-fg/40">[nix, infrastructure, self-hosted]</span>
          </div>
          <p class="font-mono text-sm text-fg/80">the journey to a home lab worth fighting for. more docs than code right now, that's half the point.</p>
          <a href="https://github.com/iamnande/homelab" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-accent/60 hover:text-accent transition-colors">↗ github</a>
        </div>
      </div>
    </section>

    <!-- contact -->
    <section id="contact" class="space-y-8">
      <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">contact</h2>
      <p class="font-mono text-sm text-fg/80">drop me a line</p>
      <div class="space-y-2">
        <a href="https://www.linkedin.com/in/iamnande" target="_blank" rel="noopener noreferrer" class="block font-mono text-sm text-fg/60 hover:text-fg transition-colors">↗ linkedin</a>
        <a href="https://github.com/iamnande" target="_blank" rel="noopener noreferrer" class="block font-mono text-sm text-fg/60 hover:text-fg transition-colors">↗ github</a>
        <a href="mailto:nick.mhq.synthetic350@passmail.net" class="block font-mono text-sm text-fg/60 hover:text-fg transition-colors">↗ email</a>
      </div>
    </section>

  </div>
</template>
