import './header.css'
import React from 'react';
import menuicon from '../imgs/menu.jpeg'
import { list } from '../data/headlist.jsx'
import { useState } from  "react";
import { AmazonBar } from '../Sidebar/sidebar.jsx'


export const AmazonHeader = ()  => {
    const [menuVisible, setMenuVisible] = useState (false);
    const toggleMenu = () =>{
        setMenuVisible(!menuVisible);
    }

   return(
    <>
        <header>
            <div className="start">
                <div className="flex-logo">
                <a href="#"><img src="https://pngimg.com/d/amazon_PNG25.png" alt=""/></a>
                    <div className="map">
                        <i className="map-maker"></i>
                        <div>
                            <span>Deliver to:</span>
                            <span>Colombia</span>
                        </div>
                    </div>
                </div>

                <div className="input-container">
                    <span>All</span>
                    <i className="carret-down"></i>

                    <input type="text"/>
                    <i className="search"></i>
                </div>
                <div className="flex right">
                    <div className="flex_lang">
                        <img  onClick={toggleMenu} src="https://static.vecteezy.com/system/resources/thumbnails/002/399/741/small/american-flag-icon-vector.jpg" alt=""/>
                        <i className="carret-down"></i>
                    </div>
                    <div className="sign">
                            <span>Hello, Sign In</span>
                                <div className="flex ac">
                                    <span>Account & Lists</span>
                                    <i className="carret-down"></i>
                                </div>
                    </div>
                    <div className="sign">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                    <div className="flex cart">
                        <i className="shopping-cart"></i>
                        <span className="ca">Cart</span>

                    </div>
                </div>
            </div>
            <div className="second">
                <div className="second-1">
                    <span onClick={toggleMenu}><img className='menuham' src={menuicon} alt="" srcset="" /> All</span>
                </div>
                <div className="second-2">
                    <ul>
                    {list.map((list) => (
                            <>
                                <div className= 'list' alt="" > {list.li}  </div>
                            </>
                        ))}
                    </ul>
                </div>

            </div>
            </header>

    {menuVisible &&(
        <AmazonBar ></AmazonBar>
    )}
    </>
   )
}
