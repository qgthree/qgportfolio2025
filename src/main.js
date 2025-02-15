import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql, { cacheExchange, fetchExchange } from '@urql/vue';
import App from './App.vue'
import router from './router'

import './assets/css/app.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(urql, {
  url: 'http://localhost:4000/',
  exchanges: [cacheExchange, fetchExchange]
});

app.mount('#app')
