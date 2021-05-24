import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItemsArtsAC } from '../../redux/items/items-action-creators';
import { closeModalAC } from '../../redux/modal/modal-action-creators'
import { Modal } from './Modal.component'

function ModalAddToCartContainer() {
  const dispatch = useDispatch();

  const cartItemsArts = useSelector(state => { return state.itemsData.cartItemsArts });
  const addToCartArt = useSelector(state => { return state.itemsData.addToCartArt });

  const addCartItemsHandler = () => {
    const newCartItemsArts = [...cartItemsArts, addToCartArt];
    dispatch(setCartItemsArtsAC(newCartItemsArts));
    localStorage.setItem("cartItemsArts", JSON.stringify(newCartItemsArts));
  }

  return (
    <Modal
      closeModalHandler={() => {dispatch(closeModalAC())}}
      onApprove={addCartItemsHandler}
      text="Add item to cart?"
    />
  )
}

export default ModalAddToCartContainer
