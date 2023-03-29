<script lang="ts">
import { defineComponent, ref } from 'vue'

import { usePelotonStore } from '../stores/peloton';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

type user = {
    data: any
}

export default defineComponent({
    setup() {
        const store = usePelotonStore();

        return {
            store,
        }
    },
    data() {
        const x: user ={data:{}}
        return {
            username: '',
            password: '',
            user: x
        }
    },
    methods: {
        async login() {
            await axios
                .post('/api/peloton/login', {
                    username_or_email: this.username,
                    password: this.password
                }).then((userInfo) => {
                    console.log(userInfo.data.session_id)
                    this.get_data(userInfo.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        
        logout() {
            localStorage.setItem("userInfo", '');
            location.reload();
        },
        get_data(userInfo: any) {
            console.log(userInfo);
            axios.get(`/api/peloton/user?user_id=${userInfo.user_id}&session_id=${userInfo.session_id}`)
                .then((response) => {
                    console.log(response);
                    this.user = {data: response.data };
                })
                .catch((error) => {
                    console.log(error);
                })
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

    <h1>hi {{ user.data.username }}</h1>
    <h2>You are on a {{ user.data.streaks.current_weekly }} week streak.</h2>

    <button v-if="store.userId" @click="logout">Logout</button>
</template>
