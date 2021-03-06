import React from "react";
import './FormInput.scss';

const FormInput = ({handelChange, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input'
                    onChange={handelChange}
                    {...otherProps} />
            {
                label? 
                (<label className={`${otherProps.value.length? 'shrink': ''} form-input-lebel`} >
                    {label}
                </label>)
                : null
            }
        </div>
    );
}

export default FormInput;