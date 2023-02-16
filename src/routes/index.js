// import NotFound from "../components/Includes/NotFound";

//Components
import Login from '../components/pages/SignIn/index'
import Register from '../components/pages/SignIn/register'
import Home from '../components/pages/SignIn/home'
// import Home from '../components/pages/SignIn/home'

const routes = [
    {
        path: "/",
        component: Login,
        protectedRoute: false,
    },
    {
        path: "/register",
        component: Register,
        protectedRoute: false,
    },
    {
        path:"/home",
        component: Home,
        protectedRoute:false,
    }
    // {
        // component: NotFound, // This should remain last
    // },
]


export default routes;