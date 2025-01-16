import React from 'react';
import './switch.css';

const Switch = ({ isOn, handleToggle, id, text }) => {
    return (
        <div className='switchbtn-container'>
            {text ? <p>{text}</p> : '' }
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox mb-2"
                id={`react-switch-${id}`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#06D6A0' }}
                className="react-switch-label"
                htmlFor={`react-switch-${id}`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
}

export default Switch;