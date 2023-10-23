import { create } from 'zustand';

interface ModalState {
  // isModalOpen:boolean
  // closeModal: (modalId: string) => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  // closeModal: () => set({})
}));
