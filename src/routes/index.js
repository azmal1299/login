// import NotFound from "../components/Includes/NotFound";

//Components
import Register from '../components/pages/register/register'
import Login from '../components/pages/SignIn/index'
import Home from '../components/pages/home/home'
import About from '../components/pages/about/about'
import Contact from '../components/pages/contact/contact'
import Cars from '../components/pages/cars/cars'
// import Home from '../components/pages/SignIn/home'
// import Footer from '../components/shared/footer'
import Home1 from '../components/pages/home1/home1'

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
        path:"/contact",
        component: Contact,
        protectedRoute:false,
    },

    {
        path:"/cars",
        component: Cars,
        protectedRoute:false,
    },
    // {
    //     path:"/footer",
    //     component: Footer,
    //     protectedRoute:false,
    // },
    {
        path: "/home1",
        component: Home1,
        protectedRoute: false,
    },
    // {
        // component: NotFound, // This should remain last
    // },
]


export default routes;