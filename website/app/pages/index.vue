<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
    return queryCollection('index').first()
})
if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
        fatal: true
    })
}

const quotes = ref([
    {
        "quote": "Medicine, law, business, engineering… these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love… these are what we stay alive for.",
        "user": {
            "name": "John Keating",
            "description": "Dead Poets Society",
            "avatar": {
                "src": "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                "alt": "John Keating"
            }
        }
    },
    {
        "quote": "However difficult the moment, however frustrating the hour, it will not be long, because truth crushed to earth will rise again. How long? Not long, because no lie can live forever. How long? Not long, because you shall reap what you sow. How long? Not long, because the arc of the moral universe is long, but it bends toward justice.",
        "user": {
            "name": "Martin Luther King Jr.",
            "description": "Civil Rights Leader",
            "avatar": {
                "src": "https://karsh.org/wordpress/wp-content/uploads/2016/10/Yousuf-Karsh-Martin-Luther-King-1962-1574x1960.jpg",
                "alt": "Martin Luther King Jr."
            }
        }
    },
    {
        "quote": "Don't be ashamed to need help. Like a soldier storming a wall, you have a mission to accomplish. And if you've been wounded and you need a comrade to pull you up? So what?",
        "user": {
            "name": "Marcus Aurelius",
            "description": "Meditations",
            "avatar": {
                "src": "https://i.pinimg.com/736x/02/ac/53/02ac5307454e22692309ea466f946c58.jpg",
                "alt": "Marcus Aurelius"
            }
        }
    },
    {
        "quote": "More pursuit than study lately. You see, I cannot find him. It's been twenty years now. I am starting to lose confidence. I just work for Vizzini to pay the bills. There's not a lot of money in revenge.",
        "user": {
            "name": "Inigo Montoya",
            "description": "The Princess Bride",
            "avatar": {
                "src": "https://cdn.britannica.com/67/260667-050-6C1FF2CD/publicity-still-from-film-the-princess-bride-1987.jpg",
                "alt": "Inigo Montoya"
            }
        }
    },
    {
        "quote": "First got it when he was six, didn't know any tricks. Matter of fact, first time he got on it, he slipped. Landed on his hip and busted his lip. For a week he had to talk with a lisp, like thisss... Now we can end the story right here. But shorty didn't quit, it was something in the air. Yeah, he said it was something so appealing. He couldn't fight the feeling, something about it. He knew he couldn't doubt it, couldn't understand it. Branded, since the first kickflip he landed, ugh (Woo)",
        "user": {
            "name": "Lupe Fiasco",
            "description": "Kick, Push",
            "avatar": {
                "src": "https://content-images.p-cdn.com/images/1a/ca/08/90/92be4a9b94096767c09679a3/_500W_500H.jpg",
                "alt": "Lupe Fiasco"
            }
        }
    },
    {
        "quote": "After all this time? Always.",
        "user": {
            "name": "Professors Snape",
            "description": "Harry Potter and the Deathly Hallows",
            "avatar": {
                "src": "https://cdn.costumewall.com/wp-content/uploads/2017/06/severus-snape.jpg",
                "alt": "Harry Potter and the Deathly Hallows"
            }
        }
    },
    {
        "quote": "You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.",
        "user": {
            "name": "Jane Goodall",
            "description": "",
            "avatar": {
                "src": "https://editorial01.shutterstock.com/preview/13871366ep/2015be93/Shutterstock_13871366ep.jpg",
                "alt": "Jane Goodall",
            }
        }
    },
    {
        "quote": "You've got to remember that these are just simple farmers. These are people of the land. The common clay of the new West. You know... morons.",
        "user": {
            "name": "Blazing Saddles",
            "description": "The Waco Kid (Jim)",
            "avatar": {
                "src": "https://hollywoodinhidef.com/wp-content/uploads/blazing-sheriff-welcome-720x640.jpg",
                "alt": "Blazing Saddles"
            }
        }
    },
    {
        "quote": " It is strange to think, I haven't seen you since a month. I have seen the new moon, but not you. I have seen sunsets and sunrises, but nothing of your beautiful face. The pieces of my broken heart are so small that they could be passed through the eye of a needle. I miss you like the sun misses the flower; like the sun misses the flower in the depths of winter. Instead of beauty to direct its light to, the heart hardens like the frozen world your absence has banished me to. I next compete in the city of Paris, I will find it empty and in the winter if you are not there. Hope guides me, that is what gets me through the day and the night. The hope that after you're gone from my sight, it will not be the last time that I look upon you.",
        "user": {
            "name": "A Knight's Tale",
            "description": "William Thatcher",
            "avatar": {
                "src": "https://image.tmdb.org/t/p/original/alqtTd5TFZhftC7B9HLYJHsDx89.jpg",
                "alt": "William Thatcher"
            }
        }
    },
    {
        "quote": "Love isn’t something that we invented. It’s observable. Powerful. It has to mean something. Maybe it means something more, something we can’t yet understand. Maybe it’s some evidence, some artifact of a higher dimension that we can’t consciously perceive. Love is the one thing that we’re capable of perceiving that transcends dimensions of time and space.",
        "user": {
            "name": "Interstallar",
            "description": "Brand",
            "avatar": {
                "src": "https://pbs.twimg.com/ext_tw_video_thumb/1654624712650268672/pu/img/VZbiSv9UyGXnyPpR.jpg",
                "alt": "Interstellar"
            }
        }
    }
])

useSeoMeta({
    title: page.value?.seo.title || page.value?.title,
    ogTitle: page.value?.seo.title || page.value?.title,
    description: page.value?.seo.description || page.value?.description,
    ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
    <UPage v-if="page">
        <LandingHero :page />

        <USeparator
            color="primary"
            icon="i-simple-icons-skeleton"
        />

        <UPageHeader 
            title="a peek into my brain"
            class="mt-10 flex items-center justify-center"
        />
        <UPageColumns class="mt-10 mb-20">
            <UPageCard
                v-for="(quote, index) in quotes"
                :key="index"
                variant="subtle"
                :description="quote.quote"
                :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
            >
                <template #footer>
                    <UUser v-bind="quote.user" size="xl" />
                </template>
            </UPageCard>
        </UPageColumns>
    </UPage>
</template>
