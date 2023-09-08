import styles from '../../assets/styles/CreateUser.module.scss';
import { useState, useRef, Fragment } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(false);

  const createUserHandler = (event) => {
    event.preventDefault();

    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: 'Некоректный ввод',
        message: 'Поля не могут быть пустыми',
      });
      return;
    }

    if (+inputUserAge < 1) {
      setError({
        title: 'Некоректный ввод',
        message: 'Введите корректный возраст',
      });
      return;
    }

    props.onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" ref={nameInputRef} />
          <label htmlFor="age">Возраст</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Добавить Пользователя</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreateUser;
