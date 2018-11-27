import Types from 'Types'
import { connect,  } from 'react-redux'

import { countersActions, countersSelectors } from '@/features/counters'
import { FCCounter,  } from '@/components'

export interface IFCCounterConnectedExtendedProps {
  initialCount: number
}

const mapStateToProps = (state: Types.RootState, ownProps: IFCCounterConnectedExtendedProps) => ({
  count: countersSelectors.getReduxCounter(state.counters) + ownProps.initialCount,
})

export const FCCounterConnectedExtended = connect(mapStateToProps, {
  onIncrement: countersActions.increment,
})(FCCounter)