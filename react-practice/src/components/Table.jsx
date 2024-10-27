import React from "react";

const Table = () => {
  const students = [
    {
      name: "Alice Johnson",
      class: "10A",
      marks: 85,
      city: "New York",
    },
    {
      name: "Michael Smith",
      class: "10B",
      marks: 78,
      city: "Los Angeles",
    },
    {
      name: "Emma Brown",
      class: "10A",
      marks: 92,
      city: "Chicago",
    },
    {
      name: "Liam Davis",
      class: "10C",
      marks: 88,
      city: "Houston",
    },
    {
      name: "Olivia Wilson",
      class: "10B",
      marks: 95,
      city: "Phoenix",
    },
    {
      name: "Noah Martinez",
      class: "10C",
      marks: 81,
      city: "Philadelphia",
    },
    {
      name: "Ava Taylor",
      class: "10A",
      marks: 89,
      city: "San Antonio",
    },
    {
      name: "James Anderson",
      class: "10B",
      marks: 76,
      city: "San Diego",
    },
  ];

  return (
    <div>
      <h2 className="">Student Table</h2>

      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Marks</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.marks}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
