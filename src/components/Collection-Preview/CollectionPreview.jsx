import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../Collection-Item/CollectionItem';

export const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item, ind)=> ind < 4)
                    .map(({id, ...otherprops}) => {
                        return <CollectionItem key={id} {...otherprops}/>
                    })
                }
            </div>
        </div>
    );
}