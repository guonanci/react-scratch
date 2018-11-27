import { action } from 'typesafe-actions'

import { ADD, INCREMENT } from './constants'

// CLASSIC API
export const increment = () => action(INCREMENT)
export const add = (amount: number) => action(ADD, amount)
