import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import USerProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(USerProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumOfItems, item) => {
    return totalNumOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Foodie_Goodie</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
