import * as React from 'react'
import { FCCounter,  } from '@/components'

export default class extends React.Component<{}, { count: number }> {
  state = { count: 0 }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render () {
    return (
      <FCCounter
        label={'FCCounter with Redux, Immutable.js, TypeScript'}
        count={this.state.count}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    )
  }
}