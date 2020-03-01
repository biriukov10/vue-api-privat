<template>
  <div class="result">
    {{this.$store.state.getNum}}
    <router-link :to="link" class="result__btn">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "/"
    };
  },
  computed: {},
  mounted() {
    this.$store.dispatch("getConvertNum");
  }
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