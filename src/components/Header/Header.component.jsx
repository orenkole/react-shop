import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
    return (
        <div>
            <ul className={styles["menu-list"]}>
                <Link className={styles["menu-item"]} to="/">Home</Link>
                <Link className={styles["menu-item"]} to="/favourites">Favourites</Link>
                <Link className={styles["menu-item"]} to="/cart">Cart</Link>
            </ul>            
        </div>
    )
}

export {Header}