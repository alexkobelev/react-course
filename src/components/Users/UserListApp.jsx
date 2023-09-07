import styles from '../../assets/styles/UserListApp.module.scss';
import { useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const UserListApp = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className={styles['users-list']}>
      <CreateUser onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default UserListApp;
