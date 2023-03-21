<script setup lang="ts">
console.log('hello ProjectSection setup');
</script>

<template>
    <article>
        <p class="project-title">Some of our latest projects:</p>
        <div class="projects">
            <section>
                <div class="project">
                    <svg viewBox="0 0 200 200">
                        <path d="" fill="#4e736e"></path>
                    </svg>
                    <div class="overlay"><a href="/dailyplanner">Daily Planner</a></div>
                </div>
            </section>
            <section>
                <div class="project">
                    <svg viewBox="0 0 200 200">
                        <path d="" fill="#d9a53a"></path>
                    </svg>
                    <div class="overlay"><a href="">Destiny Discord Bot</a></div>
                </div>
            </section>
            <section>
                <div class="project">
                    <svg viewBox="0 0 200 200">
                        <path d="" fill="#2c215a"></path>
                    </svg>
                    <div class="overlay"><a href="">Poke-App</a></div>
                </div>
            </section>
            <section>
                <div class="project">
                    <svg viewBox="0 0 200 200">
                        <path d="" fill="#be1e2d"></path>
                    </svg>
                    <div class="overlay"><a href="">Was I Rugged?</a></div>
                </div>
            </section>
        </div>
    </article>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
