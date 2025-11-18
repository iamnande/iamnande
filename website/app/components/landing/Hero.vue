<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
const { footer, global } = useAppConfig()

interface SetupCategory {
    name: string
    items: PageLink[]
}

const devSetup = ref({
    network: {
        name: 'Network',
        items: [
            {
                name: 'Gateway',
                description: 'Ubiquiti Cloud Gateway Ultra',
                icon: 'i-lucide-router',
                to: 'https://store.ui.com/us/en/category/all-cloud-gateways/products/ucg-ultra',
                target: '_blank',
            },
            {
                name: 'Switch',
                description: 'Ubiquiti Lite 8 PoE',
                icon: 'i-lucide-chevrons-left-right-ellipsis',
                to: 'https://store.ui.com/us/en/category/all-switching/products/usw-lite-8-poe',
                target: '_blank',
            },
            {
                name: 'Access Points',
                description: 'Ubiquiti U6 In-Wall',
                icon: 'i-lucide-house-wifi',
                to: 'https://store.ui.com/us/en/category/all-wifi/products/u6-iw',
                target: '_blank',
            },
        ],
    },
    hardware: {
        name: 'Hardware',
        items: [
            {
                name: 'Workstation',
                description: 'Macbook Air 13", M4, 2025',
                icon: 'i-lucide-laptop',
                to: 'https://www.fiftyfifty.one/',
                target: '_blank',
            },
            {
                name: 'Monitor',
                description: 'GIGABYTE 32", OLED, 240hz',
                icon: 'i-lucide-monitor',
                to: 'https://www.gigabyte.com/Monitor/MO32U2',
                target: '_blank',
            },
            {
                name: 'Webcam',
                description: 'Logitech Brio 4K',
                icon: 'i-lucide-webcam',
                to: 'https://www.logi.com/en-gb/shop/p/brio-4k',
                target: '_blank',
            },
            {
                name: 'Keyboard',
                description: 'Kinesis Advantage2',
                icon: 'i-lucide-keyboard',
                to: 'https://kinesis-ergo.com/shop/advantage2/',
                target: '_blank',
            },
            {
                name: 'Mouse',
                description: 'Logitech G502',
                icon: 'i-lucide-mouse',
                to: 'https://www.logitechg.com/en-us/shop/p/g502-hero-gaming-mouse',
                target: '_blank',
            },
        ],
    },
    software: {
        name: 'Software',
        items: [
            {
                name: 'Web Browser',
                description: 'Zen (w/ Vimium)',
                icon: 'i-lucide-hat-glasses',
                to: 'https://zen-browser.app/',
                target: '_blank',
            },
            {
                name: 'Code Editor',
                description: 'Neovim',
                icon: 'i-lucide-braces',
                to: 'https://neovim.io/',
                target: '_blank',
            },
            {
                name: 'Terminal',
                description: 'Kitty',
                icon: 'i-lucide-terminal',
                to: 'https://sw.kovidgoyal.net/kitty/',
                target: '_blank',
            },
            {
                name: 'Multiplexer',
                description: 'Zellij',
                icon: 'i-lucide-picture-in-picture-2',
                to: 'https://zellij.dev/',
                target: '_blank',
            },
        ],
    },
    audio: {
        name: 'Audio',
        items: [
            {
                name: 'DAC',
                description: 'Modi Plus',
                icon: 'i-lucide-volume-2',
                to: 'https://www.schiit.com/products/modi-plus',
                target: '_blank',
            },
            {
                name: 'Amp',
                description: 'Magni Unity',
                icon: 'i-lucide-speaker',
                to: 'https://www.schiit.com/products/magni-unity',
                target: '_blank',
            },
            {
                name: 'Headphones',
                description: 'Beyerdynamic DT 770',
                icon: 'i-lucide-headphones',
                to: 'https://north-america.beyerdynamic.com/p/dt-770-pro',
                target: '_blank',
            },
        ],
    },
} as Record<string, SetupCategory>)

defineProps<{
    page: IndexCollectionItem
}>()
</script>

<template>
    <UPageHero
        orientation="horizontal"
    >
        <template #title>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)'
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)'
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.1
                }"
                class="text-neutral"
            >
                {{ page.title }}
            </Motion>
        </template>

        <template #description>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)'
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)'
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.3
                }"
                class="text-gray-100"
            >
                {{ page.description }}
            </Motion>
        </template>

        <img
            src="/profesh.jpg"
            alt="App screenshot"
            class="w-90 h-auto mx-auto rounded-4xl grayscale-25 drop-shadow-xl rotate-2 shadow-2xl ring ring-default"
        />

        <template #links>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)'
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)'
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.5
                }"
            >
                <div class="flex items-center gap-10">
                    <UButton
                        icon="i-lucide-linkedin"
                        variant="solid"
                        size="lg"
                        color="primary"
                        class="py-4"
                    >
                        Let's Connect!
                    </UButton>
                    <USlideover
                        title="My Dev Setup"
                        description="Hardware, software, and everything between."
                        :close="{
                            color: 'primary',
                            variant: 'outline',
                            class: 'rounded-full'
                        }"
                    >
                        <UButton
                            label="My Dev Setup"
                            icon="i-lucide-code"
                            variant="subtle"
                            size="lg"
                            color="primary"
                            class="py-4"
                        />

                        <template #body>
                            <UPageList
                                v-for="(category, key) in devSetup"
                                :key="key"
                            >
                                <h3 class="my-2">{{ category.name }}</h3>
                                <USeparator />
                                <UPageCard
                                    v-for="(item, index) in category.items"
                                    :key="index"
                                    variant="ghost"
                                    :to="item.to"
                                    :target="item.target"
                                >
                                    <template #body>
                                        <UUser
                                            :name="item.name"
                                            :description="item.description"
                                            :avatar="{
                                                icon: item.icon,
                                                size: 'xl',
                                                ui: {
                                                    root: 'mr-2',
                                                    icon: 'text-primary',
                                                }
                                            }"
                                        />
                                    </template>
                                </UPageCard>
                            </UPageList>
                        </template>
                    </USlideover>
                </div>
            </Motion>
        </template>
    </UPageHero>
</template>
