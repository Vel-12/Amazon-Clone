import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <img className='home__image'
            src='https://m.media-amazon.com/images/I/612AqhqwllL._SX3000_.jpg'/>

          <div className='home__row'>
            <Product 
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={100}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}/>

            <Product 
            id="4903850"
            title="Honor MagicBook X 15, Intel Core i3-10110U / 15.6 inch (39.62 cm)"
            price={26000}
            image="https://m.media-amazon.com/images/I/61aph8BdHML._AC_SY200_.jpg"
            rating={4}/>
          </div>

          <div className='home__row'>
            <Product 
            id="23445930"
            title="pTron Bassbuds Duo New Bluetooth 5.1 Wireless Headphones"
            price={500}
            image="https://m.media-amazon.com/images/I/31BtqFqyasL._AC_SY200_.jpg"
            rating={4}/>

            <Product
            id="3254354345"
            title="Oppo A74 5G (Moonlight Gold, 4GB RAM, 64GB Storage)"
            price={16000}
            image="https://m.media-amazon.com/images/I/41BnHjRP0ZS._AC_SY200_.jpg"
            rating={4}/>

            <Product 
            id="90829332"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={18000}
            image="https://m.media-amazon.com/images/I/51UHoxzInpL.jpg"
            rating={5}/>

          </div>

          <div className='home__row'>
            <Product 
            id="6232435"
            title="LG UltraWide 73 cm (29 Inches) WFHD (2560 x 1080) IPS Display - HDR 10, AMD Freesync, Inbuilt 5W Speaker, sRGB 99%, Multi Tasking Monitor, HDMI X 2, Made in India - 29WL50S, Black"
            price={30000}
            image="https://m.media-amazon.com/images/I/61dVD28WPrL._AC_UY218_.jpg"
            rating={5}/>

          </div>
        </div>
    </div>
  )
}

export default Home