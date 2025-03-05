import { Link } from "react-router-dom";
import { useModalStore } from "../../app/store/store";
import { Icon } from "../../shared/Icon";
import styles from "./styles.module.css";

const Header = () => {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <Icon name={"logo"} />
        <span className={styles.logo_title}>Collaborative</span>
      </Link>
      <button className={styles.add_btn} onClick={()=>openModal('createPresentation')}>
        <Icon name={"plus"} />
        Создать презентацию
      </button>
    </header>
  );
};

export default Header;
