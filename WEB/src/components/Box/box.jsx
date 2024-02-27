import './box.css'
import React from 'react';
import { Prodcuts, Products2 } from '../data/Products.jsx';
import { box, box1, box2, box3, school, free, gamers, personal } from '../data/Box.jsx';
import { slider } from '../data/slide.jsx';


export const AmazonBox = ()  => {
    const handleLeftButton = function(event){
        const conect = document.querySelector('.product-slide');
        conect.scrollLeft -= 1100;
        event.preventDefault();
    }
    const handleRightButton = function(event){
        const conect = document.querySelector('.product-slide');
        conect.scrollLeft += 1100;
        event.preventDefault();
    }
    const handleLeftButton2 = function(event){
        const conect = document.querySelector('.product-slide-1');
        conect.scrollLeft -= 1100;
        event.preventDefault();
    }
    const handleRightButton2 = function(event){
        const conect = document.querySelector('.product-slide-1');
        conect.scrollLeft += 1100;
        event.preventDefault();
    }
   return(
    <>
    <section className='sect-1'>
        <div className="container">
            <div className='container-1'>
                <div className="product">
                    <div className="box">
                        <h3>Men Clothing</h3>
                        <div className='box-1'>


                        {box.map((box) => (
                            <>
                                <img src={box.img} alt="" />
                            </>
                        ))}


                        </div>
                    </div>
                    <div className="box">
                        <h3>Gaming accesories</h3>
                        <div className='box-1'>

                        {box1.map((box) => (
                            <>
                                <img src={box.img} alt="" />
                            </>
                        ))}

                        </div>
                    </div>
                    <div className="box">
                        <h3>Makeup</h3>
                        <div className='box-1'>

                        {box2.map((box) => (
                            <>
                                <img src={box.img} alt="" />
                            </>
                        ))}

                        </div>
                    </div>
                    <div className="box">
                        <h3>Hololive</h3>
                        <div className='box-1'>

                        {box3.map((box) => (
                            <>
                                <img src={box.img} alt="" />
                            </>
                        ))}


                        </div>
                    </div>
                </div>


                <div className="product">
                    <div className="box">
                    <h3>School Supplies</h3>
                    <div className="box-2">

                        {school.map((school) => (
                                <>
                                    <img src={school.img} alt="" />
                                </>
                            ))}

                    </div>
                    </div>

                    <div className="box">
                    <h3>Free shipping</h3>
                    <div className="box-2">

                            {free.map((free) => (
                                <>
                                    <img src={free.img} alt="" />
                                </>
                            ))}
                    </div>
                    </div>

                    <div className="box">
                    <h3>Gamers Paradise</h3>
                    <div className="box-2">

                            {gamers.map((gamers) => (
                                <>
                                    <img src={gamers.img} alt="" />
                                </>
                            ))}

                    </div>
                    </div>

                    <div className="box">
                    <h3>Personal Care</h3>
                    <div className="box-2">

                            {personal.map((personal) => (
                                <>
                                    <img src={personal.img} alt="" />
                                </>
                            ))}


                    </div>
                    </div>
                </div>
            </div>
            <div className='slider'>
                <div className='box-images'>
                    <div className='slide'>
                        {slider.map((slider) => (
                                <>
                                    <img src={slider.img} alt="" />
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section className='sect-2'>
        <div className="slide-2">
            <div className="L-btn" onClick={handleLeftButton}><i className='left'></i></div>
            <div className="btn-R" onClick={handleRightButton}><i className='right'></i></div>
            <h3>Best Sellers in Sports & Outdoors</h3>
            <ul className='product-slide'>

            {Prodcuts.map((product, index) => (
                <img key={index} src={product.img} alt="" />
            ))}


            </ul>
        </div>
    </section>

    <section className='sect-2'>
        <div className="slide-2">
            <div className="L-btn" onClick={handleLeftButton2}><i className='left'></i></div>
            <div className="btn-R" onClick={handleRightButton2}><i className='right'></i></div>
            <h3>Best Sellers in Books</h3>
            <ul className='product-slide product-slide-1'>

            {Products2.map((product2, index) => (
                <img key={index} src={product2.img} alt="" />
            ))}
            </ul>
        </div>
    </section>
    </>
    )
 }
