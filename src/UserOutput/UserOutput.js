import React from 'react';

const userOutput = (props) => {
  return(
    <div>
      <p>{props.paragraph1} ~{props.author}</p>
      <p>{props.paragraph2} ~{props.author}</p>
    </div>
  )
}

export default userOutput;
