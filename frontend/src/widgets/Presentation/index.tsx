import { Link } from "react-router-dom";
import { Icon } from "../../shared/Icon";
import type { Presentation } from "../../app/types";
import styles from "./styles.module.css";

const Presentation = ({ id, title, createdBy, createdAt }: Presentation) => {

  
  return (
    <div className={styles.card}>
      <p className={styles.participants}>
        <Icon name="user" /> 0
      </p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <p className={styles.date}>Дата создания: {createdAt}</p>
        <p className={styles.author}>Автор: {createdBy}</p>
      </div>
      <Link to={`/presentations/${id}`}>
        <button>Войти</button>
      </Link>
    </div>
  );
};

export default Presentation;
