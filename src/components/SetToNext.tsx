import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'

export default function SetToNext ({ children, ...anchorProps }: PaginatorAnchorProps) {
  const { isLast, setToNext } = usePaginatorContext()
  if (isLast) return null
  const onClick = () => { setToNext() }
  return (
    <a onClick={onClick} unselectable="on" {...anchorProps}>{children ?? '›'}</a>
  )
}
