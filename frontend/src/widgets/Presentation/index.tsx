import { Icon } from "../../shared/Icon";
import type { Presentation } from "../../app/types";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Presentation = ({ id, title, createdBy, createdAt }: Presentation) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>by {createdBy}</p>
      <div className={styles.createdAt}>
        <Icon name={"clock"} />
        <span>Created: {createdAt}</span>
      </div>

      <div>
        <Icon name={"user"}/>
        <span></span>
      </div>

      <Link to={`/presentations/${id}`}>Join</Link>
    </div>
  );
};

export default Presentation;
