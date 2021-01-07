<template>
  <div class="forms">
    <input
      type="number"
      class="forms__input"
      v-model="value"
      placeholder="Enter currency ₴ or $"
    />
    <div class="forms-btn">
      <button @click="getCount" class="forms-btn__item">Count</button>
      <button
        class="forms-btn__item forms-btn__item--reset"
        type="reset"
        @click="value = ''"
      >Clear</button>
    </div>
    <p v-if="isValid" class="forms__warning">
      This value must be greater than 0
    </p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "forms",
  data: () => ({
    value: null,
    isValid: false,
  }),
  computed: {},
  methods: {
    ...mapMutations({
      getValue: "SET_VALUE",
    }),
    getCount() {
      if (+this.value <= 0) {
        this.isValid = true;
      }

      if (
        +this.value != "" &&
        +this.value == Number(+this.value) &&
        +this.value > 0
      ) {
        this.getValue(this.value);
        this.$router.push("/convert");
      }
    },
  },
};
</script>

<style lang="scss">
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

  &__warning {
    color: red;
    margin: 10px 0 0;
  }
}
</style>

