import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import { Home, Singlegame } from "../pages/Index";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' component={App}>
      <Route path='' element={<Home />} />
      <Route path=':gameId' element={<Singlegame />} />
    </Route>
  )
);

export default routes;
