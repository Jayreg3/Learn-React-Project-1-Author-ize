import React from 'react';

const userInput = (props) => {
  return (
    <input type="text" value={props.text} onChange={props.userTyped}></input>
  )
}

export default userInput;
