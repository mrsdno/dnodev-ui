<script lang="ts">
import { defineComponent, ref } from 'vue'

import { usePelotonStore } from '@/stores/peloton';

export default defineComponent({
    setup() {
        const store = usePelotonStore();

        return {
            store,
        }
    },
    data() {
        return {
            username: '',
            password: ''

        }
    },
    methods: {
        login() {
            this.store.loginUser(this.username, this.password)
        },
        logout() {
            localStorage.setItem("userInfo", '');
            location.reload();
        }
    }
})
</script>

<template>
    <form v-if="!store.userId" @submit.prevent="login">
        <input v-model="username" placeholder="username">
        <input v-model="password" placeholder="password">
        <button>Login</button>
    </form>

    <h1>hi {{ store.userId }}</h1>

    <button v-if="store.userId" @click="logout">Logout</button>
</template>
