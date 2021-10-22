import React from "react";
import styles from "./Algo.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Bot/Bot-actions";

const Algo = ({ current, addToCart }) => {
  return (
  <div className="Algo">
    <div className={styles.Algo__details}>
          <p className={styles.details__title}>{current.title}</p>
          <p className={styles.details__description}>{current.description}</p><br>
          </br>
          <button
              className={styles.details__btn}>
              MODERATE RISK             
          </button>
          <button
                  onClick={() => addToCart(current.id)}
                  className={styles.details__addBtn}>
                  Buy
          </button>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Algo);