import PropTypes from "prop-types";
import Item from "./Item";
import "../CartPage.css";

const CartPage = ({ items, onAddOne, onRemoveOne }) => {
  return (
    <ul className="CartPage-items">
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item} />
          <div>{item.count }</div>
          <button type="button" onClick={() => onRemoveOne(item)} className="CartItem-removeOne">-</button>
          <button onClick={()=> onAddOne(item)} className="CartItem-addOne">+</button>
        </li>
      ))}
    </ul>
  );
};

export default CartPage;

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};
