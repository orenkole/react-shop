import React from "react";
import styles from "./ItemsList.module.scss";
import { useSelector } from "react-redux";

const ItemsList = (props) => {

    const {
        items,
        Card,
    } = props;

    const favItemsArts = useSelector(state => { return state.itemsData.favItemsArts });
    const cartItemsArts = useSelector(state => { return state.itemsData.cartItemsArts });

    return(<>
        <ul className={styles["items-list"]}>
            {   
                items.map(item => {
                    const qtyInCart = cartItemsArts.filter(art => art === item.articul).length;
                    const isFav = favItemsArts.includes(item.articul);
                    const isLast = cartItemsArts.reduce(
                        (occurences, articul) => {return occurences + (articul === item.articul ? 1 : 0)},
                        0
                    ) === 1
                    ? true
                    : false
                    return( 
                        <Card 
                            key={item.articul}
                            item={item}
                            qtyInCart={qtyInCart}
                            isFav={isFav}
                            isLast={isLast}
                        />
                    )   
                })                    
            }
        </ul>       
    </>)
}

export {ItemsList};