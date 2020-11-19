import React from 'react';

const userInput = (props) => {
    const style = {
        marginLeft : '30px'
    }

    return <input style={style} type='text' onChange={props.inputTrigger} value={props.value}/>;
};


export default userInput;