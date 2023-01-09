import NotFound from "../components/Includes/NotFound";

//Components
import Realestate from '../components/pages/Realestate'

const routes = [
    {
        path: "/",
        component: Realestate,
        protectedRoute: false,
    },
    {
        component: NotFound, // This should remain last
    },
]


export default routes;