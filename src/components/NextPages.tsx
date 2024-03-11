import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { commonDefaultMaximumPreviousNext, commonPreviousNextAnchorStyles, commonPreviousNextStyles } from "@/properties";
import { CommonPreviousNextPagesProps } from "@/types";
import { MouseEventHandler } from "react";

export default function NextPages({ maximum = commonDefaultMaximumPreviousNext, render, ...anchorProps }: CommonPreviousNextPagesProps) {
  const { allowNumberNavigation, currentPageIndex, isLast, pageNumberOffset, setToIndex, totalPages } = usePaginatorContext();
  if (isLast) return null;
  const anchors = Array.from({ length: totalPages - currentPageIndex - 1 }, (_,i) => i + currentPageIndex + 1).slice(0, maximum);
  const onClick: (anchor: number) => MouseEventHandler<HTMLAnchorElement> = (anchor: number) => () => {
    if (!allowNumberNavigation) return;
    setToIndex(anchor)
  }
  return (
    <div style={commonPreviousNextStyles()}>
      <div></div>
      {anchors.map(anchor => <a key={anchor} onClick={onClick(anchor)} style={commonPreviousNextAnchorStyles} {...anchorProps}>
        {render ? render(anchor + pageNumberOffset + 1) : anchor + pageNumberOffset + 1}
      </a>)} 
    </div>
  );
}