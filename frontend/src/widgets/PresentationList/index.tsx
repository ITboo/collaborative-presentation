import Presentation from "../Presentation";
import { useAppStore, useModalStore } from "../../app/store/store";
import styles from "./styles.module.css";

const PresentationList = () => {
  const presentations = useAppStore((state) => state.presentations);
  const { isModalOpen, closeModal } = useModalStore();
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={styles.list}>
      {/* Модальное окно */}
      {isModalOpen && (
        <div className={styles.modal} onClick={handleBackdropClick}>
          <div className={styles.modalContent}>
          <h2>Добавить презентацию</h2>
          <div>
            <label>Название:</label>
            <input type="text" />
          </div>
          <div>
            <label>Автор:</label>
            <input type="text" />
          </div>
          <button>Добавить</button>
          <button onClick={closeModal}>Отмена</button></div>
        </div>
      )}
      {presentations.map((presentation) => (
        <Presentation
          id={presentation.id}
          title={presentation.title}
          createdAt={presentation.createdAt}
          createdBy={presentation.createdBy}
        />
      ))}
    </div>
  );
};

export default PresentationList;