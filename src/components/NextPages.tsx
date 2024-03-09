import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { CommonPreviousNextPagesProps } from "@/types";

export default function NextPages({ maximum = 5, render, ...anchorProps }: CommonPreviousNextPagesProps) {
  const { allowNumberNavigation, currentPageIndex, isLast, pageNumberOffset, setToIndex, totalPages } = usePaginatorContext();
  if (isLast) return null;
  const anchors = Array.from({ length: totalPages - currentPageIndex - 1 }, (_,i) => i + currentPageIndex + 1).slice(0, maximum);
  const onClick = (anchor: number) => () => {
    if (!allowNumberNavigation) return;
    setToIndex(anchor)
  }
  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', overflow: 'hidden' }}>
      <div></div>
      {anchors.map(anchor => <a key={anchor} onClick={onClick(anchor)} {...anchorProps}>
        {render ? render(anchor + pageNumberOffset) : anchor + pageNumberOffset}
      </a>)} 
    </div>
  );
}