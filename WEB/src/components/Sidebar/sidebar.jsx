import './sidebar.css'
import React from 'react';
import { useState } from  "react";

export const AmazonBar = ()  => {

/**/
   return(
    <>
    {/*This is the bar that deploy when touching the hammenu*/}
    <div className='sidebar'>
        <div className="head">
            <h2>Hello, Sign In</h2>
        </div>
        <div className='content'>
            <h3>Digital Content & Devices</h3>
            <ul>
                <div>
                    <li>Amazon Music</li> <i className='right'></i>
                </div>
                <div>
                    <li>Kindle E-readers & Books</li> <i className='right'></i>
                </div>
                <div>
                    <li>Amazon Appstore</li> <i className='right'></i>
                </div>
            </ul>
            <div className='line'></div>
        </div>
        <div className='content'>
            <h3>Shop by Department</h3>
            <ul>
                <div>
                    <li>Electronics</li> <i className='right'></i>
                </div>
                <div>
                    <li>Computers</li> <i className='right'></i>
                </div>
                <div>
                    <li>Smart Home</li> <i className='right'></i>
                </div>
                <div>
                    <li>Arts & Crafts</li> <i className='right'></i>
                </div>
            </ul>
            <div className='line'></div>
        </div>
        <div className='content'>
            <h3>Programs & Features</h3>
            <ul>
                <div>
                    <li>Gift Cards</li> <i className='right'></i>
                </div>
                <div>
                    <li>Shop By Interest</li> <i className='right'></i>
                </div>
                <div>
                    <li>Amazon Live</li> <i className='right'></i>
                </div>
                <div>
                    <li>International Shopping</li> <i className='right'></i>
                </div>
            </ul>
        </div>
    </div>
    </>

    )
}