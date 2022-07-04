import React, { Profiler } from 'react'
import './Home.css';
import Product from './Product';
import './Product.css';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' 
            src='https://m.media-amazon.com/images/I/81UwfObBWFL.jpg'alt=''></img>
            <div className='home__row'>
                <Product title="The Theory"
                price={29.99}
                image = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388638565l/20415651.jpg"
                rating ={5} />
                <Product  id ="34567"
                title="Tecno POVA 3 "
                price={239}
                rating={5}
                image="https://m.media-amazon.com/images/I/911EyrZxaUL._SX522_.jpg"
                
                />
                <Product
                title="Smart TV "
                price={239}
                rating={5}
                image="https://m.media-amazon.com/images/I/71YfpvVcBBL._SX522_.jpg"/>
                <Product
                title="Remote Game "
                price={39}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/31YI-txNdpL._AC_SR400,600_.jpg"/>
                
            </div>
            <div className='home__row'>
                <Product
                title="Cosmic Byte KeyBoard "
                price={39}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/41AM0T231cL._AC_SR400,600_.jpg"/>
                <Product
                title="Cosmic Byte Mouse "
                price={39}
                rating={5}
                image="https://m.media-amazon.com/images/I/51eFgb4stIL._SX522_.jpg"/>
                <Product
                title="Ant Esports Speaker "
                price={39}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/31vRfP6vOqL._AC_SR400,600_.jpg"/>
                <Product
                title="Redragon Keyboard "
                price={39}
                rating={5}
                image="https://m.media-amazon.com/images/I/71w9I5LAUZL._SX522_.jpg"/>
                
            </div>
            <div className="home__row">
               <Product
               title="Redragon Keyboard "
               price={39}
               rating={5}
               image="https://m.media-amazon.com/images/I/71w9I5LAUZL._SX522_.jpg"/>
               
               <Product
               title="Redragon Keyboard "
               price={39}
               rating={5}
               image="https://m.media-amazon.com/images/I/71w9I5LAUZL._SX522_.jpg"/>
               
               <Product
              title="Redragon Keyboard "
              price={39}
              rating={5}
              image="https://m.media-amazon.com/images/I/71w9I5LAUZL._SX522_.jpg"/>
              
               <Product
               title="Redragon Keyboard "
               price={39}
               rating={5}
               image="https://m.media-amazon.com/images/I/71w9I5LAUZL._SX522_.jpg"/>
               

            </div>
        </div>


    </div>
  )
}

export default Home