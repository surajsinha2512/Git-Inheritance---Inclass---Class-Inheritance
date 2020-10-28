import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
function toggle() {
    const del=document.getElementById("something")
    if(del.style.visibility==="hidden")
    del.style.visibility="visible";
    else {
        del.style.visibility="hidden";
    }
    console.log("whats the error")
}