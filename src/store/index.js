import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    radio: '',
    count: '',
    state: null,
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",
    getNum: null
  },
  getters: {
    reset(state) {
      return state.count = '';
    },
  },
  mutations: {
  },
  actions: {
    getConvertNum() {
      axios
        .get(this.state.url)
        .then(response => {
          this.state.getNum = response.data[0].buy * this.state.count;
        })
        .catch(error => console.log(error));
    }
  },
  modules: {
  },
})
