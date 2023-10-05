import React from "react";

// var name = "sairam";
// var isLoggedin = false;
// function userName(){
//     if (user.name) {
//         return `user name is :  ${user.name}`
//     }
// }
// const user = {age:20}
// var number = [10,20,30,40,50]

// console.log("number",number.map((number) => {console.log(number*2); return number*5}))
// console.log("number",
// number.map((number,index,originalArray) => {
//     console.log(number,index,originalArray);
// })
// );

var number = [10,20,30,40,50] 
function remove(index){
    console.log(index)
    console.log("before",number)
    number.splice(index,1)
    console.log("after",number)
}
function TestComponent(){
    return(
        <>
        <div>Array : 
        {number.map((num,index,originalArray)=>
         {return <p key={index}>
         {num} 
         {/* <button onClick={()=> console.log(num)}>Remove</button> */}
         {/* <button onClick={console.log(num,"number")}>Remove</button> */}
         {/* <button onClick={remove}>Remove</button> */}
         <button onClick={()=>remove(index)}>Remove</button>

         </p>})}</div>
        </>
    )
}   

export default TestComponent; 