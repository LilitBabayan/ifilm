<template>
    <div id="app">
        <router-view :key="$i18n.locale"/>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>
