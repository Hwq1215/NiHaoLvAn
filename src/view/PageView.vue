<template>
    <div id="container">
            <Header class="header"></Header>
            <KeepAlive :max="15">
                <router-view />
            </KeepAlive>
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

