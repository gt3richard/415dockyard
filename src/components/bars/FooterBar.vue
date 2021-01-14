<template>
  <div class="footerbar navbar-dark bg-dark">
    <div class="container">

      <div class="row logo">
        <div class="col-4 img">
          <img src="/static/logo.png">
        </div>

        <div class="col-4">
          <div class="row">
            <div class="col header">
              Questions? Contact Us at
            </div>
          </div>
          <div class="row">
            <div class="col fineprint">
              415dockyard@gmail.com
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="row">
            <div class="col header">
              Company
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row">
                <a class="link fineprint" href="/doc/terms">Terms and Conditions</a>
              </div>
              <div class="row">
                <a class="link fineprint" href="/doc/privacy">Privacy Policy</a>
              </div>
              <div class="row">
                <a class="link fineprint" href="/doc/sitemap">Sitemap</a>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {};
  },
  methods: {
    track: function (event) {
      // eslint-disable-next-line
      // gtag("event", "contact", {
      //   event_category: "engagement",
      // });
    },
  },
};
</script>

<style scoped>
.footerbar {
  padding: 3em;
  font-weight: 600;
  color: white;
}
.footerbar, a:link, a:visited, a:hover, a:active {
  color: white;
}
.col {
  text-align: left;
}
a {
  padding-left: 15px;
}
.header {
  padding-bottom: 1em;
}
.fineprint {
  font-size: .7em;
}
.logo {
  margin: 1em;
}
.logo img {
  max-height: 150px;
  max-width: 100%;
  padding: 1em;
}
</style>
