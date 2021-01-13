<template>
  <div class="home body">
    <NavBar id="top"/>
    <div class="container">
      <Profile :name="'snoozedata'" />
      <Profile :name="'savethatbox'" />
      <Profile :name="'secondrefill'" />
      <Profile :name="'415lens'" />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "../../components/bars/NavBar";
import FooterBar from "../../components/bars/FooterBar";

import Profile from "../../components/Profile";

export default {
  name: "Home",
  components: {
    NavBar,
    FooterBar,
    Profile
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
