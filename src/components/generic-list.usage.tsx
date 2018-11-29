import * as React from 'react'

import { IUser, User } from '@/models'
import { GenericList,  } from '@/components'

const users = [
  new User('志前', '组长'),
  new User('涂', '架构'),
  new User('小', '欣欣'),

]
export class UserList extends GenericList<IUser> {}

export default () => (
  <UserList
    items={users}
    itemRenderer={item => <div key={item.id}>{item.fullName}</div>}
  />
)