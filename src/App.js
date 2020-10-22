import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Marques from "./components/Marques";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Products from "./components/Products";
import CreateProduct from "./components/products/CreateProduct";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/marques" component={Marques} />
            <Route path="/categories" component={Categories} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/products/new" component={CreateProduct} />
            <Route exact path="/" component={Products} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
