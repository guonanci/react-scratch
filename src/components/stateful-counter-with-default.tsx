import * as React from 'react'
import { count } from 'rxjs/operators';

export interface IStatefulCounterWithDefaultProps {
  label: string
  initialCount?: number
}

interface IDefaultProps {
  readonly initialCount: number
}

interface IState {
  readonly count: number
}

export const StatefulCounterWithDefault: React.ComponentClass<IStatefulCounterWithDefaultProps> =
  class extends React.Component<IStatefulCounterWithDefaultProps & IDefaultProps> {
    // to make defaultProps strictly typed we need to explicitly declare their type
    // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11640
    static defaultProps: IDefaultProps = {
      initialCount: 0,
    }

    readonly state: IState = {
      count: this.props.initialCount,
    }

    componentWillReceiveProps ({ initialCount }: IStatefulCounterWithDefaultProps) {
      if (initialCount != null && initialCount !== this.props.initialCount) {
        this.setState({ count: initialCount })
      }
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 })
    }

    render () {
      const { handleIncrement } = this
      const { label } = this.props

      const { count } = this.state

      return (
        <div>
          <span>{label}: {count}</span>
          <button type='button' onClick={handleIncrement}>
            {`Increment`}
          </button>
        </div>
      )
    }
  }