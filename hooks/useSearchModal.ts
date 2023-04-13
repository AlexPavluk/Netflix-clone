import { create } from "zustand";

export interface ModalStoreInterfase {
    movieId?: string;
    isSerachOpen: boolean;
    openModal: (movieId: string) => void;
    closeSearchModal: () => void;
}

const useSearchModal = create<ModalStoreInterfase>((set) => ({
    movieId: undefined,
    isSerachOpen: false,
    openModal: (movieId: string) => set({isSerachOpen: true, movieId}),
    closeSearchModal: () => set({isSerachOpen: false, movieId: undefined}),
}));

export default useSearchModal;