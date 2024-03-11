import { usePaginatorContext } from "@/contexts/PaginatorContext";
import { ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, HTMLProps, KeyboardEventHandler, MouseEventHandler, ReactNode, SetStateAction, createContext, useContext, useRef, useState } from "react";
import CurrentPage from "./CurrentPage";

interface SetToIndexProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

interface SetToIndexContextProps {
  setTargetIndex: Dispatch<SetStateAction<SetToIndexContextProps['targetIndex']>>;
  setToIndex: Dispatch<SetStateAction<number>>;
  targetIndex: number | undefined;
  totalPages: number;
}

const SetToIndexContext = createContext<SetToIndexContextProps>(null!);

interface SetToIndexContextProviderProps extends SetToIndexContextProps {
  children: ReactNode;
}
const SetToIndexContextProvider = ({ children, setTargetIndex, setToIndex, targetIndex, totalPages }: SetToIndexContextProviderProps) => <SetToIndexContext.Provider value={{ setTargetIndex, setToIndex, targetIndex, totalPages }}>{children}</SetToIndexContext.Provider>

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

const useSetToIndexContext = () => useContext(SetToIndexContext);

interface SetToIndexInputProps extends HTMLProps<HTMLInputElement> {}

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

interface SetToIndexSubmitProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
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