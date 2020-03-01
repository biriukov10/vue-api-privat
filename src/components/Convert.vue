<template>
  <div class="convert-radio">
    <h2 class="convert-radio__title">Change to:</h2>
    <label for="uah" class="convert-radio__name">
      UAH to USD
      <input
        type="radio"
        v-model="$store.state.radio"
        class="convert-radio__radio"
        value="uah"
        name="price"
        id="uah"
      />
    </label>
    <label for="usd" class="convert-radio__name">
      USD to UAH
      <input
        type="radio"
        v-model="$store.state.radio"
        class="convert-radio__radio"
        value="usd"
        name="price"
        id="usd"
      />
    </label>
    <button @click="toResult" class="convert-radio__btn">Change</button>
    <router-link :to="linkBack" class="convert-radio__btn">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkBack: "/",
      linkTo: "result"
    };
  },
  methods: {
    toResult() {
      if (this.$store.state.radio != "") {
        this.$router.push(this.linkTo);
      }
    }
  }
};
</script>

<style lang="scss" scoped >
.convert-radio {
  width: 100%;
  max-width: 300px;
  margin: 200px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: orange;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &__title {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  &__name {
    cursor: pointer;
  }

  &__radio {
    cursor: pointer;
  }

  &__btn {
    display: inline-block;
    margin-top: 20px;
    color: #fff;
    background-color: blue;
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s;

    &:active,
    &:focus {
      box-shadow: 1px 1px 1px 1px rgb(40, 102, 138);
    }

    &:hover {
      box-shadow: 0px 0px 4px 2px rgb(40, 102, 138);
    }
  }
}
</style>