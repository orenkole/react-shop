import React from "react";
import { useSelector } from "react-redux";
import ItemCardContainer from "../../components/ItemCard/ItemCardContainer";
import { ItemsList } from "../../components/ItemsList/ItemsList.component";
import ModalAddToCartContainer from "../../components/Modal/ModalAddToCartContainer";

const FavouritesPage = (props) => {

  const isLoadingSuccess = useSelector(state => { return state.itemsData.isLoadingSuccess })
  const isModalOpen = useSelector(state => { return state.modalData.isModalOpen })
  const items = useSelector(state => { return state.itemsData.items });
  const favItemsArts = useSelector(state => { return state.itemsData.favItemsArts });

  if (isLoadingSuccess) {
    const favItems = items.filter(item => favItemsArts.includes(item.articul))
    return (<>
      {
        favItems.length === 0 &&
        <div>No items found</div>
      }
      <ItemsList
        items={favItems}
        Card={ItemCardContainer}
      />
      { isModalOpen && <ModalAddToCartContainer />}
    </>)
  }
  return null;
}

export { FavouritesPage };