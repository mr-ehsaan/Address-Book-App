import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Details = ({ singleUser }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="caption table">
      <caption>Address Book App</caption>
      <TableHead>
        <TableRow>
          <TableCell>Street</TableCell>
          <TableCell align="right">City</TableCell>
          <TableCell align="right">State</TableCell>
          <TableCell align="right">PostCode</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Cell</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {singleUser ? (
          <TableRow>
            <TableCell component="th" scope="row">
              {singleUser.location.street.name}
            </TableCell>
            <TableCell align="right">{singleUser.location.city}</TableCell>
            <TableCell align="right">{singleUser.location.state}</TableCell>
            <TableCell align="right">{singleUser.location.postcode}</TableCell>
            <TableCell align="right">{singleUser.phone}</TableCell>
            <TableCell align="right">{singleUser.cell}</TableCell>
          </TableRow>
        ) : (
          ""
        )}
      </TableBody>
    </Table>
  );
};

export default Details;
