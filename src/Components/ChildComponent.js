import React from "react";

function ChildComponent(props) {
  // Access the data passed from the parent component through props
  const receivedData = props.data;

  return (
    <React.Fragment>
      <h2>Child Component</h2>
      <p>Data from Parent: {receivedData}</p>
    </React.Fragment>
  );
}

export default ChildComponent;
