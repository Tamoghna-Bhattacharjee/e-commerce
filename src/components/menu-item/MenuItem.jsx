import React from 'react';
import './MenuItem.scss';

export const MenuItem = (props) => {
    return (
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{props.title}</h1>
                <span className='sub-title'>SHOP NOW</span>
            </div>
        </div>
    );
}