import React, { useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { MainPage } from "./pages/main-page/MainPage.component";
import { CartPage } from "./pages/cart-page/CartPage.component";
import { FavouritesPage } from "./pages/favourites-page/FavouritesPage.component";
import { Header } from "./components/Header/Header.component";
import {
  loadItemsAC,
  getFavItemsArtsAC,
  getCartItemsArtsAC,
} from "./redux/items/items-action-creators";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItemsAC());
    dispatch(getFavItemsArtsAC());
    dispatch(getCartItemsArtsAC());
  })

  return (<>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"><MainPage/></Route>
        <Route exact path="/favourites"><FavouritesPage/></Route>
        <Route exact path="/cart"><CartPage/></Route>
      </Switch>
    </BrowserRouter>
  </>)
}

export default App