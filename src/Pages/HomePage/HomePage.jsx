import React from 'react';
import './Homepage.scss';

import MenuContainer from '../../components/menu-container/MenuContainer.jsx';

export const Homepage = (props) => {
    //console.log(props);
    return (
        <div className='homepage'>
            <MenuContainer/>
        </div>
    );
}