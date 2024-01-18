import { createStore } from 'vuex'
import authModule from '@/store/AuthStore'

const store = createStore({
  modules: {
    auth: authModule
  }
})

export default store