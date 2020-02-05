import React from 'react';
import {Header} from "./header";
import {Body} from "./body";

const bodystyle = {
    position: 'relative' as 'relative',
    overflowY: "scroll" as 'scroll',
};

class App extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <body style={bodystyle} >
                    <Body/>
                </body>
            </>
        );
    }
}

export default App;
