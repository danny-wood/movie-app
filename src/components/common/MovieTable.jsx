import React, { useState } from "react";
import MaterialTable from "material-table";

const MovieTable = () => {
  const [state, setState] = useState({
    columns: [
      { title: "Title", field: "name" },
      { title: "Released", field: "released", type: "numeric" },
      { title: "Genre", field: "genre", lookup: { 1: "Action", 2: "Horror" } }
    ],
    data: [
      { name: "Movie 1", released: 1987, genre: 1 },
      { name: "Movie 2", released: 2020, genre: 2 }
    ]
  });

  return (
    <MaterialTable
      title="Movies"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
};

export default MovieTable;
