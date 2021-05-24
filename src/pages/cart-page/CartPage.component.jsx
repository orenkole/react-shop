import React from "react";
import { useSelector } from "react-redux";
import CartItemCardContainer from "../../components/CartItemCard/CartItemCardContainer";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { ItemsList } from "../../components/ItemsList/ItemsList.component";
import ModalRemoveFromCartContainer from "../../components/Modal/ModalRemoveFromCartContainer";

const CartPage = (props) => {

  const isLoadingSuccess = useSelector(state => { return state.itemsData.isLoadingSuccess })
  const isModalOpen = useSelector(state => { return state.modalData.isModalOpen })
  const items = useSelector(state => { return state.itemsData.items });
  const cartItemsArts = useSelector(state => { return state.itemsData.cartItemsArts });

  if (isLoadingSuccess) {
    const cartItems = items.filter(
      item => cartItemsArts.includes(item.articul)
    )

    return (<>
      {
        cartItems.length === 0 &&
        <div>No items found</div>
      }
      <ItemsList
        items={cartItems}
        Card={CartItemCardContainer}
      />
      <CheckoutForm />
      { isModalOpen && <ModalRemoveFromCartContainer />}
    </>)
  }
  return null;
}

export { CartPage };