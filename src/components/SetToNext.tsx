import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'
import type { MouseEventHandler, ReactElement } from 'react'

export default function SetToNext ({ children, ...anchorProps }: PaginatorAnchorProps): ReactElement<HTMLAnchorElement> | null {
  const { isLast, setToNext } = usePaginatorContext()
  if (isLast) return null
  const onClick: MouseEventHandler<HTMLAnchorElement> = () => { setToNext() }
  return (
    <a onClick={onClick} style={{ userSelect: 'none' }} {...anchorProps}>{children ?? '›'}</a>
  )
}
