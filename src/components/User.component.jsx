import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const User = ({ users, search, displayDetails }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Address Book App</caption>
        <TableHead>
          <TableRow>
            <TableCell>Thumbnail</TableCell>
            <TableCell align="right">firstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0
            ? search
              ? users.map((user, index) =>
                  (user.name.first + user.name.last).includes(search) ? (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <img src={user.picture.thumbnail} alt="img" />
                      </TableCell>
                      <TableCell align="right">{user.name.first}</TableCell>
                      <TableCell align="right">{user.name.last}</TableCell>
                      <TableCell align="right">{user.name.username}</TableCell>
                      <TableCell align="right">{user.email}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          size="medium"
                          onClick={(e) => displayDetails(user)}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )
                )
              : users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <img src={user.picture.thumbnail} alt="img" />
                    </TableCell>
                    <TableCell align="right">{user.name.first}</TableCell>
                    <TableCell align="right">{user.name.last}</TableCell>
                    <TableCell align="right">{user.name.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">
                      <button
                        variant="outlined"
                        style={{ padding: "5px 7px" }}
                        size="medium"
                        onClick={(e) => displayDetails(user)}
                      >
                        Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))
            : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default User;
