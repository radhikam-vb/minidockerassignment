import React from "react";
import styles from "./Products.module.css";
// Redux
import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({ products }) => {
    return (
      <div className={styles.products}>
        {products.map((botsdetails) => (
          <Product key={botsdetails.id} botsdetails={botsdetails} />
        ))}
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };

export default connect(mapStateToProps)(Products);