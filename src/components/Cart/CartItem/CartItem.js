import React from "react";
import styles from "./CartItem.module.css";
import { connect } from "react-redux";
import {
  removeFromCart,
} from "../../../Redux/Bot/Bot-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
 
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
       
      </div>
      <div className={styles.cartItem__actions}>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
