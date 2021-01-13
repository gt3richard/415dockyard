<template>
  <div>
    <nav class="navbar">
      <a class="navbar-brand" href="/">
        <h1>415 Dockyard</h1>
      </a>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: { },
  props: [],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.list-group-item,
.navbar-toggler {
  background-color: inherit;
  border: 0;
  padding: 0.5em;
}
.btn {
  font-size: 1em;
  font-weight: 600;
}
.btn:active,
.btn:focus {
  outline: none !important;
  box-shadow: none;
}
</style>
