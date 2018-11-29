import { useState, useEffect } from 'react'
import { Button,  } from 'antd'
import * as React from 'react'

const ReactHooks = () => {
  const [count, setCount] = useState(0)

  // If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount,
  // componentDidUpdate, and componentWillUnmount combined.

  // Note how the logic that sets document.title is split between componentDidMount and componentDidUpdate. The
  // subscription logic is also spread between componentDidMount and componentWillUnmount. And componentDidMount
  // contains code for both tasks.
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]); // Only re-run the effect if count changes
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  )
}


export default ReactHooks