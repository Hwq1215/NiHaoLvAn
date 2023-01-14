<template>
  <div id="app">
    <KeepAlive>
      <router-view/>
    </KeepAlive>
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
