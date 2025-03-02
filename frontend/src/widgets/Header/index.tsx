import { Link } from "react-router-dom";
import { Icon } from "../../shared/Icon";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <Icon name={"logo"} />
        <span className={styles.logo_title}>Collaborative</span>
      </Link>
      <button className={styles.add_btn}>
        <Icon name={"plus"}/>
        Create presentation</button>
    </header>
  );
};

export default Header;
