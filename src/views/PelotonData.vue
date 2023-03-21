<script setup lang="ts">
import Header from '../components/Header.vue'
import PelotonData from '../components/PelotonData.vue'
</script>

<template>
    <Header></Header>
    <peloton-data></peloton-data>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
