<template>
  <div class="forms">
    <input type="number" class="forms__input" v-model="count" placeholder="Money" />
    <div class="forms-btn">
      <router-link
        v-if="this.count != '' && this.count == Number(this.count)"
        :to="this.link"
        @click.prevent="getCount"
        class="forms-btn__item"
      >Count</router-link>
      <button class="forms-btn__item forms-btn__item--reset" type="reset" @click="reset">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "forms",
  data() {
    return {
      count: "",
      link: "/convert"
    };
  },
  methods: {
    reset() {
      this.count = "";
    },
    getCount() {
      return console.log(this.count);
    }
  }
};
</script>

<style lang="scss" scoped>
.forms {
  width: 300px;
  margin: 200px auto 0;
  padding: 50px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &__input {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 200px;
    border-bottom: 1px solid blue;
    padding: 10px;
  }

  &-btn {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    &__item {
      cursor: pointer;
      padding: 10px;
      color: #fff;
      background-color: blue;
      border-radius: 5px;

      &:active,
      &:focus {
        box-shadow: 1px 0 1px 1px rgb(40, 102, 138);
      }
    }
  }
}
</style>

