import React from 'react';
import './Homepage.style.scss';

export const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='menu-container'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HAT</h1>
                        <span className='sub-title'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>JACKET</h1>
                        <span className='sub-title'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SNICKERS</h1>
                        <span className='sub-title'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>WOMEN</h1>
                        <span className='sub-title'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MEN</h1>
                        <span className='sub-title'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}