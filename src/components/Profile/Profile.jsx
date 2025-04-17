import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <img
          src={avatar}
          alt={`${username} photo`}
          width={100}
          height={100}
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <span>Followers</span>
          <span className={css.infoValue}>{followers}</span>
        </li>
        <li className={css.infoItem}>
          <span>Views</span>
          <span className={css.infoValue}>{views}</span>
        </li>
        <li className={css.infoItem}>
          <span>Likes</span>
          <span className={css.infoValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
