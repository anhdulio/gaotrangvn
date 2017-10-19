import Vue from 'vue/dist/vue.esm'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/dist/vuetify'
import LuckyBtn from '../components/lucky-btn.vue'

document.addEventListener('turbolinks:load', () => {
  Vue.use(Vuetify)
  const app = new Vue({
    el: '#lucky',
    data: {
      message: "Can you say hello?",
      lorem: "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."
    },
    components: { LuckyBtn }
  })
})
