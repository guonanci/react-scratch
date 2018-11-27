import cuid from 'cuid'
import { action } from 'typesafe-actions'

import { Todo, TodosFilter } from './models'

import { ADD, CHANGE_FILTER, TOGGLE, } from './constants'

export const add = (title: string) =>
  action (ADD, {
    completed: false,
    id: cuid(),
    title,
  } as Todo)

export const toggle = (id: string) =>
  action(TOGGLE, id)

export const changeFilter = (filter: TodosFilter) =>
  action(CHANGE_FILTER, filter)
