import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

// State
// LifeCycle Events
// UI

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello World!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);