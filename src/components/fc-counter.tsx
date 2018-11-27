import * as React from 'react'

export interface IFCCounterProps {
  label: string
  count: number
  onIncrement: () => any
}

export const FCCounter: React.FunctionComponent<IFCCounterProps> = (props) => {
  const { label, count, onIncrement } = props

  const handleIncrement = () => { onIncrement() }

  return (
    <div>
      <span>{label}: {count}</span>
      <button type='button' onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  )
}