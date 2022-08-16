import React from 'react'
import '../index.css'
import phoneIcon from '../images/phone-icon.png'
import mailIcon from '../images/mail-icon.png'

const Contact = ({ img, name, phone, email }) => {
  // console.log(props);

  return (
    <div className="contact-card">
      <img src={img} alt="gambar koceng" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="gambar hengpon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} alt="gambar email" />
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Contact