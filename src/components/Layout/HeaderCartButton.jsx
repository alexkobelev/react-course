import styles from '../../assets/styles/HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import React from 'react';

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
