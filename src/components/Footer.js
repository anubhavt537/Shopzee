import React from 'react'
import './Footer.css'
import footer_logo from './Assets/logo_big.png'
import instagram_logo from './Assets/instagram_icon.png'
import pinterest_logo from './Assets/pintester_icon.png'
import whatsapp_logo from './Assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div className="footer">
         <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>ShopZee</p>
         </div>
         <ul className="footer-links">
           <li>company</li>
           <li>product</li>
           <li>office</li>
           <li>about</li>
           <li>contact</li>
         </ul>
         <div className="footer-social-icon">
            <div className="footer-icon-contain">
            <img src={instagram_logo} alt="" />
            </div>
    
            <div className="footer-icon-contain">
            <img src={pinterest_logo} alt="" />
            </div>

            <div className="footer-icon-contain">
            <img src={whatsapp_logo} alt="" />
            </div>
         </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024-All right reserved</p>
        </div>
         
         
    </div>
  )
}
