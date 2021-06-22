<template>
    <div id="app">
        <topHeader></topHeader>
        <carousel />
        <router-view/>
        <footerMain />
    </div>
</template>

<script>
    import topHeader from './components/top-header'
    import carousel from './components/carousel'
    import footerMain from './components/footer-main'

    export default {
        name: 'App',
        components: {
            topHeader,
            carousel,
            footerMain
        }
    }
</script>
