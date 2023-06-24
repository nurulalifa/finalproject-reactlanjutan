import React from "react";
import { Box } from "@chakra-ui/react";
import { studentId, studentName } from "../Task";

const Footer = () => {
  return (
    <Box className="test-box footer">
      <p>{studentName}</p>
      <p>{studentId}</p>
    </Box>
  );
};

export default Footer;
