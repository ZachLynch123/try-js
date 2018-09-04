import React from 'react';

const userInput = ( props ) => {
const style = {
    backgroundColor: 'blue'
}

    return(
        <input type="text" 
        onChange={props.change} 
        value={props.name}></input>
    );
}

export default userInput;