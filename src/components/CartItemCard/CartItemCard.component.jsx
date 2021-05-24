import React from "react";
import styles from "./CartItemCard.module.scss";

const CartItemCard = (props) => {
    
    const {
        item, 
        qtyInCart,
        isFav,
        isLast,
        changeFavItemsHandler,
        stageDeleteItemFromCartArtHandler,
        removeOneCartItem,
        addOneCartItem,
        openModalHandler,
    } = props;

    return (<>
        {   
            <li 
                className={styles["item-card"]}
            >
                <img 
                    className={styles["item-img"]}
                    src={item.path}
                    alt=""
                    width="100px" height="120px"
                />
                {
                    <img
                        className={styles["item-heart"]} 
                        src={isFav ? "./icons/heart-liked.svg" : "./icons/heart-empty.svg"} width="20" height="20" 
                        onClick={() => {changeFavItemsHandler(item.articul)}}
                        alt={item.articul}
                    />
                }
                <div className={styles["item-description"]}>
                    <h2 className={styles["item-title"]}>{item.name}</h2>
                    <div className={styles["item-price-row"]}>
                        <span className={styles["item-price"]}>{`$${item.price}`}</span>
                        <div className={styles["change-qty-btns"]}>
                            <button 
                                className={styles["remove-from-cart-btn"]}
                                onClick={() => {
                                    if(isLast) {
                                        openModalHandler();
                                        stageDeleteItemFromCartArtHandler(item.articul)
                                    } else {
                                        removeOneCartItem(item.articul)
                                    }
                                }}
                            >-</button>
                            {
                                qtyInCart > 0 && <span className={styles["qty-in-cart"]}>{qtyInCart}</span>
                            }
                            <button 
                                className={styles["add-to-cart-btn"]}
                                onClick={() => {
                                    addOneCartItem(item.articul)
                                }}
                            >+</button>
                        </div>
                    </div>
                </div>
                <div 
                    className={styles["cross"]}
                    onClick={() => {
                        openModalHandler();
                        stageDeleteItemFromCartArtHandler(item.articul)
                    }}
                >&#10761;</div>
            </li>
        }
    </>)
}

export {CartItemCard};