import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG" />
                
                <div className="home__row">
                    <Product 
                        title="AmazonBasics 35.5L Storage Bench Ottoman Light Grey"
                        price="94.52"
                        rating={5}
                        image="https://m.media-amazon.com/images/I/816E+Kkm7VL._AC_UL320_.jpg"
                    />
                    <Product 
                        title="AmazonBasics Light-Weight Microfiber Duvet Cover Set with Snap Buttons - Full/Queen, Grey Crosshatch"
                        price="23.99"
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91jeqvAyUML._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
                        price="21.99"
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg"
                    />
                    <Product 
                        title="AmazonBasics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
                        price="13.99"
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81IC5+bWDgL._AC_UL320_.jpg"
                    />
                    <Product 
                        title="AmazonBasics Enameled Cast Iron Dutch Oven - 6-Quart, Grey"
                        price="44.99"
                        rating={4}
                        image="https://m.media-amazon.com/images/I/818BtMx1D2L._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        title="Hisense 32-Inch 32H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
                        price="139.99"
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            
            </div>
        </div>
    )
}

export default Home
