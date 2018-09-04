import React from 'react';



const userOutput = ( props ) => {
    const style = {
        backgroundColor: 'red'
    }

    return(
        <div>
            <p>Hello!</p>
            <p>UserName: {props.userName}</p>
        </div>
        
    );
    
};
 export default userOutput;