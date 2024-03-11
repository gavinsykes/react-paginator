import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { SetToIndexContextProvider, useSetToIndexContext } from "@/contexts/SetToIndexContext";
import { SetToIndexProps, SetToIndexInputProps, SetToIndexSubmitProps } from "@/types";
import { KeyboardEventHandler, MouseEventHandler, useRef, useState } from "react";

export default function SetToIndex({ children, ...divProps }: SetToIndexProps) {
  const { setToIndex, totalPages } = usePaginatorContext();
  const [targetIndex, setTargetIndex] = useState<number | undefined>(undefined);
  return (
    <div {...divProps}>
      <SetToIndexContextProvider setTargetIndex={setTargetIndex} setToIndex={setToIndex} targetIndex={targetIndex} totalPages={totalPages}>
        {children}
      </SetToIndexContextProvider>
    </div>
  );
}

function SetToIndexInput({ ...inputProps }: SetToIndexInputProps) {
  const { pageNumberOffset, setToIndex, totalPages } = usePaginatorContext();
  const { setTargetIndex, targetIndex } = useSetToIndexContext();
  const inputRef = useRef<HTMLInputElement>(null!);
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;
    if (!inputRef.current.checkValidity() || !targetIndex) return;
    setToIndex(targetIndex);
    setTargetIndex(undefined);
  }
  return (
    <input
      {...inputProps}
      ref={inputRef}
      value={targetIndex}
      onChange={(e) => setTargetIndex(Number(e.target.value))}
      onKeyDown={onKeyDown}
      type="number"
      min={pageNumberOffset + 1}
      max={pageNumberOffset + totalPages}
    />
  );
}

function SetToIndexSubmit({ children, ...buttonProps }: SetToIndexSubmitProps) {
  const { setToIndex } = usePaginatorContext();
  const { targetIndex } = useSetToIndexContext();
  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    if (targetIndex !== undefined) setToIndex(targetIndex);
  }
  return <button onClick={onClick} {...buttonProps}>{children ?? 'Go'}</button>
}

SetToIndex.Input = SetToIndexInput;
SetToIndex.Submit = SetToIndexSubmit;