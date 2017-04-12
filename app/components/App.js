import React from 'react';
import Popular from './Popular';

class App extends React.Component {
    // Describes UI for this component
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        );
    }
}

module.exports = App;