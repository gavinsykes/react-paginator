import { useState } from "react";
import SetToNext from "./SetToNext";
import SetToPrevious from "./SetToPrevious";
import SetToFirst from "./SetToFirst";
import SetToLast from "./SetToLast";
import PreviousPages from "./PreviousPages";
import NextPages from "./NextPages";
import CurrentPage from "./CurrentPage";
import { PaginatorContextProvider } from "@/contexts/PaginatorContext";
import { PaginatorProps } from "@/types";
import SetToIndex from "./SetToIndex";

export function Paginator({ allowNumberNavigation = true, children, pageNumberOffset = 0, onPageChange, totalPages, ...divProps }: PaginatorProps) {
  if (totalPages < 1 || !Number.isInteger(totalPages)) throw new Error("The paginator component's totalPages property must be an integer greater than 0.");
  if (totalPages === 1) return null;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const isFirst = currentPageIndex === 0;
  const isLast = currentPageIndex === totalPages - 1;
  const setToIndex = (index: number) => {
    if (onPageChange) onPageChange(index);
    setCurrentPageIndex(index);
  }
  const setToFirst = () => setToIndex(0);
  const setToPrevious = () => {
    if (onPageChange && currentPageIndex !== 0) onPageChange(currentPageIndex - 1);
    setCurrentPageIndex(prev => prev === 0 ? prev : prev - 1);
  }
  const setToNext = () => {
    if (onPageChange && currentPageIndex !== totalPages - 1) onPageChange(currentPageIndex + 1);
    setCurrentPageIndex(prev => prev === totalPages - 1 ? prev : prev + 1);
  }
  const setToLast = () => setToIndex(totalPages - 1);
  return (
    <PaginatorContextProvider
      allowNumberNavigation={allowNumberNavigation}
      currentPageIndex={currentPageIndex}
      pageNumberOffset={pageNumberOffset}
      isFirst={isFirst}
      isLast={isLast}
      setToIndex={setCurrentPageIndex}
      setToFirst={setToFirst}
      setToLast={setToLast}
      setToNext={setToNext}
      setToPrevious={setToPrevious}
      totalPages={totalPages}
    >
      <div
        {...divProps}
        style={{ display: 'flex', flexFlow: 'row nowrap', ...divProps.style }}
      >
        {children}
      </div>
    </PaginatorContextProvider>
  );
}

Paginator.CurrentPage = CurrentPage;

Paginator.PreviousPages = PreviousPages;
Paginator.NextPages = NextPages;

Paginator.SetToFirst = SetToFirst;
Paginator.SetToLast = SetToLast;
Paginator.SetToPrevious = SetToPrevious;
Paginator.SetToNext = SetToNext;
Paginator.SetToIndex = SetToIndex;