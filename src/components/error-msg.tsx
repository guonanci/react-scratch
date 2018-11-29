import * as React from 'react'

export const ErrorMsg: React.FunctionComponent<{ onReset: () => void }> = React.memo(({
  onReset,
}) => {
  return (
    <div>
      <h2>{`Sorry there was an unexpected error`}</h2>
      {`To continue: `}
      <a href='' onClick={onReset}>
        {`go to home page`}
      </a>
    </div>
  )
})

export function test (props: any) {
  const Container = props.componentClass
  return <Container />
}