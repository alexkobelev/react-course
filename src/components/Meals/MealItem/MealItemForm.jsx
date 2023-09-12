import React from 'react';
import styles from '../../../assets/styles/MealItemForm.module.scss';
import Input from '../../UI/Input';

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
    </form>
  );
};

export default MealItemForm;
