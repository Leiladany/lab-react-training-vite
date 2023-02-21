import React from 'react'
import './Random.css'

function Random(props) {
  const { min, max } = props;
  return (
    <div className="random">
      <p>
        <b>
          Random Number between {min} and {max} ={'> '}
          {Math.floor(Math.random() * (max - min) + min)}
        </b>
      </p>
    </div>
  );
}

export default Random;