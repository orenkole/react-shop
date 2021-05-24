import React from "react";
import { useSelector } from "react-redux";
import ItemCardContainer from "../../components/ItemCard/ItemCardContainer";
import { ItemsList } from "../../components/ItemsList/ItemsList.component";
import ModalAddToCartContainer from "../../components/Modal/ModalAddToCartContainer";

const MainPage = (props) => {

  const isModalOpen = useSelector(state => { return state.modalData.isModalOpen })
  const isLoadingSuccess = useSelector(state => { return state.itemsData.isLoadingSuccess })
  const items = useSelector(state => { return state.itemsData.items });

  if (isLoadingSuccess) {
    return (<>
      {
        items.length === 0 &&
        <div>No items found</div>
      }
      <ItemsList
        items={items}
        Card={ItemCardContainer}
      />
      { isModalOpen && <ModalAddToCartContainer /> }
    </>)
  }
  return null;
}

export { MainPage };