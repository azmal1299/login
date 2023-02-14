// import NotFound from "../components/Includes/NotFound";

//Components
import Login from '../components/pages/SignIn/index'
// import SignIn from '../components/pages/SignIn/index'
import Register from '../components/pages/SignIn/register'

const routes = [
    {
        path: "/",
        component: Login,
        protectedRoute: false,
    },
    {
        path: "/",
        component: Register,
        protectedRoute: false,
    },
    // {
        // component: NotFound, // This should remain last
    // },
]


export default routes;