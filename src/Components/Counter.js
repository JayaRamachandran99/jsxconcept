// import  React,{ useState } from "react"
// // import {useState} from 'react'
//     function Counter() {
//     let [value,updateCounter] =  useState(0)
//         return(
//             <>
//             <h1>Count Value :  {value}</h1>
//             <button onClick={()=>{
//                 updateCounter(value = value + 1) 
//                 // updateCounter(++value) 
//             }}>Click Me</button>
        
//             </>
//         )
//     }
// export default Counter;


import React from 'react'

class App extends  React.Component {

    state = {
        counter:0
    }
    render() {
        return (
            <>
                <h1>Counter Value : {this.state.counter}</h1>
                <button onClick = {()=> {
                    this.setState({
                        counter: this.state.counter+1
                        })
                        }}>Change</button>
            </>
        )
    }

}

export default App;