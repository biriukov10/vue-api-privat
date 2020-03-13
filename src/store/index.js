import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    radio: '',
    count: '',
    url: "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",
    getNum: null,
    uahValue: "₴",
    usdValue: '$'
  },
  getters: {
    reset(state) {
      if (state.count != '') {
        state.count = '';
      }
    },
  },
  mutations: {
  },
  actions: {
    getConvertNum() {
      axios
        .get(this.state.url)
        .then(response => {
          if (this.state.radio == 'usd') {
            this.state.getNum = (response.data[0].sale * this.state.count).toFixed(2) + this.state.uahValue;
          }
          else if (this.state.radio == 'uah') {
            this.state.getNum = (this.state.count / response.data[0].sale).toFixed(1) + this.state.usdValue;
          }
        })
        .catch(error => console.log(error));
    }
  },
  modules: {
  },
})
