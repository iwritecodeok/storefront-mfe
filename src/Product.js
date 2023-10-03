import React from "react";

// import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    // const [{ cart }, dispatch] = useStateValue();
  
    // const addToCart = () => {
    //   // dispatch item to basket
    //   dispatch({
    //     type: "ADD_TO_CART",
    //     item: {
    //       id: id,
    //       title: title,
    //       image: image,
    //       price: price,
    //       rating: rating,
    //     },
    //   });
    // };
  
    return (
      <div className="product" key={id}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img className="product__img" src={image} alt="" />
        <button onClick={()=> alert("it works")} className="product__button">
          Add To Cart
        </button>
      </div>
    );
  }
  
  export default Product;