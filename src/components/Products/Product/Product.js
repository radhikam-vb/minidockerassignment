import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
}
from "../../../Redux/Bot/Bot-actions";

const Product = ({ botsdetails, addToCart, loadCurrentItem }) => {
  return (
   <div className="">
     <div className="row">
     <div className="col-sm-3">
     <p className={styles.details__title}>{botsdetails.title}</p>
     </div>
       <div className="col-sm-3">
     <p className={styles.details__index}>Index Value<br></br>{botsdetails.index}</p>
     
       </div>
       <div className="col-sm-3">
       <p className={styles.details__cagr}>CAGR<br></br>{botsdetails.cagr}%</p>
       </div>
       <div className="col-sm-3">
       <Link to={`/botsdetails/${botsdetails.id}`}>
            <button
              onClick={() => loadCurrentItem(botsdetails)}
              className={`${styles.buttons__btn} ${styles.buttons__view}`}
            >
              View algo
            </button>
          </Link>
          <button
            onClick={() => addToCart(botsdetails.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Buy
          </button>
       </div>

     </div>
   </div>
    
   /* me={styles.details__title}>{botsdetails.title}</p>

        </div>
        <p className={styles.details__index}>Index Value<br></br>{botsdetails.index}</p>
        <p className={styles.details__cagr}>CAGR<br></br>{botsdetails.cagr}%</p>

        <div className={styles.botsdetails__buttons}>
          <Link to={`/botsdetails/${botsdetails.id}`}>
            <button
              onClick={() => loadCurrentItem(botsdetails)}
              className={`${styles.buttons__btn} ${styles.buttons__view}`}
            >
              View algo
            </button>
          </Link>
          <button
            onClick={() => addToCart(botsdetails.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Buy
          </button>
        </div>
      </div>*/
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);