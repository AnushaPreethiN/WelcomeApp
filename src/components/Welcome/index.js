// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSusbscribed: false}

  OnSubscribe = () => {
    this.setState(prevState => ({isSusbscribed: !prevState.isSusbscribed}))
  }

  getButtonText = () => {
    const {isSusbscribed} = this.state

    return isSusbscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        <button type="button" className="Button" onClick={this.OnSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
