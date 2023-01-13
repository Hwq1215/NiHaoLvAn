<template>
    <div id="container">
        <Header class="header"></Header>
        <router-view />
        <Footer></Footer>
        <GoTop></GoTop>
    </div>
</template>
<script>
export default {
    name: 'PageView'
}
</script>
<style scoped>

</style>

