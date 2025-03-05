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
  loading: boolean;
  error: string;
  fetchPresentations: () => void;
  getPresentationById: (id: string) => Presentation;
  setPresentations: (presentations: Presentation[]) => void;
  addPresentation: (presentation: Presentation) => void;
}

export const useAppStore = create<AppState>((set) => ({
  presentations: [],
  loading: false,
  error: null,
  fetchPresentations: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch("http://localhost:3000/presentations");
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const data = await response.json();
      set({ presentations: data, loading: false }); // Обновляем состояние
    } catch (error) {
      set({ error: error.message, loading: false }); // Устанавливаем ошибку
    }
  },
  getPresentationById: (id: string) => presentations.find((p) => p.id === id),
  setPresentations: (presentations) => set({ presentations }),
  addPresentation: (presentation) =>
    set((state) => ({
      presentations: [...state.presentations, presentation],
    })),
}));

type ModalKey =
  | "createPresentation"
  | "enterUsername"
  | "confirmDeletePresentation";
interface ModalStore {
  modals: Record<ModalKey, boolean>;
  openModal: (modalKey: ModalKey) => void;
  closeModal: (modalKey: ModalKey) => void;
}

// Создание стора
export const useModalStore = create<ModalStore>((set) => ({
  modals: {
    createPresentation: false,
    enterUsername: false,
    confirmDeletePresentation: false,
  },
  openModal: (modalKey) =>
    set((state) => ({
      modals: { ...state.modals, [modalKey]: true },
    })),
  closeModal: (modalKey) =>
    set((state) => ({
      modals: { ...state.modals, [modalKey]: false },
    })),
}));

interface UserStore {
  username: string | null; // Юзернейм пользователя
  isAuthorized: boolean; // Флаг авторизации
  authorize: (username: string) => void; // Метод для авторизации
  logout: () => void; // Метод для выхода
}

const useUserStore = create<UserStore>((set) => ({
  username: localStorage.getItem("username") || null, // Загружаем юзернейм из localStorage при инициализации
  isAuthorized: !!localStorage.getItem("username"), // Проверяем авторизацию
  authorize: (username) => {
    localStorage.setItem("username", username); // Сохраняем юзернейм в localStorage
    set({ username, isAuthorized: true }); // Обновляем состояние стора
  },
  logout: () => {
    localStorage.removeItem("username"); // Удаляем юзернейм из localStorage
    set({ username: null, isAuthorized: false }); // Обновляем состояние стора
  },
}));

export default useUserStore;
