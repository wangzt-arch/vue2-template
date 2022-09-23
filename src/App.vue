<script setup>
console.log(import.meta);
console.log(import.meta.env);
</script>

<template>
  <div id="app">
    <div class="header">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
