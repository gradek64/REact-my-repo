import React from 'react'

const DynamicallyloadedComponent = ({ index }: { index: number }) => (
  <div>
    <p>`this is FC ${index} loaded by click `</p>
  </div>
)

export default DynamicallyloadedComponent;
