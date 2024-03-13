import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { commonDefaultMaximumPreviousNext, commonPreviousNextAnchorStyles, commonPreviousNextStyles } from '@/properties'
import { type CommonPreviousNextPagesProps } from '@/types'
import { type ReactElement, type MouseEventHandler } from 'react'
import Ellipsis from './Ellipsis'

export default function PreviousPages ({
  maximum = commonDefaultMaximumPreviousNext,
  render,
  showEllipsis = true,
  ...anchorProps
}: CommonPreviousNextPagesProps): ReactElement<HTMLDivElement> | null {
  const { allowNumberNavigation, currentPageIndex, isFirst, pageNumberOffset, setToIndex } = usePaginatorContext()
  if (isFirst) return null
  const anchors = Array.from({ length: currentPageIndex }, (_, i) => i).slice(-maximum).reverse()
  const onClick: (anchor: number) => MouseEventHandler<HTMLAnchorElement> = (anchor: number) => () => {
    if (!allowNumberNavigation) return
    setToIndex(anchor)
  }
  return (
    <div style={commonPreviousNextStyles({ flexReverse: true })}>
      <div></div>
      {anchors.map(anchor => <a key={anchor} onClick={onClick(anchor)} style={commonPreviousNextAnchorStyles} {...anchorProps}>
        {render !== undefined ? render(anchor + pageNumberOffset + 1) : anchor + pageNumberOffset + 1}
      </a>)}
      <Ellipsis />
    </div>
  )
}
