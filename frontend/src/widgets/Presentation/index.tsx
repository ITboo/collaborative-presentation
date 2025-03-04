import { Link } from "react-router-dom";
import { Icon } from "../../shared/Icon";
import type { Presentation } from "../../app/types";
import styles from "./styles.module.css";

const Presentation = ({ id, title, createdBy, createdAt }: Presentation) => {
  return (
    <div className={styles.card}>
        <p className={styles.participants}><Icon name="user"/> 5</p>
<h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <p className={styles.date}>Дата создания: {createdAt}</p>
        <p className={styles.author}>by {createdBy}</p>

      </div>
      <Link to={`/presentations/${id}`}>
        <button>Join</button>
      </Link>
    </div>
  );
};

export default Presentation;
