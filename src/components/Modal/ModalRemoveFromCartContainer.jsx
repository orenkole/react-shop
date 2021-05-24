import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItemsArtsAC } from '../../redux/items/items-action-creators';
import { closeModalAC } from '../../redux/modal/modal-action-creators'
import { Modal } from './Modal.component'

function ModalRemoveFromCartContainer() {
  const dispatch = useDispatch();

  const cartItemsArts = useSelector(state => { return state.itemsData.cartItemsArts });
  const deleteFromCartArt = useSelector(state => { return state.itemsData.deleteFromCartArt })

  const deleteItemFromCart = () => {
    const newCartItemsArts = cartItemsArts.filter(articul => (articul !== deleteFromCartArt));
    dispatch(setCartItemsArtsAC(newCartItemsArts));
    localStorage.setItem("cartItemsArts", JSON.stringify(newCartItemsArts));
  }

  return (
    <Modal
      closeModalHandler={() => {dispatch(closeModalAC())}}
      onApprove={deleteItemFromCart}
      text="Delete item from cart?"
    />
  )
}

export default ModalRemoveFromCartContainer
