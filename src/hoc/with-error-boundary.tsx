import * as React from 'react'
import { Subtract,  } from 'utility-types'

const MISSING_ERROR = 'Error was swallowed during propagation.'

interface InjectProps {
  onReset: () => any
}

export function withErrorBoundary <WrappedProps extends InjectProps> (
  WrappedComponent: React.ComponentType<WrappedProps>
  ) {

  type HocProps = Subtract<WrappedProps, InjectProps> & {
    // Here you can extend hoc props
  }

  type HocState = {
    readonly error: Error | null | undefined
  }

  return class WithErrorBoundary extends React.Component<HocProps, HocState> {
    static displayName = `withErrorBoundary(${WrappedComponent.name})`

    readonly state: HocState = {
      error: undefined,
    }

    componentDidCatch (error: Error | null, info: object) {
      this.setState({ error: error || new Error(MISSING_ERROR) })
      this.logErrorToCloud(error, info)
    }

    logErrorToCloud (error: Error | null, info: object) {
      // Todo: send error report to cloud
    }

    handleReset () {
      this.setState({ error: undefined })
    }

    render () {
      const { children, } = this.props as {
        children: React.ReactNode
      }
      const { error } = this.state

      if (error) {
        return (
          <div />
          // <WrappedComponent
          //   onReset={this.handleReset} // injected
          //   {...restProps}
          // />
        )
      }

      return children
    }
  }
}
