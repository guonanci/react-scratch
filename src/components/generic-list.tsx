import * as React from 'react'

export interface IGenericListProps<T> {
  items: T[]
  itemRenderer: (item: T) => JSX.Element
}

export class GenericList<T> extends React.Component<IGenericListProps<T>, {}> {
  public render () {
    const { items, itemRenderer } = this.props
    return (
      <div>
        {items.map(itemRenderer)}
      </div>
    )
  }
}