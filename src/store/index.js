import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    radioValue: '',
    getInitialValue: 0,
    getData: null,
  },
  getters: {
    countValue: state => state.getData
  },
  mutations: {
    SET_VALUE: (state, value) => state.getInitialValue = value,
    GET_RADIO_VALUE: (state, radio) => state.radioValue = radio,
    GET_DATA: (state, data) => {
      state.getData = {
        ...data[0] = {
          ticker: data[0].base_ccy,
          price: data[0].sale
        }
      }
    }
  },
  actions: {
    getConvertNum({commit}) {
      axios
        .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(response => {
          commit('GET_DATA', response.data)
        })
        .catch(error => console.log(error));
    }
  },
  modules: {
  },
})
