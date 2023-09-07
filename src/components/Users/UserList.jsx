import styles from '../../assets/styles/UserList.module.scss';
import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles.users}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} лет
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
