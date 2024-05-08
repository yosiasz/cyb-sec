import PathConstants from "./pathConstants"
import Functions from "../components/Functions"
import App from "../App"
import PageNotFound from "../components/PageNotFound"
import Categories from "../components/Categories"
import Reports from "../components/Reports"
import Implementations from "../components/Implementations"
import SubCategories from "../components/SubCategories"
import About from "../components/About"

//const ListGroup = React.lazy(() => import("../components/ListGroup"))
// other page components...
//const About = React.lazy(() => import("../pages/About"))

const AppRoutes = [
    { path: PathConstants.FUNCTIONS, element: <Functions />, errorElement: < PageNotFound />},
    { path: PathConstants.CATEGORIES, element: <Categories />, errorElement: < PageNotFound />},
    { path: PathConstants.SUBCATEGORIES, element: <SubCategories />, errorElement: < PageNotFound />},
    { path: PathConstants.IMPLEMENTATIONS, element: <Implementations />, errorElement: < PageNotFound />},
    { path: PathConstants.REPORTS, element: <Reports />, errorElement: < PageNotFound />},
    { path: PathConstants.HOME, element: <App /> },
    // other mappings ...
    { path: PathConstants.ABOUT, element: <About /> }
]

export default AppRoutes