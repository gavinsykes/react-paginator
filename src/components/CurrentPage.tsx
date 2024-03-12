import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type HTMLProps, type ReactNode } from 'react'

interface CurrentPageProps extends HTMLProps<HTMLDivElement> {
  render?: (index: number) => ReactNode
}

export default function CurrentPage ({ render, ...divProps }: CurrentPageProps) {
  const { currentPageIndex, pageNumberOffset } = usePaginatorContext()
  return <div {...divProps}>{render ? render(currentPageIndex + pageNumberOffset + 1) : currentPageIndex + pageNumberOffset + 1}</div>
}
