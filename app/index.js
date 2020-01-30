import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridEmployee from './components/grid/grid';

class App extends React.Component {
    render() {
        return (
            <div>Hello World
                <h1>Hi new react there!!</h1>
                <GridEmployee />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))