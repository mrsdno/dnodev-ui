import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePelotonStore = defineStore('peloton', {
  state: () => {
    if (localStorage.getItem("userInfo") == true) {
      const userInfo = (JSON.parse(localStorage.getItem("userInfo")))
      return userInfo;
    }
    return {
        userId: '',
        sessionId: ''
    }
  },
  actions: {
    async loginUser(username: string, password: string) {
      console.log('lets go')
      const userInfo = await axios
        .post('/auth/login', {
          username_or_email: username,
          password: password
        })
      console.log(userInfo);
      this.userId = userInfo.data.user_id;
      this.sessionId = userInfo.data.session_id;
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
      const moreUserInfo = await axios.get(`/api/user/${this.userId}`)
      console.log('here is more user info')
      console.log(moreUserInfo)
    },
    
  }
})
  
