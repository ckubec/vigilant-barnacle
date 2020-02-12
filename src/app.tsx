import React from 'react';
import {Header} from "./header/header";
import {Body} from "./body/body";

const bodystyle = {
    position: 'relative' as 'relative',
    overflowY: "scroll" as 'scroll',
    backgroundColor: "black"
};

class App extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <body style={bodystyle}>
                    <Body key="pagebody"/>
                </body>
            </>
        );
    }
}

export default App;
