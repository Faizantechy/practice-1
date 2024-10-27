import React from "react";

import Proptypes from "prop-types";

const Table2 = (props) => {
  return (
    <div>
      <h2>Users Data Table</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                {" "}
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table2.Proptypes = {
  name: Proptypes.string,
  city: Proptypes.string,
  email: Proptypes.string,
  contact: Proptypes.number,
};

export default Table2;
