import React from "react";
import styles from "./ItemCard.module.scss";

const ItemCard = (props) => {

    const {
        item,
        qtyInCart,
        isFav,
        openModalHandler,
        changeFavItemsHandler,
        stageAddCartItemArtHandler
    } = props;

    return (<>
        {item &&
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
                        onClick={() => { changeFavItemsHandler(item.articul) }}
                        alt={item.articul}
                    />
                }
                <div className={styles["item-description"]}>
                    <h2 className={styles["item-title"]}>{item.name}</h2>
                    <div className={styles["item-price-row"]}>
                        <span className={styles["item-price"]}>{`$${item.price}`}</span>
                        <button
                            className={styles["add-to-cart-btn"]}
                            onClick={() => {
                                openModalHandler();
                                stageAddCartItemArtHandler(item.articul)
                            }}
                        >Add to cart</button>
                        {
                            qtyInCart > 0 && <span className={styles["qty-in-cart"]}>{qtyInCart}</span>
                        }
                    </div>
                </div>
            </li>
        }
    </>)
}

export { ItemCard };