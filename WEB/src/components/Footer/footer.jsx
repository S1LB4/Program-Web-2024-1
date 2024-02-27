import './footer.css'
import React from 'react';


export const AmazonFooter = ()  => {

   return(
    <>
    <section className='footer'>
        <div className="BackUp">
            <span>Back To Top</span>
        </div>
        <div className="detail">
            <div className="table">
                <div>
                    <div className='Head'>Make Money With Us</div>
                        <ul>
                            <li>Sell products on Amazon</li>
                            <li>Sell on Amazon Business</li>
                            <li>Sell apps on Amazon</li>
                            <li>Become an Affiliate</li>
                            <li>Advertise Your Products</li>
                            <li>Seld-Publish with Us</li>
                            <li>Host an Amazon Hub</li>
                        </ul>
                </div>
                <div>
                    <div className='Head'>Amazon Payment Products</div>
                    <ul>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>
                </div>
                <div>
                    <div className='Head'>Let Us Help You</div>
                    <ul>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <div className='Head'>Get To Know Us</div>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investors</li>
                        <li>Amazon Advices</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
        </div>
        <div className='last'></div>
        <div className="copy">
            <span>&copy; Designed by Juan Sebastian Silva</span>
        </div>
        </div>
    </section>
    </>
    )
}