import React from 'react';

const Room3 = ({time,isOn,onChange1,onChange2,onChange3}) => {

  let start = (time === 0) ?
    <button className="waves-effect waves-light btn" onClick={onChange1}>start</button> :
    null;
  let stop = (isOn) ?
    <button className="waves-effect waves-light pink btn" onClick={onChange2}>stop</button> :
    null;
  let reset = (time !== 0 && !isOn) ?
    <button className="waves-effect waves-light blue btn reset" onClick={onChange3}>reset</button> :
    null;
  let resume = (time !== 0 && !isOn) ?
    <button className="waves-effect waves-light grey btn resume" onClick={onChange1}>resume</button> :
    null;

  return (
    <div>
      <h3>{time}</h3>
      {start}
      {stop}
      {resume}
      {reset}
    </div>
  )
}

export default Room3;