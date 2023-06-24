import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const EditStudent = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    faculty: "Fakultas Ekonomi",
    programStudy: "Ekonomi",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        if (response.ok) {
          const studentData = await response.json();
          setStudent(studentData);
        } else {
          console.log("Failed to fetch student data");
        }
      } catch (error) {
        console.log("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const data = await response.json();

      history("/student");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitted(true);
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div>Loading ...</div>
      </div>
    );
  }

  return (
    <div>
      <Box>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div>
            <FormLabel>Name:</FormLabel>
            <Input
              type="text"
              name="fullname"
              value={student.fullname}
              onChange={handleChange}
              data-testid="name"
            />
          </div>
          <div>
            <FormLabel>Address:</FormLabel>
            <Input
              type="text"
              name="address"
              value={student.address}
              onChange={handleChange}
              data-testid="address"
            />
          </div>
          <div>
            <FormLabel>Phone Number:</FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              value={student.phoneNumber}
              onChange={handleChange}
              data-testid="phoneNumber"
            />
          </div>
          <div>
            <FormLabel>Birth Date:</FormLabel>
            <Input
              type="date"
              name="birthDate"
              value={student.birthDate}
              onChange={handleChange}
              data-testid="date"
            />
          </div>
          <div>
            <FormLabel>Gender:</FormLabel>
            <Select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              data-testid="gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </div>
          <div>
            <FormLabel>Program Study:</FormLabel>
            <Input
              type="text"
              name="programStudy"
              value={student.programStudy}
              onChange={handleChange}
              data-testid="prody"
            />
          </div>
          <div>
            <FormLabel>Profile Picture:</FormLabel>
            <img src={student.profilePicture} alt="Profile Picture" />
          </div>
          <Button type="submit" data-testid="edit-btn">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default EditStudent;
