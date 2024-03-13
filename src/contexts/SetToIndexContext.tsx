import { type SetToIndexContextProps, type SetToIndexContextProviderProps } from '@/types'
import { createContext, useContext } from 'react'

const SetToIndexContext = createContext<SetToIndexContextProps>(null!)

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

export function useSetToIndexContext (): SetToIndexContextProps {
  const context = useContext(SetToIndexContext)
  if (context === null) {
    throw new Error('Paginator.SetToIndex.* components must be rendered as a child of Paginator.SetToIndex')
  }
  return context
}
