import Presentation from "../Presentation";
import type { PresentationList } from "../../app/types";
import styles from "./styles.module.css";

const presentations = [
  {
    id: "1",
    title: "Test",
    createdBy: "Ooops",
    createdAt: "02-03-2025",
  },
  {
    id: "2",
    title: "Test 2",
    createdBy: "Vadik",
    createdAt: "02-03-2025",
  },
  {
    id: "3",
    title: "Test 3",
    createdBy: "Ahoy",
    createdAt: "02-03-2025",
  },
];

const PresentationList = () => {
  return (
    <div className={styles.list}>
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
