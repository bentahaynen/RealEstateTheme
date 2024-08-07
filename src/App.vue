<template>
  <div id="app">
    <MainNavbar/>
    <router-view />
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';

export default {
  name: 'App',
  components: {
    MainNavbar,
  },
};
</script>

<style>
/* Genel stil ayarları buraya gelecek */
</style>
