import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
return (
    <div className='cards'>
    <h1>Check out these EPIC Destinations!</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            src='images/img-9.jpg'
            text='Explore Outer Space'
            label='Adventure'
            path='/services'
            />
            <CardItem
            src='images/img-2.jpg'
            text='Travel through the Swiss Alps'
            label='Luxury'
            path='/services'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src='images/img-10.jpg'
            text='Discover whats in these waters'
            label='Mystery'
            path='/services'
            />
            <CardItem
            src='images/img-1.jpg'
            text='Sail around the world'
            label='Adventure'
            path='/products'
            />
            <CardItem
            src='images/img-8.jpg'
            text='Go star gazing'
            label='Adrenaline'
            path='/sign-up'
            />
        </ul>
        </div>
    </div>
    </div>
);
}

export default Cards;