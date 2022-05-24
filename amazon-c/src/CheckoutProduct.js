import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hidebutton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removefrombasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon style={{ color: "gold" }} />
            ))}
        </div>
        {!hidebutton && (
          <button
            className="checkoutProduct__button"
            onClick={removefrombasket}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
