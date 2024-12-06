import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img
          src={image}
          alt="User avatar"
          className={css.profile_avatar}
        />
        <p className={css.profile_name}>{name}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul className={css.profile_stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;