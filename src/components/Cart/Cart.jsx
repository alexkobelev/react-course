import styles from '../../assets/styles/Cart.module.scss';
import React from 'react';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cardItems = (
    <ul className={styles['card-names']}>
      {[{ id: 'm1', name: '1' }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cardItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
