import {
  Table,
  Paper,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Button,
} from "@mui/material";
import React from "react";
import { Detail } from "./FormInput";

interface IProps {
  name: Detail[];
  handleRemove: (id: number) => void;
}

const BasicTables: React.FC<IProps> = ({ name, handleRemove }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple-test-table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {name.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <Button
                type="submit"
                sx={{ mt: 1 }}
                variant="contained"
                color="error"
                onClick={() => handleRemove(row.id)}>
                delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTables;
