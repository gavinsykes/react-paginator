import { usePaginatorContext } from '@/contexts/PaginatorContext'
import { SetToIndexContextProvider, useSetToIndexContext } from '@/contexts/SetToIndexContext'
import { type SetToIndexProps, type SetToIndexInputProps, type SetToIndexSubmitProps } from '@/types'
import { type KeyboardEventHandler, type MouseEventHandler, useRef, useState, type ReactElement } from 'react'

export default function SetToIndex ({ children, ...divProps }: SetToIndexProps): ReactElement<HTMLDivElement> {
  const { setToIndex, totalPages } = usePaginatorContext()
  const [targetIndex, setTargetIndex] = useState<number | undefined>(undefined)
  return (
    <div {...divProps}>
      <SetToIndexContextProvider setTargetIndex={setTargetIndex} setToIndex={setToIndex} targetIndex={targetIndex} totalPages={totalPages}>
        {children}
      </SetToIndexContextProvider>
    </div>
  )
}

function SetToIndexInput ({ ...inputProps }: SetToIndexInputProps): ReactElement<HTMLInputElement> {
  const { pageNumberOffset, setToIndex, totalPages } = usePaginatorContext()
  const { setTargetIndex, targetIndex } = useSetToIndexContext()
  const inputRef = useRef<HTMLInputElement>(null)
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter') return
    if (inputRef.current === null || !inputRef.current.checkValidity() || targetIndex === undefined) return
    setToIndex(targetIndex)
    setTargetIndex(undefined)
  }
  return (
    <input
      {...inputProps}
      ref={inputRef}
      value={targetIndex}
      onChange={(e) => { setTargetIndex(Number(e.target.value)) }}
      onKeyDown={onKeyDown}
      type="number"
      min={pageNumberOffset + 1}
      max={pageNumberOffset + totalPages}
    />
  )
}

function SetToIndexSubmit ({ children, ...buttonProps }: SetToIndexSubmitProps): ReactElement<HTMLButtonElement> {
  const { setToIndex } = usePaginatorContext()
  const { targetIndex } = useSetToIndexContext()
  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    if (targetIndex !== undefined) setToIndex(targetIndex)
  }
  return <button onClick={onClick} {...buttonProps}>{children ?? 'Go'}</button>
}

SetToIndex.Input = SetToIndexInput
SetToIndex.Submit = SetToIndexSubmit
