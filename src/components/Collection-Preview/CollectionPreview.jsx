import React from 'react';
import './CollectionPreview.scss';

export const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, ind)=> ind < 4).map(({id, name, imageUrl, price}) => {
                        return <div key={id} className='shopItem'>{name}</div>
                    })
                }
            </div>
        </div>
    );
}