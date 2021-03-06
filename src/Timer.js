const React = require('react')

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0})
  }
  render() {
    let start = (this.state.time == 0) ?
      <button className="waves-effect waves-light btn" onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isOn) ?
      <button className="waves-effect waves-light pink btn" onClick={this.stopTimer}>stop</button> :
      null
    let reset = (this.state.time != 0 && !this.state.isOn) ?
      <button className="waves-effect waves-light blue btn reset" onClick={this.resetTimer}>reset</button> :
      null
    let resume = (this.state.time != 0 && !this.state.isOn) ?
      <button className="waves-effect waves-light grey btn resume" onClick={this.startTimer}>resume</button> :
      null
    return(
      <div>
        <h3>{this.state.time}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
module.exports = Timer