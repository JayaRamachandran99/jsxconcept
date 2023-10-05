import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const dataToPass = "Hello from Parent Component";

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the data as a prop to the ChildComponent */}
      <ChildComponent data={dataToPass} />
    </div>
  );
}

export default ParentComponent;
