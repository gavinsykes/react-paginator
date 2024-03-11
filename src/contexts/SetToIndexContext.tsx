import { SetToIndexContextProps, SetToIndexContextProviderProps } from "@/types";
import { createContext, useContext } from "react";

const SetToIndexContext = createContext<SetToIndexContextProps>(null!);

export const SetToIndexContextProvider = ({
  children,
  setTargetIndex,
  setToIndex,
  targetIndex,
  totalPages
}: SetToIndexContextProviderProps) => <SetToIndexContext.Provider value={{
  setTargetIndex,
  setToIndex,
  targetIndex,
  totalPages
}}>
  {children}
</SetToIndexContext.Provider>

export function useSetToIndexContext() {
  const context = useContext(SetToIndexContext);
  if (!context) {
    throw new Error('Paginator.SetToIndex.* components must be rendered as a child of Paginator.SetToIndex');
  }
  return context;
}