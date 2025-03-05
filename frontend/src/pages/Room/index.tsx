import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserStore, {
  useAppStore,
  useModalStore,
} from "../../app/store/store";
import EnterUsernameModal from "../../widgets/EnterUsernameModal";
import styles from "./styles.module.css";
import { LogOut } from "lucide-react";

const Room: FC = () => {
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const currentUser = useUserStore((state) => state.username);
  const isAuthorized = useUserStore((state) => state.isAuthorized);

  useEffect(() => {
    if (!isAuthorized) {
      openModal("enterUsername");
    }
  }, [isAuthorized, openModal]);

  const handleCancel = () => {
    closeModal("enterUsername");
    navigate("/");
  };
  const handleGoBack = () => {
    navigate("/");
  };

  const { id } = useParams<{ id: string }>();
  const presentation = useAppStore((state) =>
    state.getPresentationById(id || "")
  );
  return (
    <div>
      {!isAuthorized && <EnterUsernameModal onCancel={handleCancel} />}
      {isAuthorized && (
        <div className={styles.main}>
          <div className="">
            <p>{presentation.title}</p>
          </div>
          <div className="">
            <h1>Добро пожаловать, {currentUser}</h1>
            <button onClick={handleGoBack}>
            <LogOut />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
