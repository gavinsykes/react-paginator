import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'
import type { MouseEventHandler, ReactElement } from 'react'

export default function SetToFirst ({ children, ...anchorProps }: PaginatorAnchorProps): ReactElement<HTMLAnchorElement> | null {
  const { isFirst, setToFirst } = usePaginatorContext()
  if (isFirst) return null
  const onClick: MouseEventHandler<HTMLAnchorElement> = () => { setToFirst() }
  return <a onClick={onClick} style={{ userSelect: 'none' }} {...anchorProps}>{children ?? '«'}</a>
}
