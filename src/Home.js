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
                        title="The lean starup"
                        price="99.99"
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product 
                        title="The lean starup"
                        price="15.33"
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        title="The lean starup"
                        price="10.99"
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product 
                        title="The lean starup"
                        price="12.99"
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product 
                        title="The lean starup"
                        price="11,8"
                        rating={2}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        title="The lean starup"
                        price="44.99"
                        rating={1}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                </div>
            
            </div>
        </div>
    )
}

export default Home
