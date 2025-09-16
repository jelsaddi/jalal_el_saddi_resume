import Vue from 'vue'
import { VueTyper } from 'vue-typer'

if (process.client) {
  Vue.component('vue-typer', VueTyper)
}
