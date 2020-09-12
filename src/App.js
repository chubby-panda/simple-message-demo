import React from 'react';


function App() {
    // variables
    // const message = 'JavaScript is cool!'
    const [message, setMessage] = React.useState('JavaScript is cool!');

    function handleClick() {
        setMessage('Or is it?')
    }


    // template
    return (
    <div>
        <h1>{message}</h1>
        <button onClick={handleClick}>Update the message!</button>
    </div>
    )
}

export default App;