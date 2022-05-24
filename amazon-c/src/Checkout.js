import React from "react";
import "./Checkout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, desipatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>hello {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">
            Your Shopping Basket...
            <ShoppingCartIcon className="shoppingcarticon" />
          </h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal component</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
