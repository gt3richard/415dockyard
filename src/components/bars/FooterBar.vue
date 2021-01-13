<template>
  <div class="footerbar navbar-dark bg-dark">
    <div class="container">
      <div class="row">
        <div class="col">
          <span>Questions? Contact Us at</span><br /><br />
        </div>
      </div>
      <div class="row">
        <div class="col">
          415dockyard@gmail.com
        </div>
      </div>

      <div class="row justify-content-center py-4">
        <div class="col-sm-3 col-md-2 fineprint">
          <a class="link" href="/doc/terms">Terms and Conditions</a>
        </div>
        <div class="col-sm-3 col-md-2 fineprint">
          <a class="link" href="/doc/privacy">Privacy Policy</a>
        </div>
        <div class="col-sm-3 col-md-2 fineprint">
          <a class="link" href="/doc/sitemap">Sitemap</a>
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
      gtag("event", "contact", {
        event_category: "engagement",
      });
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
.fineprint {
  font-size: 0.7em;
  white-space: nowrap;
  font-weight: 500;
}
</style>
