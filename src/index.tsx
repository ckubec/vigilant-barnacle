import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {Provider} from "react-redux";
import {store} from "./app/store";

ReactDOM.render(
    <Provider store={store}>
        <App key="app" />
    </Provider>
    , document.getElementById("app"));