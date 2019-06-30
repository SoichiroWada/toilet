import React, { Component } from 'react';
import Room4 from './components/Room4';
import Room3 from './components/Room3';
import Room2 from './components/Room2';
import Room1 from './components/Room1';
import empty from './images/empty.png';
import red from './images/red.png';
import green from './images/green.png';
import yellow from './images/yellow.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      time1:0,
      time2:0,
      time3:0,
      time4:0,
      start1:0,
      start2:0,
      start3:0,
      start4:0,
      isOn1:false,
      isOn2:false,
      isOn3:false,
      isOn4:false,
      color1:empty,
      color2:empty,
      color3:empty,
      color4:empty
    }
    this.startTimer1 = this.startTimer1.bind(this);
    this.stopTimer1 = this.stopTimer1.bind(this);
    this.resetTimer1 = this.resetTimer1.bind(this);
    this.handleClickRoom2 = this.handleClickRoom2.bind(this);
    this.handleClickRoom3 = this.handleClickRoom3.bind(this);
    this.handleClickRoom4 = this.handleClickRoom4.bind(this);
  }

  startTimer1() {
    let time = this.state.time1;
    let color = this.state.color1;
    if (0 < time && time <= 3000){
      color = green;
    } else if (3000 < time && time <= 6000){
      color = yellow;
    } else if (6000 < time){
      color = red;
    }

    this.setState({
      time1: this.state.time1,
      start1: Date.now() - this.state.time1,
      isOn1: true,
      color1: color
    })
    this.timer1 = setInterval(() => this.setState({
      time1: Date.now() - this.state.start1
    }), 1);
  }
  stopTimer1() {
    this.setState({isOn1: false})
    clearInterval(this.timer1)
  }
  resetTimer1() {
    this.setState({
      start1:0,
      time1: 0,
      isOn1: false,
      color1: empty
    })
  }

  handleClickRoom2(time) {
    this.setState({
      color: "points",
      timer:time
    });
  }
  handleClickRoom3(time) {
    this.setState({
      color: "name",
      timer:time
    });
  }
  handleClickRoom4(time) {
    this.setState({
      color: "empty",
      timer: time
    });
  }

  render() {

    return (
      <div className="center">
        <header className="center">
          <h1>Toilet Iot</h1>
          <h6>Responsive web by React and Materialize CSS Grid</h6>
        </header>
        <div className="flex-container0">
          <p>Room1</p>
          <p>Room2</p>
          <p>Room3</p>
          <p>Room4</p>
        </div>
        <div className="flex-container">
          <div><img src={this.state.color1} alt="room1" width="200" height="200"></img></div>
          <div><img src={this.state.color2} alt="room2" width="200" height="200"></img></div>
          <div><img src={this.state.color3} alt="room3" width="200" height="200"></img></div>
          <div><img src={this.state.color4} alt="room4" width="200" height="200"></img></div>
        </div>
        <div className="flex-container2">
          <div>
            <Room1 time={this.state.time1} isOn={this.state.isOn1} onChange1={this.startTimer1} 
            onChange2={this.stopTimer1} onChange3={this.resetTimer1} onChange4={this.colorHandler1}></Room1>
          </div>
          <div>
            <Room2 time={this.state.time2} isOn={this.state.isOn2} onChange1={this.startTimer2} 
              onChange2={this.stopTimer2} onChange3={this.resetTimer2} onChange4={this.colorHandler2}></Room2>
          </div>
          <div>
            <Room3 time={this.state.time3} isOn={this.state.isOn3} onChange1={this.startTimer3} 
              onChange2={this.stopTimer3} onChange3={this.resetTimer3} onChange4={this.colorHandler3}></Room3>
          </div>
          <div>
            <Room4 time={this.state.time3} isOn={this.state.isOn3} onChange1={this.startTimer3} 
              onChange2={this.stopTimer3} onChange3={this.resetTimer3} onChange4={this.colorHandler3}></Room4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;