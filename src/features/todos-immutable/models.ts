import { Map } from 'immutable'

// Union Types
type AllowedValue =
  string |
  boolean
export interface ITodo extends Map<string, AllowedValue> {
  id: string
  title: string
  completed: boolean
}

export enum TodosFilter {
  All = '',
  Completed = 'completed',
  Active = 'active',
}
