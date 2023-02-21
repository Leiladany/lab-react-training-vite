import React from 'react';
import './IdCard.css'

function IdCard(props) {
  const { lastName, firstName, gender, height, picture } = props;
  const birth = props.birth.toLocaleDateString()
  return (
    <div className="idcard">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <p>
          <b>First Name:</b> {firstName}
        </p>
        <p>
          <b>Last Name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Height:</b> {height}
        </p>
        <p>
          <b>Birth:</b> {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard