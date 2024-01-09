// Code Keypad Component Here
import React from "react";


function Keypad (){
    
    function passwordChange(){
    console.log("Entering password...")

    }
    return (
        <div>
            <input type="password" onChange={passwordChange} />
        </div>
    )
}

export default Keypad;