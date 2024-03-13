import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'
import type { MouseEventHandler, ReactElement } from 'react'

export default function SetToLast ({ children, ...anchorProps }: PaginatorAnchorProps): ReactElement<HTMLAnchorElement> | null {
  const { isLast, setToLast } = usePaginatorContext()
  if (isLast) return null
  const onClick: MouseEventHandler<HTMLAnchorElement> = () => { setToLast() }
  return <a onClick={onClick} style={{ userSelect: 'none' }} {...anchorProps}>{children ?? '»'}</a>
}
