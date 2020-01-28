import React from 'react';
import './index.css';
import {Header} from "./header";


class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <p>Body</p>
            </>
        );
    }
}

export default App;
