import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type CurrentPageProps } from '@/types'
import { type ReactElement } from 'react'

export default function CurrentPage ({ render, ...divProps }: CurrentPageProps): ReactElement<HTMLDivElement> {
  const { currentPageIndex, pageNumberOffset } = usePaginatorContext()
  return <div {...divProps}>{render !== undefined ? render(currentPageIndex + pageNumberOffset + 1) : currentPageIndex + pageNumberOffset + 1}</div>
}
