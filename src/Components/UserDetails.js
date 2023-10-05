import React from 'react'
import User from './User'

let usersdata = [
    {id:1,name:"sai",age:24,height:34},
    {id:2,name:"ram",age:32,height:23},
    {id:3,name:"kiran",age:55,height:51}]

function UserDetails(){


return ( 
      usersdata.map((u) => {
          return(
            <>
            <User id={u.id} name={u.name} age={u.age} height={u.height}/>
            </>
         );
        }
)
)
};
export default UserDetails;