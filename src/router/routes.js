export default [
    {
        path: '/',
        name: 'Login',
        component: () => import ('@/views/Login'),
    },
    //服务员首页
    {
        path: '/waiterHomePage',
        name: 'WaiterHomePage',
        component: () => import ('@/views/waiter/WaiterHomePage'),
    }
]