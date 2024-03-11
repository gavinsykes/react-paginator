import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { commonDefaultMaximumPreviousNext, commonPreviousNextAnchorStyles, commonPreviousNextStyles } from "@/properties";
import { CommonPreviousNextPagesProps } from "@/types";
import { MouseEventHandler } from "react";

export default function PreviousPages({ maximum = commonDefaultMaximumPreviousNext, render, ...anchorProps }: CommonPreviousNextPagesProps) {
  const { allowNumberNavigation, currentPageIndex, isFirst, pageNumberOffset, setToIndex } = usePaginatorContext();
  if (isFirst) return null;
  const anchors = Array.from({ length: currentPageIndex }, (_,i) => i).slice(-maximum).reverse();
  const onClick: (anchor: number) => MouseEventHandler<HTMLAnchorElement> = (anchor: number) => () => {
    if (!allowNumberNavigation) return;
    setToIndex(anchor);
  }
  return (
    <div style={commonPreviousNextStyles({ flexReverse: true })}>
      <div></div>
      {anchors.map(anchor => <a key={anchor} onClick={onClick(anchor)} style={commonPreviousNextAnchorStyles} {...anchorProps}>
        {render ? render(anchor + pageNumberOffset + 1) : anchor + pageNumberOffset + 1}
      </a>)}
    </div>
  );
}