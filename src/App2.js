import React, { Component } from 'react';
import Room4 from './components/Room4';
import Room3 from './components/Room3';
import Room2 from './components/Room2';
import Room1 from './components/Room1';
import empty from './images/empty.png';
import red from './images/red.png';
import green from './images/green.png';
import yellow from './images/yellow.png';
import Timer from './Timer.js'

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
      isOn1:0,
      isOn2:0,
      isOn3:0,
      isOn4:0
    }
    this.startTimer1 = this.startTimer1.bind(this);
    this.handleClickRoom2 = this.handleClickRoom2.bind(this);
    this.handleClickRoom3 = this.handleClickRoom3.bind(this);
    this.handleClickRoom4 = this.handleClickRoom4.bind(this);
  }

  // componentDidMount(){
  //   this.setState({
  //     timer:0
  //   });
  // }

  // startTimer1() {
  //   this.setState({
  //     time: this.state.time1,
  //     start: Date.now() - this.state.time1,
  //     isOn: true
  //   })
  //   this.timer1 = setInterval(roomTimer, 1000);
  //   function roomTimer(){
  //     this.setState({
  //       time1: Date.now() - this.state.start1
  //     });
  //   }
  // }
  startTimer1() {
    this.setState({
      time: this.state.time1,
      start: Date.now() - this.state.time1,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time1: Date.now() - this.state.start1
    }), 1);
  }
  stopTimer1() {
    this.setState({isOn: false})
    clearInterval(this.timer1)
  }
  resetTimer1() {
    this.setState({time1: 0})
  }

  // handleClickRoom1(timer){
  //   var myVar = setInterval(roomTimer, 1000);
  //   var start = new Date();
  //   var elapsedTime;
  //   function roomTimer(){
  //     var current = new Date();
  //     elapsedTime = Math.round((current - start)/1000);
  //   }
  //   this.setState({
  //     color: "red",
  //     timer1: elapsedTime
  //   });
  // }

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
    // let time = 0;
    let color = empty;
    // if (0 < time && time <= 10){
    //   color = green;
    // } else if (10 < time && time <= 20){
    //   color = yellow;
    // } else if (20 < time){
    //   color = red;
    // }
    return (
      <div className="center">
        <header className="center">
          <h1>Ranking Board</h1>
          <h6>Responsive web by React and Materialize CSS Grid</h6>
        </header>
        <div className="flex-container">
          <div><img src={color} alt="room1" width="200" height="200"></img></div>
          <div><img src={green} alt="room2" width="200" height="200"></img></div>
          <div><img src={yellow} alt="room3" width="200" height="200"></img></div>
          <div><img src={red} alt="room4" width="200" height="200"></img></div>
        </div>
        <div className="flex-container2">
          <div>
            <Room1 timer={this.state.time1} onChange={this.startTimer1}></Room1>
          </div>
          <div>
            <Room2 timer={this.state.time2} onChange={this.handleClickRoom2}></Room2>
          </div>
          <div>
            <Room3 timer={this.state.time3} onChange={this.handleClickRoom3}></Room3>
          </div>
          <div>
            <Room4 timer={this.state.time4} onChange={this.handleClickRoom4}></Room4>
          </div>
        </div>
        <div>
          <Timer></Timer>
        </div>
      </div>
    );
  }
}

export default App;