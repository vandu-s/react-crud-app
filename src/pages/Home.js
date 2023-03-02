import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get("http://143.244.128.171:9091/v1/bank")
      .then((response) => {
        setData(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteDate = async (id) => {
    await axios
      .delete(`http://143.244.128.171:9091/v1/bank/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="center">Bank Details</h1>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "50px" }}
      >
        <Grid item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Bank Id</TableCell>
                  <TableCell align="center">Bank Name</TableCell>
                  <TableCell align="center">Bank Name AR</TableCell>
                  <TableCell align="center">Operations</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.userId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.bank_id}</TableCell>
                    <TableCell align="center">{row.bank_name}</TableCell>
                    <TableCell align="center">{row.bank_name_ar}</TableCell>
                    <TableCell align="center">
                      <Button>
                        <DeleteIcon
                          sx={{
                            color: "red",
                            marginRight: "10px",
                            fontSize: "20px",
                          }}
                          onClick={() => deleteDate(row.bank_id)}
                        />
                      </Button>
                      <Link to={`/update-bank/${row.bank_id}`}>
                        <Button>
                          <EditIcon
                            sx={{
                              color: "green",
                              fontSize: "20px",
                            }}
                          />
                        </Button>
                      </Link>

                      <Link to={`/bank/${row.bank_id}`}>
                        <Button variant="contained">View Details</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
