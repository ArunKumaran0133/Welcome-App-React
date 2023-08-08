import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subBtnClicked = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const subscribe = this.getText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="happy-learning">Thank you! Happy learning</p>
        <button className="button" type="button" onClick={this.subBtnClicked}>
          {subscribe}
        </button>
      </div>
    )
  }
}

export default Welcome
