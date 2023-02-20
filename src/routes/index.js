// import NotFound from "../components/Includes/NotFound";

//Components
import Register from '../components/pages/SignIn/register'
import Login from '../components/pages/SignIn/index'
import Home from '../components/pages/SignIn/home'
import About from '../components/pages/SignIn/about'
import Contact from '../components/pages/SignIn/contact'
import Cars from '../components/pages/SignIn/cars'
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
    },
    {
        path:"/about",
        component: About,
        protectedRoute:false,
    },
    {
        path: "/contact",
        component: Contact,
        protectedRoute: false,
    },
    {
        path:"/cars",
        component: Cars,
        protectedRoute:false,
    },
   
    // {
        // component: NotFound, // This should remain last
    // },
]


export default routes;