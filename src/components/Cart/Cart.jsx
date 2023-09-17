import styles from '../../assets/styles/Cart.module.scss';
import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {};

  const addCartItemHandler = (item) => {};

  const cardItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cardItems}
      <div className={styles['modal-bottom']}>
        <div className={styles.total}>
          <span>Итого</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles['button--alt']} onClick={props.onHideCart}>
            Закрыть
          </button>
          {hasItems && <button className={styles.button}>Заказать</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
