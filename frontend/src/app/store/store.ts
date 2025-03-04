import { create } from "zustand";
import { Presentation } from "../types";

const presentations = [
  {
    id: "1",
    title: "React Advanced",
    createdAt: "2023-10-01",
    createdBy: "Иван Иванов",
    activeParticipants: 12,
  },
  {
    id: "2",
    title: "TypeScript Basics",
    createdAt: "2023-09-25",
    createdBy: "Мария Петрова",
    activeParticipants: 8,
  },
  {
    id: "3",
    title: "Node.js Performance",
    createdAt: "2023-09-20",
    createdBy: "Алексей Сидоров",
    activeParticipants: 15,
  },
];

interface AppState {
  presentations: Presentation[];
  setPresentations: (presentations: Presentation[]) => void;
  addPresentation: (presentation: Presentation) => void;
}
interface ModalState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  presentations: presentations,
  setPresentations: (presentations) => set({ presentations }),
  addPresentation: (presentation) =>
    set((state) => ({
      presentations: [...state.presentations, presentation],
    })),
}));

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));