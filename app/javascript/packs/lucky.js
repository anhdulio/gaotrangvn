import Vue from 'vue/dist/vue.esm'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/dist/vuetify'
import LuckyBtn from '../components/lucky-btn.vue'
import LuckyCard from '../components/lucky-card.vue'

document.addEventListener('turbolinks:load', () => {
  Vue.use(Vuetify)
  const app = new Vue({
    el: '#lucky',
    data: {
      main: "I'm feeling lucky",
      content: {
        highlight: {
          main: "darkness",
          flipped: "Bóng tối"
        },
        quote: {
          highlight: "darkness",
          main: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
          flipped: "Chỉ có ánh sáng mới dẵn lối khỏi bóng tối; chỉ có tình yêu mới làm xoa dịu được lòng thù hận",
          gradient: 'linear-gradient(153deg, #004c3e, #64ffd9)'
        },
        definition: {
          highlight: "darkness",
          main: "Darkness, the polar opposite to brightness, is understood as a lack of illumination or an absence of visible light.",
          flipped: "Bóng tối, sự đối lập với ánh sáng, được hiểu như sự thiếu cường độ ánh sáng hoặc không có sự xuất hiện của  ánh sáng nhìn thấy được",
          gradient: 'linear-gradient(153deg, #01579b, #3fc4fe)'          
        }
      }
    },
    components: { LuckyCard }
  })
})
