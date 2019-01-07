import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Hello {props.name} this is the UserOutput component</p>
            <p>For this assignment, we will create a simple react application</p>
        </div>
    )
};

export default userOutput