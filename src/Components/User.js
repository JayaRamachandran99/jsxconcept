import React from 'react';

function User(props){
    const i = props.id
    const n = props.name 
    const a = props.age
    const h = props.height
    return(
        <div>
            <p>Id : {i} </p>
            <p>Name : {n} </p>
            <p>Age :{a} </p>
            <p>Height  :{h} </p>
        </div>
    )
}

export default User;