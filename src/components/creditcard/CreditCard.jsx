import React from 'react';
import './CreditCard.css'

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const hashCard = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`;
  const newExpirationYear = expirationYear.toString().slice(2);

  return (
    <div
      className='creditCard'
      style={{ backgroundColor: `${bgColor}` }}
    >
      <p style={{ color: `${color}` }}>{type}</p>
      <h2 style={{ color: `${color}` }}>{hashCard}</h2>
      <p style={{ color: `${color}` }}>
        Expires: {expirationMonth}/{newExpirationYear} {bank}
        <br />
        {owner}
      </p>
    </div>
  );
}

export default CreditCard;