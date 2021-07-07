import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {languages} from "./langs";

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: languages
})

export default i18n