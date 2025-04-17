import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import css from './App.module.css';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className={css.container}>
      <Profile props={userData} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
}
