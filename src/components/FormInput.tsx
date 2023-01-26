import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import BasicTable from "./BasicTables";

enum STATUS {
  IDLE = "IDLE",
  SUBMITTED = "SUBMITTED",
  SUBMITTING = "SUBMITTING",
  COMPLETED = "COMPLETED",
}

export type Detail = {
  id: number;
  name: string;
  description: string;
};

const emptyInfo = {
  id: Math.floor(Math.random() * 200),
  name: "",
  description: "",
};

const Form: React.FC = () => {
  const [info, setInfo] = useState<Detail>(emptyInfo);
  const [data, setData] = useState<[] | Detail[]>([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  // derive state
  const errors = getErrors(info);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInfo((currentInfo) => {
      return { ...currentInfo, [e.target.id]: e.target.value };
    });
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(STATUS.SUBMITTING);
    if (info.name && isValid) {
      setData((prev: [] | Detail[]) => {
        const newState = [...prev, info];
        return newState;
      });
      setStatus(STATUS.COMPLETED);
      setInfo({
        id: Math.floor(Math.random() * 200),
        name: "",
        description: "",
      });
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  }

  function handleRemove(id: number) {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  }

  function getErrors(info: Detail) {
    const result: Detail | any = {};
    if (!info.name) result.title = "name is Required";
    if (!info.description) result.description = "description is Required";
    return result;
  }

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          component="form"
          sx={{ m: 4 }}
          onSubmit={handleSubmit}>
          {!isValid && status === STATUS.SUBMITTED && (
            <div role="alert" className="alert alert-danger">
              <p>Please fix the following errors</p>
              <ul>
                {Object.keys(errors).map((key) => (
                  <li key={key}>{errors[key]}</li>
                ))}
              </ul>
            </div>
          )}
          <TextField
            id="name"
            label="name"
            name="name"
            variant="outlined"
            value={info.name}
            onChange={handleChange}
          />

          <TextField
            id="description"
            label="Description"
            name="description"
            multiline
            rows={5}
            variant="outlined"
            sx={{ mt: 2 }}
            value={info.description}
            onChange={handleChange}
          />

          <Button
            type="submit"
            sx={{ mt: 2 }}
            variant="contained"
            disabled={status === STATUS.SUBMITTING}>
            Submit
          </Button>
        </Box>
      </Box>

      <Box sx={{ mx: 8 }}>
        <BasicTable name={data} handleRemove={handleRemove} />
      </Box>
    </Box>
  );
};

export default Form;
