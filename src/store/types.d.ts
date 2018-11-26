import { StateType } from 'typesafe-actions'
import {
  RouterAction,
  LocationChangeAction,
  CallHistoryMethodAction,
} from 'connected-react-router'
type ReactRouterAction = RouterAction | LocationChangeAction | CallHistoryMethodAction


import { CountersAction } from '../features/counters'
import rootReducer from './root-reducer'




declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = ReactRouterAction | CountersAction
}