import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'
import type { MouseEventHandler, ReactElement } from 'react'

export default function SetToPrevious ({ children, ...anchorProps }: PaginatorAnchorProps): ReactElement<HTMLAnchorElement> | null {
  const { isFirst, setToPrevious } = usePaginatorContext()
  if (isFirst) return null
  const onClick: MouseEventHandler<HTMLAnchorElement> = () => { setToPrevious() }
  return (
    <a onClick={onClick} style={{ userSelect: 'none' }} {...anchorProps}>{children ?? '‹'}</a>
  )
}
