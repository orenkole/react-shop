import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFavItemsArtsAC, stageAddItemToCartAC } from '../../redux/items/items-action-creators';
import { openModalAC } from '../../redux/modal/modal-action-creators';
import { ItemCard } from './ItemCard.component'

function ItemCardContainer(props) {
  const {item, qtyInCart, isFav} = props;

  const dispatch = useDispatch();

  const favItemsArts = useSelector(state => { return state.itemsData.favItemsArts });

  const changeFavItemsHandler = (itemArticul) => {
    const isFav = favItemsArts.includes(itemArticul);
    const newFavItemsArts = isFav
      ? favItemsArts.filter(articul => articul !== itemArticul)
      : [...favItemsArts, itemArticul];
    dispatch(setFavItemsArtsAC(newFavItemsArts));
    localStorage.setItem("favItemsArts", JSON.stringify(newFavItemsArts));
  }

  return (
      <ItemCard 
        openModalHandler={() => {dispatch(openModalAC())}}
        changeFavItemsHandler={changeFavItemsHandler}
        stageAddCartItemArtHandler={(itemArticul) => {
          dispatch(stageAddItemToCartAC(itemArticul))
        }}
        key={item.articul}
        item={item}
        qtyInCart={qtyInCart}
        isFav={isFav}
      />
  )
}

export default ItemCardContainer
