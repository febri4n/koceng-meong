import React from 'react'
import '../index.css'
import phoneIcon from '../images/phone-icon.png'
import mailIcon from '../images/mail-icon.png'

const Contact = (props) => {
  console.log(props);

  return (
    <div className="contact-card">
      <img src={props.img} alt="gambar koceng" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="gambar hengpon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} alt="gambar email" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Contact