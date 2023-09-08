import styles from '../../assets/styles/CreateUser.module.scss';
import { useState, Fragment } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const CreateUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(false);

  const createUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Некоректный ввод',
        message: 'Поля не могут быть пустыми',
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: 'Некоректный ввод',
        message: 'Введите корректный возраст',
      });
      return;
    }

    props.onCreateUser(userName, userAge);

    setUserName('');
    setUserAge('');
  };

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
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
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={userName}
          />
          <label htmlFor="age">Возраст</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={userAge}
          />
          <Button type="submit">Добавить Пользователя</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreateUser;
