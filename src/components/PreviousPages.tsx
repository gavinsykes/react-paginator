import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { CommonPreviousNextPagesProps } from "@/types";
import { MouseEventHandler } from "react";

export default function PreviousPages({ maximum = 5, render, ...anchorProps }: CommonPreviousNextPagesProps) {
  const { allowNumberNavigation, currentPageIndex, isFirst, pageNumberOffset, setToIndex } = usePaginatorContext();
  if (isFirst) return null;
  const anchors = Array.from({ length: currentPageIndex }, (_,i) => i).slice(-maximum).reverse();
  const onClick: (anchor: number) => MouseEventHandler<HTMLAnchorElement> = (anchor: number) => () => {
    if (!allowNumberNavigation) return;
    setToIndex(anchor);
  }
  return (
    <div style={{ display: 'flex', flexFlow: 'row-reverse wrap', overflow: 'hidden' }}>
      <div></div>
      {anchors.map(anchor => <a key={anchor} onClick={onClick(anchor)} {...anchorProps}>
        {render ? render(anchor + pageNumberOffset) : anchor + pageNumberOffset}
      </a>)}
    </div>
  );
}