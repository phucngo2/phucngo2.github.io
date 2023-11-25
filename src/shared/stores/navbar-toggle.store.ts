import { useAtom } from "jotai";
import { atomWithStore } from "jotai-zustand";
import { createStore } from "zustand/vanilla";

const initialValue = false;
const store = createStore(() => initialValue);
const stateAtom = atomWithStore(store);
export const useNavbarToggleStore = () => {
  const [state, _setState] = useAtom(stateAtom);
  const toggleNavbar = () => _setState((prev) => !prev);

  return {
    isOpened: state,
    toggleNavbar,
  };
};
