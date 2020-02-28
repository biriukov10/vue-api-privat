<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "@/components/Home";
// import axios from "./plugins/axios";

export default {
  data() {
    return {};
  },
  components: {
    // startHome: Home
  },
  mounted() {
    // axios
    //   .get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    //   .then(response => {
    //     this.info = response;
    //   });
    fetch(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
    ).then(response => {
      return response.json();
    });
  }
};
</script>

<style lang="scss">
@import "assets/app.scss";
#app {
  text-align: center;
}
</style>
