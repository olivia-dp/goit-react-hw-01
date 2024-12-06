import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.friendListItem}>
        <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="72" />
        <p className={styles.name}>{name}</p>
        <p
          className={`${styles.status} ${
            isOnline ? styles.onlineText : styles.offlineText
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </li>
    );
  };

  

export default FriendListItem;