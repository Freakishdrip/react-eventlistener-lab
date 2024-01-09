// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){ 
    

    function EyeballsOnME(){
        console.log("Good!")
    }
    function EyeballsAWAYfromME(){
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onBlur={EyeballsAWAYfromME} onFocus={EyeballsOnME}>Eyes on me.</button>
        </div>
    );
};

export default EyesOnMe;