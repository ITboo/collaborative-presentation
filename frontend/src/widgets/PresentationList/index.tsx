import Presentation from "../Presentation";
import { useAppStore, useModalStore } from "../../app/store/store";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const PresentationList = () => {
  const { presentations, loading, error, fetchPresentations, addPresentation } =
    useAppStore();

  const isModalOpen = useModalStore((state) => state.modals.createPresentation);
  const closeModal = useModalStore((state) => state.closeModal);
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  
  useEffect(() => {
    fetchPresentations();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal("createPresentation");
    }
  };

  const handleAddPresentation = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !createdBy === undefined) {
      alert("Все поля обязательны");
      return;
    }

    const newPresentation = {
      id: (presentations.length + 1).toString(),
      createdAt: Date.now().toString(),
      title,
      createdBy,
    };

    await addPresentation(newPresentation); // Добавляем презентацию через Zustand
    console.log(newPresentation);
    setTitle("");
    setCreatedBy("");
    closeModal("createPresentation");
  };

  return (
    <div className={styles.list}>
      {/* Модальное окно */}
      {isModalOpen && (
        <div className={styles.modal} onClick={handleBackdropClick}>
          <form
            className={styles.modalContent}
            onSubmit={handleAddPresentation}
          >
            <h2>Добавить презентацию</h2>
            <div>
              <label>Название:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Автор:</label>
              <input
                type="text"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
              />
            </div>
            <button type="submit">Добавить</button>
            <button onClick={() => closeModal("createPresentation")}>
              Отмена
            </button>
          </form>
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
