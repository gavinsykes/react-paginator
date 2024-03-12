import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, HTMLProps, ReactNode, SetStateAction } from "react";

export interface PaginatorContextProps {
  allowNumberNavigation: boolean;
  currentPageIndex: number;
  isFirst: boolean;
  isLast: boolean;
  pageNumberOffset: number;
  setToIndex: Dispatch<SetStateAction<number>>;
  setToFirst: () => void;
  setToLast: () => void;
  setToNext: () => void;
  setToPrevious: () => void;
  totalPages: number;
}

export interface PaginatorContextProviderProps extends PaginatorContextProps {
  children: ReactNode;
}

export interface PaginatorProps extends HTMLProps<HTMLDivElement> {
  allowNumberNavigation?: PaginatorContextProps['allowNumberNavigation'];
  children: ReactNode;
  pageNumberOffset?: number;
  initialIndex?: number;
  onPageChange?: (index: number) => void;
  totalPages: PaginatorContextProps['totalPages'];
}

export interface PaginatorAnchorProps extends HTMLProps<HTMLAnchorElement> {
  children?: ReactNode;
}

export interface PaginatorButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
  children?: ReactNode;
}

export interface CommonPreviousNextPagesProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  maximum?: number;
  render?: (index: number) => ReactNode;
  showEllipsis?: boolean;
}

export interface SetToIndexContextProps {
  setTargetIndex: Dispatch<SetStateAction<SetToIndexContextProps['targetIndex']>>;
  setToIndex: Dispatch<SetStateAction<number>>;
  targetIndex: number | undefined;
  totalPages: number;
}

export interface SetToIndexContextProviderProps extends SetToIndexContextProps {
  children: ReactNode;
}

export interface SetToIndexProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export interface SetToIndexInputProps extends HTMLProps<HTMLInputElement> {}

export interface SetToIndexSubmitProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
}