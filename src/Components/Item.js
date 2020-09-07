import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../Actions/cartActions";

const Item = (props) => {
  // handler function to call redux addToCart action
  const handleClick = (id) => {
    props.addToCart(id);
  };

  return (
    // component container div
    <div className="item-container">
      {/*item details container*/}
      <div className="item-details">
        {/*item image*/}
        <img className="item-img" src={props.item.image} alt="item" />
        {/*item name*/}
        <p>{props.item.name}</p>
      </div>
      {/*item add to cart container div*/}
      <div className="item-atc">
        {/*item price (set to 2 decimal places)*/}
        <p>
          <strong>€{props.item.price.toFixed(2)}</strong>
        </p>
        {/*add to cart button*/}
        <button
          className="atc-btn"
          // call click handler function onclick
          onClick={() => {
            handleClick(props.item.id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

// map redux action to props
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

// subscribe component to redux
export default connect(null, mapDispatchToProps)(Item);
