import css from './FriendList.module.css';
import FriendItem from '../FriendItem/FriendItem';

export default function FriendList({ props }) {
  return (
    <ul className={css.friendsList}>
      {props.map((friend) => (
        <FriendItem key={friend.id} props={friend} />
      ))}
    </ul>
  );
}
