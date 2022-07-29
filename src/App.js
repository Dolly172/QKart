import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import { ThemeProvider } from "@mui/system";
import Checkout from "./components/Checkout";


export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">

      <Router>
        
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
              <Products />
              {/* <ProductCard /> */}
            </Route>
            <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
          </div>
         
    </Router>
  


      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
