import * as React from 'react'

interface INameProviderState {
  readonly name: string
}
interface INameProviderProps {
  children: (state: INameProviderState) => React.ReactNode
}

export class NameProvider extends React.Component<INameProviderProps, INameProviderState> {
  readonly state: INameProviderState = { name: 'Piotr' }

  render () {
    return this.props.children(this.state)
  }
}