import { create } from "zustand";

type ExitModealState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useExitModal = create<ExitModealState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
