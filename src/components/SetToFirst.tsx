import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'

export default function SetToFirst ({ children, ...anchorProps }: PaginatorAnchorProps) {
  const { isFirst, setToFirst } = usePaginatorContext()
  if (isFirst) return null
  const onClick = () => { setToFirst() }
  return <a onClick={onClick} unselectable="on" {...anchorProps}>{children ?? '«'}</a>
}
