<template>
    <footer class="footer-bg mt-5" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/8ChCpCYxh9YXusmHwcE9YzP0TSG.jpg) ">
        <iframe
                class="trailer-frame w-50 m-3"
                frameborder="0"

                src="https://www.youtube.com/embed/gmRKv7n2If8"></iframe>

        <div class="text-center bottom-content">
            <p>Copyright © 2019 iFilm.com. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'footer-main'
    }
</script>

<style lang="scss">
    .footer-bg {
        min-height: 650px;
        background-position: 50%;
        background-size: cover;
        background-attachment: fixed;
        transition: all .5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .footer-bg .trailer-frame {
        height: 400px;
    }
    .bottom-content {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
    }
    @media (max-width: 768px) {
        .footer-bg .trailer-frame {
            width: 100% !important;
            height: 200px;
        }
    }
</style>