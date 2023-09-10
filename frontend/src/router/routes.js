import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' component={App}>
      {/* <Route path='about' component={About} /> */}
    </Route>
  )
);

export default routes;
