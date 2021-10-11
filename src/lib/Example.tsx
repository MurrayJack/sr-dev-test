import React, { useState } from "react";
import { Form } from "./Form";
import { DataState } from "./data.context";
import { Grid } from "./Grid";

export const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <DataState>
      <menu>
        <button onClick={() => setOpen(true)}>Add New</button>
      </menu>

      <Grid />

      <Form open={open} onClose={() => setOpen(false)} />
    </DataState>
  );
};
