<template>
  <div id="app">
    <Header class="header"></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* .header {
  position: fixed;
  width: 100%;
  z-index: 100;
} */
</style>
