import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const AddData = () => {
  const navigate = useNavigate();

  const initialState = {
    bank_id: "",
    bank_name: "",
    bank_name_ar: "",
  };

  const [data, setData] = useState(initialState);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { bank_id, bank_name, bank_name_ar } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://143.244.128.171:9091/v1/bank/`, data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "50px" }}
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <AddCircleOutlineIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Add Bank
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Bank Id"
                  name="bank_id"
                  value={bank_id}
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => onChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="bank_name"
                  value={bank_name}
                  label="Bank Name"
                  onChange={(e) => onChange(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="bank_name_ar"
                  value={bank_name_ar}
                  label="Bank Name AR"
                  autoComplete="current-password"
                  onChange={(e) => onChange(e)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>

        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default AddData;
