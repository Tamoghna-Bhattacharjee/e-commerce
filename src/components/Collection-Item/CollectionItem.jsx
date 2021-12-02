import React from "react";
import './CollectionItem.scss';

const CollectionItem = ({name, imageUrl, price}) => {
    return (
        <div className='shopItem'>
            <div className='background-img' 
                style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="shopitem-footers">
                <div className='name'>{name}</div>
                <div className='price'>${price}</div>
            </div>
        </div>
    );
}

export default CollectionItem;