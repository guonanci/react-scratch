import * as React from 'react'

export interface IFCSpreadAttributesProps {
  className?: string
  style?: React.CSSProperties
}

export const FCSpreadAttributes: React.FunctionComponent<IFCSpreadAttributesProps> = (props) => {
  const { children, ...restProps } = props

  return (
    <div {...restProps}>
      {children}
    </div>
  )
}