<script setup lang="ts">
  console.log('hello HeroBlob setup');
</script>

<template>
  <article class="landing">
        <div class="landing-box">
          <div class="landing-text">
            <p>having fun.</p>
            <p>creating applications.</p>
            <p><b>together.</b></p>
          </div>
          <svg viewBox="0 0 200 200">
            <path d="" fill="#d9a53a"></path>
          </svg>
        </div>
      </article>

      <article class="about-us">
        <section class="person-holder">
          <p class="bottom-right">
            christine<br />
            <span class="fun-text">the creative</span>
          </p>
          <picture>
            <img
              src="../assets/images/christines_pfp.jpg"
              alt="Christine's profile picture - a drawing by AlyAsh of a blonde girl laughing so hard she is crying."
            />
          </picture>
        </section>

        <section class="person-holder">
          <p class="bottom-right">
            dave<br />
            <span class="fun-text">the professional</span>
          </p>
          <picture>
            <img
              src="../assets/images/daves_pfp.png"
              alt="Dave's profile picture - a low effort noun with a stapler for a head."
            />
          </picture>
        </section>
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
