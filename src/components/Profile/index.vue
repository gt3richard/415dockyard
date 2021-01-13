<template>
  <div class="profile body" :style="{ 
    'background-image': 'linear-gradient(' + profile.tint+','+ profile.tint+')'
    }">
    <div class="container">
      
      <div class="row info bg-dark align-items-center">

        <div class="col-4 img">
          <img :src="profile.logo">
        </div>
        <div class="col-6">

          <div class="row name">
            <div class="col-12">
              <a :href="profile.url">
              {{ profile.name }}
              </a>
            </div>
          </div>

          <div class="row url">
            <div class="col-12">
              <a :href="profile.url">
              {{ profile.url }}
              </a>
            </div>
          </div>

          <div class="row description">
            <div class="col-12">
              {{ profile.description }}
            </div>
          </div>
          
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>

import profile from "./profile.json";

export default {
  name: "Profile",
  props: [ "name" ],
  data() {
    return {
      profile: profile[this.name],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  padding-top: 2.5em;
  padding-bottom: 2.5em;
}
.ship {
  height: 100px;
  width: 100px;
}
.info {
  margin: 1em;
}
.info img {
  max-height: 150px;
  max-width: 100%;
  padding: 1em;
}
.bg-dark {
  color: white;
  border-radius: 15px;
}
.name {
  font-size: 2em;
  font-weight: bold;
}
.description {
  padding: 1em;
}
a:link, a:visited, a:active {
  color: white;
}
a:hover {
  color: white;
  text-decoration: none;
}
</style>
