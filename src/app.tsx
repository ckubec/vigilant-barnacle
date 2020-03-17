import React from 'react';
import {Header} from "./header/header";
import {Body} from "./body/body";

const bodystyle = {
    position: 'relative' as 'relative',
    overflowY: "scroll" as 'scroll',
    //backgroundColor: "white"
};

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <div style={bodystyle}>
                    <Body key="pagebody"/>
                </div>
            </>
        );
    }
}

export default App;
