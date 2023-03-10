import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import axios from "axios";

const BankDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const loadData = async () => {
    const res = await axios.get(`http://143.244.128.171:9091/v1/bank/${id}`);
    setData(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(data);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "50px" }}
      direction="column"
    >
      <Card>{data.bank_name}</Card>
      <Card>{data.bank_id}</Card>
    </Grid>
  );
};

export default BankDetails;
