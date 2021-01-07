<template>
  <div class="result">
    {{ radio === 'usd' ? getResultConvert.toFixed(2) + countValue.ticker : getResultConvert.toFixed(2) + usdValue }}
    <router-link to="/" class="result__btn">Back to Home</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    uahValue: "₴",
    usdValue: "$",
  }),
  computed: {
    ...mapState({
      count: (state) => state.getInitialValue,
      radio: (state) => state.radioValue,
    }),
    ...mapGetters({
      countValue: "countValue",
    }),
    getResultConvert() {
      if (this.radio === "usd") {
        return this.countValue.price * +this.count;
      } else {
        return +this.count / this.countValue.price;
      }
    },
  },
};
</script>

<style lang="scss">
.result {
  width: 100%;
  max-width: 300px;
  padding: 50px 20px;
  border-radius: 5px;
  margin: 200px auto 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: rgb(54, 151, 54);
  color: #fff;
  font-size: 1.5rem;
  text-align: center;

  &__btn {
    display: block;
    width: 100%;
    max-width: 150px;
    cursor: pointer;
    padding: 10px 0;
    color: #fff;
    background-color: blue;
    border-radius: 5px;
    margin: 20px auto 0;
    font-size: 1rem;
    border: 1px solid transparent;
    transition: 0.3s;

    &:active,
    &:focus {
      box-shadow: 1px 0 1px 1px rgb(40, 102, 138);
    }

    &:hover {
      box-shadow: 0px 0px 4px 2px rgb(40, 102, 138);
    }
  }
}
</style>