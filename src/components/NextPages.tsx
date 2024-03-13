import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { commonDefaultMaximumPreviousNext, commonPreviousNextAnchorStyles, commonPreviousNextStyles } from '@/properties'
import { type CommonPreviousNextPagesProps } from '@/types'
import { type ReactElement, type MouseEventHandler } from 'react'
import Ellipsis from './Ellipsis'

export default function NextPages ({
  maximum = commonDefaultMaximumPreviousNext,
  render,
  showEllipsis = true,
  ...anchorProps
}: CommonPreviousNextPagesProps): ReactElement<HTMLDivElement> | null {
  const { allowNumberNavigation, currentPageIndex, isLast, pageNumberOffset, setToIndex, totalPages } = usePaginatorContext()
  if (isLast) return null
  const anchors = Array.from({ length: totalPages - currentPageIndex - 1 }, (_, i) => i + currentPageIndex + 1).slice(0, maximum)
  const onClick: (anchor: number) => MouseEventHandler<HTMLAnchorElement> = (anchor: number) => () => {
    if (!allowNumberNavigation) return
    setToIndex(anchor)
  }
  return (
    <div style={commonPreviousNextStyles()}>
      <div></div>
      {anchors.map(anchor => <a key={anchor} onClick={onClick(anchor)} style={commonPreviousNextAnchorStyles} {...anchorProps}>
        {render !== undefined ? render(anchor + pageNumberOffset + 1) : anchor + pageNumberOffset + 1}
      </a>)}
      <Ellipsis />
    </div>
  )
}
