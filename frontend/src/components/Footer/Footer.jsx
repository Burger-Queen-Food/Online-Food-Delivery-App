import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>At BurgerQueen, we bring your favorite meals right to your doorstep. Experience fast delivery, fresh ingredients, and exceptional service.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>011-26788999</li>
                        <li>BurgerQueen.gmail.com</li>
                    </ul>

                </div>
            </div>

            <hr />
            <p className="footer-copyright">copyright 2024 @ BurgerQueen.lk - All Right Reserverd.</p>


        </div>
    )
}

export default Footer