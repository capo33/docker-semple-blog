import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Index";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' component={App}>
      <Route path='about' component={Home} />
    </Route>
  )
);

export default routes;
