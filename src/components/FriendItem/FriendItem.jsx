import css from './FriendItem.module.css';
import clsx from 'clsx';

export default function FriendItem({ props: { avatar, name, isOnline } }) {
  return (
    <li className={css.container}>
      <img src={avatar} alt={`${name} photo`} width={90} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
