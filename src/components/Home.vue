<template>
  <div class="forms">
    <input
      type="number"
      class="forms__input"
      v-model="$store.state.count"
      placeholder="Enter currency ₴ or $"
    />
    <div class="forms-btn">
      <button @click="getCount" :to="this.link" class="forms-btn__item">Count</button>
      <button
        class="forms-btn__item forms-btn__item--reset"
        type="reset"
        @click="$store.getters.reset;"
      >Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "forms",
  data() {
    return {
      link: "/convert"
    };
  },
  methods: {
    getCount() {
      if (
        this.$store.state.count != "" &&
        this.$store.state.count == Number(this.$store.state.count)
      ) {
        this.$router.push(this.link);
      }
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

    &::placeholder {
      font-size: 0.875rem;
      letter-spacing: 1px;
    }

    &:focus,
    &:active {
      box-shadow: 0 2px 0 0 #51cbee;
      border-color: transparent;
    }
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
      border: 1px solid transparent;
      transition: 0.3s;

      &:active,
      &:focus {
        box-shadow: 1px 1px 1px 1px rgb(40, 102, 138);
      }

      &:hover {
        box-shadow: 0px 0px 4px 2px #f38c06;
      }
    }
  }
}
</style>

