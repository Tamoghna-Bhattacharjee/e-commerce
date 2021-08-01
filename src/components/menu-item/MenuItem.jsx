import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router';

const MenuItem = (props) => {
    //console.log(props);
    return (
        <div className={`menu-item ${props.size}`} onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
            <div className="background-img" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
            <div className='content'>
                <h1 className='title'>{props.title}</h1>
                <span className='sub-title'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);