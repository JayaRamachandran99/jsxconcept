import React from "react";

function ChildProp(props) {
  console.dir(props);

  return (
    <div>
      <h1> Hi you arae in Child Props Concept</h1>
      <h2>Hi I came from prop. children </h2>
      <p> Name : {props.name}</p>
      <h4>Props : {props.children}</h4>
    </div>
  );
}

export default ChildProp;
