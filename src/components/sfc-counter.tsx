import * as React from 'react'

export interface IFCCounterProps {
  label: string
  counter: number
  onIncrement: () => any
}

export const FCCounter: React.FunctionComponent<IFCCounterProps>