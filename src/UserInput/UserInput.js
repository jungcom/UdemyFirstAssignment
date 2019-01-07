import React from 'react';

const userInput = (props) => {
    const style ={
        border : '2px solid'
    }
    return (
        <input style={style} onChange={props.changed} value={props.name}></input>
    )
};

export default userInput