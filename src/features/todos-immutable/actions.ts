import cuid from 'cuid'
import { action } from 'typesafe-actions'
import { Map } from 'immutable'

import { ITodo, TodosFilter } from './models'

import { ADD, CHANGE_FILTER, TOGGLE, } from './constants'

export const add = (title: string) =>
  action (ADD, Map({
    id: cuid(),
    title,
    completed: false,
  }) as ITodo)

export const toggle = (id: string) =>
  action(TOGGLE, id)

export const changeFilter = (filter: TodosFilter) =>
  action(CHANGE_FILTER, filter)
