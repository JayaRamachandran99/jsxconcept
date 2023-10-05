import React from 'react' 

function EventHandling(){

        function displayMessage(e){
            // console.log(e.target)
            console.log(e.target    )
        }

    return(
        // <button onClick={(e) => {displayMessage(e)}}>Click Me</button>
        <input type="text" onKeyUp={displayMessage}/>
    )
}




export default EventHandling;   