import React from "react";
import './CustomBtn.scss';

const CustomBtn = ({children, ...otherprops}) => {
    return (
        <button className='custom-btn' {...otherprops}>
            {children}
        </button>
    );
}
export default CustomBtn;