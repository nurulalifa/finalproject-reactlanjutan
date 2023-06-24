import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Add = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("Fakultas Ekonomi");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      const data = await response.json();

      navigate("/student");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <Box>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <FormControl>
            <div>
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                data-testid="name"
              />
            </div>
            <div>
              <FormLabel>Profile Picture:</FormLabel>
              <Input
                type="text"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                data-testid="profilePicture"
              />
            </div>
            <div>
              <FormLabel>Address:</FormLabel>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                data-testid="address"
              />
            </div>
            <div>
              <FormLabel>Phone Number:</FormLabel>
              <Input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                data-testid="phoneNumber"
              />
            </div>
            <div>
              <FormLabel>Birth Date:</FormLabel>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                data-testid="date"
              />
            </div>
            <div>
              <FormLabel>Gender:</FormLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                data-testid="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
            <div>
              <FormLabel>Faculty:</FormLabel>
              <Select
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                data-testid="faculty"
              >
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </Select>
            </div>
            <div>
              <FormLabel>Program Study:</FormLabel>
              <Input
                type="text"
                value={programStudy}
                onChange={(e) => setProgramStudy(e.target.value)}
                data-testid="prody"
              />
            </div>
            <Button type="submit" data-testid="add-btn">
              Add Student
            </Button>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default Add;
