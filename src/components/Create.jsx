import React, { useState } from "react";
import TopBar from "./TopBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AxiosCard from "./Common/AxiosCard";

function Create() {
  // State variables to store form data
  let [name, setName] = useState("");
  let [username, setusername] = useState("");
  let [adrress, setAdrress] = useState("");
  let [image, setImage] = useState("");
  let [email, setEmail] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [website, setWebsite] = useState("");

  // React Router hook for navigation
  let navigate = useNavigate();

  // Function to handle blog creation
  let handleCreate = async () => {
    try {
      // Create data object with form values
      let data = {
        name,
        username,
        adrress,
        image,
        email,
        companyName,
        website,
        status: false,
      };

      // Axios POST request to create a new blog
      let res = await axios.post(API_URL, data);

      // Check if the blog was created successfully (status code 201)
      if (res.status === 201) {
        // Display success message
        toast.success("Blog Created Successfully");

        // Navigate to the dashboard after successful creation
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle any errors during the blog creation process
      // You may add more specific error handling here if needed
    }
  };

  return (
    <>
      {/* TopBar component for navigation */}
      <TopBar />

      <div className="mt-4">
        {/* Form for creating a new blog */}
        <Form className="mt-4">
          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setusername(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={(e) => setAdrress(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              onChange={(e) => setImage(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
            <Form.Label className="fw-bold">Website Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Website Name"
              onChange={(e) => setWebsite(e.target.value)}
              className="text-center fw-bold"
            />
          </Form.Group>
          <div className="text-center">
            {/* Button to submit the form and create the blog */}
            <Button
              variant="success"
              className="fw-bold"
              onClick={() => handleCreate()}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <div>
        <hr />
        <h2 className="text-center">Preview</h2>
        <hr />
        {/* Display a preview of the created blog using AxiosCard */}
        <AxiosCard
          name={name}
          username={username}
          adrress={adrress}
          image={image}
          email={email}
          companyName={companyName}
          website={website}
        />
      </div>
    </>
  );
}

export default Create;
