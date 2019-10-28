import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = { happy: 'hacking!' };
    function getTime() {
        return (new Date()).toLocaleTimeString();
    }

    return ( //JSX
        <div>
            <h3>{getTime()}</h3>
            <label htmlFor="name" className="name_label">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'black', color: 'white' }}>
                {buttonText.happy}
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));