import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Card = ({ children }) => {
  return (
    <Grid item>
      {" "}
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #D3D3D3",
          margin: "10px",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default Card;
