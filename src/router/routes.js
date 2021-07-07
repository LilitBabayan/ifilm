const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/layouts/index'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/movie/:id',
                name: 'Movie',
                component: () => import('../views/Movie.vue')
            },
            {
                path: '/search/keyword=:keyword',
                name: 'Search',
                component: () => import('../views/Search.vue')
            },
        ]
    },
    {
        path: '/*',
        name: '404',
        component: () => import('../views/404.vue')
    }
]

export default routes