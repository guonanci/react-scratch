import * as React from 'react' // difference in option between TypeScript and Babel on handling CommonJS modules.
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import { Button } from 'antd'

const App = (
  <Provider store={store}>
    <Button type='primary'>Button</Button>
  </Provider>
)

render(App, document.getElementById('app'))