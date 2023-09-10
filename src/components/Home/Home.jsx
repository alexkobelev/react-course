import React, { useContext } from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import styles from './Home.module.css';
import AuthContext from '../../context/auth-context';

const Home = (props) => {
  const cxt = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={cxt.onLogout}>Выход</Button>
    </Card>
  );
};

export default Home;
