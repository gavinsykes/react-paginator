import { type PaginatorContextProps, type PaginatorContextProviderProps } from '@/types'
import { createContext, useContext } from 'react'

const PaginatorContext = createContext<PaginatorContextProps>(null!)

export const PaginatorContextProvider = ({
  allowNumberNavigation,
  children,
  currentPageIndex,
  isFirst,
  isLast,
  pageNumberOffset,
  setToIndex,
  setToNext,
  setToLast,
  setToFirst,
  setToPrevious,
  totalPages
}: PaginatorContextProviderProps) => <PaginatorContext.Provider value={{
  allowNumberNavigation,
  currentPageIndex,
  isFirst,
  isLast,
  pageNumberOffset,
  setToIndex,
  setToFirst,
  setToLast,
  setToNext,
  setToPrevious,
  totalPages
}}>
  {children}
</PaginatorContext.Provider>

export function usePaginatorContext () {
  const context = useContext(PaginatorContext)
  if (context === null) {
    throw new Error('Paginator.* components must be rendered as a child of Paginator')
  }
  return context
}
