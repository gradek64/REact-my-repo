import React from "react";

const Table = ({ data }) => (
  <table style={{ display: "table", width: "100%" }}>
    <tbody>
      {data.map(({ firstname, lastname, age }, i) => (
        <tr key={`row${i}`}>
          <th>{firstname}</th>
          <th>{lastname}</th>
          <th>{age}</th>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
