import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { PaginatorAnchorProps } from "@/types";

export default function SetToLast({ children, ...anchorProps }: PaginatorAnchorProps) {
  const { isLast, setToLast } = usePaginatorContext();
  if (isLast) return null;
  const onClick = () => setToLast()
  return <a onClick={onClick} unselectable="on" {...anchorProps}>{children ?? '»'}</a>
}