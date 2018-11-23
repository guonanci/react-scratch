import { StateType } from 'typesafe-actions'
import { RouterAction, LocationChangeAction } from 'connected-react-router'
type ReactRouterAction = RouterAction | LocationChangeAction
import { createBrowserHistory } from 'history'

import { CountersAction } from "../features/counters"
import createRootReducer from './root-reducer'

const history = createBrowserHistory()

const rootReducer = createRootReducer(history)


declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = ReactRouterAction | CountersAction
}