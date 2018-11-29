import { action } from 'typesafe-actions'

import { ADD, INCREMENT, DECREMENT } from './constants'

// CLASSIC API
export const increment = () => action(INCREMENT)
export const decrement = () => action(DECREMENT)
export const add = (amount: number) => action(ADD, amount)
