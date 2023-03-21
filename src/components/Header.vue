<script setup lang="ts">
    console.log('hello header setup');
</script>

<template>
    <header>
        <picture class="logo">
            <a href="/">
                <img src="../assets/images/logo.png" />
            </a>
        </picture>
        <a class="button" id="contact-us" href="mailto:christine@dno.dev?subject=I'm reaching out from your site!">contact
            us</a>
    </header>
</template>