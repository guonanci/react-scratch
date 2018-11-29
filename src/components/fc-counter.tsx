import * as React from 'react'
import { Button,  } from 'antd'

export interface IFCCounterProps {
  label: string
  count: number
  onIncrement: () => any
  onDecrement: () => any
}

export const FCCounter: React.FunctionComponent<IFCCounterProps> = (props) => {
  const { label, count, onIncrement, onDecrement } = props

  const handleIncrement = () => { onIncrement() }
  const handleDecrement = () => { onDecrement() }

  return (
    <div>
      <span>{label}: {count}</span>
      <Button type='primary' onClick={handleIncrement}>
        {`Increment`}
      </Button>
      <Button type='danger' onClick={handleDecrement}>
        {`Decrement`}
      </Button>
    </div>
  )
}