import React from 'react';

function Child({onAction}){
    return(
        <button onClick={onAction}>Click Me!</button>
    );
}
export default Child;