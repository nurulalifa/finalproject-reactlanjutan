import { Box, Button } from "@chakra-ui/react";
import React from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      
      <Box textAlign="center">
        <br/>
        <br/>
        <br/>
        <br/>
      <h1>Home</h1>
        <br/>
        <br/>
      <Button>
        <Link to="/student" data-testid="student-btn">
          View Students
        </Link>
      </Button>
        <br/>
        <br/>
        <br/>
        <br/>
      </Box>
    </div>
  );
};

export default Home;
