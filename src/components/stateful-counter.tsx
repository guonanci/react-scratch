import * as React from 'react'

export interface IStatefulCounterProps {
  label: string
}

interface IState {
  readonly count: number
}

export class StatefulCounter extends React.Component<IStatefulCounterProps, IState> {
  readonly state: IState = {
    count: 0,
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