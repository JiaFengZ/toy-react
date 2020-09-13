import { Component, render } from '../src/toy-react'
import ToyReact from '../src/toy-react'

class MyComponent extends Component {
  render () {
    return (
      <div>
        <p>MyComponent</p>
        {this.children}
      </div>
    )
  }
}

const myElement = (
  <MyComponent id='a' class='b'>
    <div>myElement</div>
    <div></div>
  </MyComponent>
)

render(myElement, document.getElementById('content'))