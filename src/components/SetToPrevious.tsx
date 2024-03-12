import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { type PaginatorAnchorProps } from '@/types'

export default function SetToPrevious ({ children, ...anchorProps }: PaginatorAnchorProps) {
  const { isFirst, setToPrevious } = usePaginatorContext()
  if (isFirst) return null
  const onClick = () => { setToPrevious() }
  return (
    <a onClick={onClick} unselectable="on" {...anchorProps}>{children ?? '‹'}</a>
  )
}
