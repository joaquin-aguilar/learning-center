import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import Tooltip from 'primevue/tooltip'

import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";

const primeVueUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;
createApp(App)
    .use(PrimeVue, {theme:{preset: Material}, ripple: true, license: primeVueUiLicenseKey})
    .use(i18n)
    .mount('#app')
