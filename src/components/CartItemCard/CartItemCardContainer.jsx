import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItemsArtsAC, setFavItemsArtsAC, stageDeleteItemFromCartAC } from '../../redux/items/items-action-creators';
import { openModalAC } from '../../redux/modal/modal-action-creators';
import { CartItemCard } from './CartItemCard.component'

function CartItemCardContainer(props) {

  const {item, qtyInCart, isFav, isLast} = props;

  const dispatch = useDispatch();

  const favItemsArts = useSelector(state => { return state.itemsData.favItemsArts });
  const cartItemsArts = useSelector(state => { return state.itemsData.cartItemsArts });

  const changeFavItemsHandler = (itemArticul) => {
    const isFav = favItemsArts.includes(itemArticul);
    const newFavItemsArts = isFav
      ? favItemsArts.filter(articul => articul !== itemArticul)
      : [...favItemsArts, itemArticul];
    dispatch(setFavItemsArtsAC(newFavItemsArts));
    localStorage.setItem("favItemsArts", JSON.stringify(newFavItemsArts));
  }

  const removeOneCartItem = (itemArticul) => {
    const newCartItemsArts = [
      ...cartItemsArts.slice(0, cartItemsArts.indexOf(itemArticul)),
      ...cartItemsArts.slice(cartItemsArts.indexOf(itemArticul) + 1)
    ];
    dispatch(setCartItemsArtsAC(newCartItemsArts));
    localStorage.setItem("cartItemsArts", JSON.stringify(newCartItemsArts));
  }

  const addOneCartItem = (itemArticul) => {
    const newCartItemsArts = [...cartItemsArts, itemArticul];
    dispatch(setCartItemsArtsAC(newCartItemsArts));
    localStorage.setItem("cartItemsArts", JSON.stringify(newCartItemsArts));
  }

  return (
    <CartItemCard 
      item={item}
      qtyInCart={qtyInCart}
      isFav={isFav}
      isLast={isLast}
      openModalHandler={() => {dispatch(openModalAC())}}
      changeFavItemsHandler={changeFavItemsHandler}
      stageDeleteItemFromCartArtHandler={(itemArticul) => {
        dispatch(stageDeleteItemFromCartAC(itemArticul));
      }}
      removeOneCartItem={removeOneCartItem}
      addOneCartItem={addOneCartItem}
    />
  )
}

export default CartItemCardContainer
