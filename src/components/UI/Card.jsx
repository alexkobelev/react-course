import React from 'react';
import styles from '../../assets/styles/Card.module.scss';

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
