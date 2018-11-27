import * as React from 'react'

interface IMouseProviderState {
  readonly x: number
  readonly y: number
}

export interface IMouseProviderProps {
  render: (state: IMouseProviderState) => React.ReactNode,
}

export class MouseProvider extends React.Component<IMouseProviderProps, IMouseProviderState> {
  readonly state: IMouseProviderState = { x: 0, y: 0 }

  handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render () {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/* Instead of providing a static representation of what <Mouse> render, use the `render` prop to dynamically
          determine what to render. */}
        {this.props.render(this.state)}
      </div>
    )
  }
}