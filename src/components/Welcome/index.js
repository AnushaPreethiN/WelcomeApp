// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  changeText = () => {
    const {text} = this.state
    this.setState(prevState => (text: 'Subscribed'))
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p>Thank You,Happy Learning</p>
        <button type="button" className="Button" onClick={this.changeText}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
