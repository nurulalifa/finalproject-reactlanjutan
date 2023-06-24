import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const Student = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");
  // const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/student");
        const data = await response.json();
        setStudents(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching student data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.log("Error deleting student:", error);
    }
  };

  const filteredStudents =
    filter === "All"
      ? students
      : students.filter((student) => student.faculty === filter);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <Box>
      <Navbar />
      <Select data-testid="filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </Select>

      <TableContainer>
        <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Faculty</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredStudents.map((student) => (
            <Tr key={student.id} className="student-data-row">
              <Td>
                <Link to={`/student/${student.id}`}>{student.fullname}</Link>
              </Td>
              <Td>{student.faculty}</Td>
              <Td>
                <Button onClick={() => handleDelete(student.id)} data-testid={`delete-${student.id}`} > Delete </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        </Table>
      </TableContainer>
      </Box>
    </div>
    
  );
};

export default Student;
