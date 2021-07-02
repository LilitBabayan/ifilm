<template>
    <div class="container p-2 q">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand ms-3" >
                    <img src="../assets/ifilm.png" width="120" class="d-inline-block align-top" alt="">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item mt-3">
                            <select class="border-0 p-0 shadow-none w-auto bg-body" id="select">
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </li>
                        <li class="nav-item">
                            <form class="flex-nowrap navbar navbar-light bg-transparent" id="myForm">
                                <input class="mr-lg-2 mx-3 shadow-none bg-transparent form-control " placeholder="Search" id="input">
                                <button class="btn p-1" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                    <div class="d-flex justify-content-end">
                        <a href="#" class="text-decoration-none mode nav-link">Random</a>
                        <div class="form-check form-switch mt-2">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" >
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                        </div>
                        <a href="#" class="text-decoration-none mode nav-link ">Night mode</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "top-header"
    }
</script>

<style lang="scss" scoped>
    .q {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
    }
    #select {
        color: #495057;
    }
    #input {
        border-radius: 50rem;
        font-size: 15px;
    }
    #input:focus {
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
</style>