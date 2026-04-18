import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "#abd5bd",
  scale: 0.06,

  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),

  reset: set({
    color: "#abd5bd",
    scale: 0.06,
  }),
}));

export default useMacbookStore;
