import css from './FriendList.module.css';
import FriendItem from '../FriendItem/FriendItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
