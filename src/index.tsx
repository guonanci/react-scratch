import * as React from 'react' // difference in option between TypeScript and Babel on handling CommonJS modules.
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Button } from 'antd'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Button type='primary'></Button>
      </div>
    )
  }
}

export default App