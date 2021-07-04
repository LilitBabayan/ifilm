<template>
    <div class="container p-2 q">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand ms-3" >
                    <img src="../assets/ifilm.png" width="120" class="d-inline-block align-top" alt="" id="movieIMG">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item mt-3">
                            <select class="border-0 p-0 shadow-none w-auto select" >
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </li>
                        <li class="nav-item">
                            <form class="flex-nowrap navbar navbar-light bg-transparent myForm" >
                                <input class="mr-lg-2 mx-3 shadow-none bg-transparent form-control input" placeholder="Search">
                                <button class="btn p-1" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <router-link to="#" class="text-decoration-none nav-link  pt-3"><p class="m-0 text-dark">Random</p></router-link>
                        <div class="form-check form-switch mt-3 pl-0 pl-lg-3 pr-0 pr-lg-3">
                            <input @click="modeToggle" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" >
                            <label class="form-check-label" for="flexSwitchCheckDefault"><p class="m-0">Night mode</p></label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "top-header",
        methods: {
            modeToggle() {
                let body = document.querySelector('body')
                if(!body.classList.contains('dark-mode')) {
                    body.classList.add('dark-mode')
                }else{
                    body.classList.remove('dark-mode')
                }
            },
        },
    }


</script>

<style lang="scss" scoped>
    @import "../sass/variables";

    .q {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
    }

    .select {
        color: #495057;
        transition: $dark-m-transition;
    }
    .select:focus{
        outline: none;
    }
    .input {
        border-radius: 50rem;
        font-size: 15px;
    }
    .input:focus {
        outline: none !important;
        border-color: #fe7900;
    }
    button {
        background-color: #fe7900;
        color: white;
        font-weight: bold;
        font-size: 13px;
    }
    button:hover {
        color: white;
    }

    .mode {
        color: rgba(0,0,0,.5);
        font-size: 18px;
    }
    .mode:hover {
        color: rgba(0,0,0,.7);
    }

    .form-check-input:checked {
        background-color: #ed7812;
        border-color: #ed7812;
    }

    .form-check-input:focus{
        box-shadow: none;
    }

</style>

