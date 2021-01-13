<template>
  <div class="home body">
    <NavBar id="top"/>
    <div class="container">
      HomePage
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import FooterBar from "../../components/bars/FooterBar";

export default {
  name: "Home",
  components: {
    NavBar,
    FooterBar,
  },
  created() {
    this.track();
  },
  destroyed() {
  },
  methods: {
    track() {
      // eslint-disable-next-line
      gtag("config", "UA-170201347-1", {
        page_title: "home",
        page_location: window.location.host,
        page_path: "/",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
