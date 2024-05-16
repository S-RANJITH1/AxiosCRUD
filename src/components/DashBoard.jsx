import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { API_URL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


function dashboard() {
  let navigate = useNavigate();

  let [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    getAxios;
  }, []);

  let getAxios = async () => {
    try {
      let res = await axios.get(API_URL);

      if (res.status === 200) {
        setAxiosData(res.data);
      }
    } catch (error) {
      toast.erroer("Error fetching data from the API");
    }
  };

  // Function to toggle the status of a blog
  let toggleBlog = async (e) => {
    try {
      e.status = !e.status;

      let res = await axios.put(`${API_URL}/${e.id}`, e);

      if (res.status === 200) {
        toast.success("Blog Status Changed!");
        getAxios();
      }
    } catch (error) {
      toast.error("Error toggling blog staus");
    }
  };

  // Function to handle blog deletion

  let handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      // console.log(res);

      if (res.status === 200) {
        toast.success("Blog Deleted Successfully!");
        getAxios();
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <TopBar />
      <div>
        <Table responsive bordered striped hover className="overflow-auto mt-4">
          <thead>
            <tr style={{ color: "red" }}>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                #
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Name
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                User Name
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Address
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Image
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Email
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Company Name
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Website Name
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Status
              </th>
              <th
                className="text-center fw-bold"
                style={{
                  backgroundColor: "aliceblue",
                  color: "red",
                  padding: "1em",
                  fontStyle: "italic",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {axiosData.map((e, i) => {
              console.log(e);
              e.address = {
                street: "Kulas Light",
                suite: "apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
              };
              e.company = {
                name: "Roamguera-Crona",
                catchPharse: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
              };

              return (
                <tr key={i}>
                  <td className="text-center">
                    <b>{i + 1}</b>
                  </td>
                  <td className="text-center">
                    <i>
                      <b>{e.name}</b>
                    </i>
                  </td>
                  <td className="text-center">
                    <i>
                      <b>{e.username}</b>
                    </i>
                  </td>
                  <div
                    style={{
                      width: "300px",
                      overflow: "hidden",
                      whitespace: "wrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <td className="d-flex justify-content-center">
                      <i className="text-center">
                        <b>{` ${e.address}`}</b>
                      </i>
                    </td>
                  </div>
                  <td className="text-center">
                    <img
                      srec={e.image}
                      alt={e.name}
                      style={{ width: "12em", height: "8em" }}
                      className="img-fluid img rounded=4"
                      title={e.name}
                    />
                  </td>
                  <td className="text-center">
                    <i>
                      <b>{e.email}</b>
                    </i>
                  </td>
                  <td className="text-center">
                    <i>
                      <b>{e.companyName}</b>
                    </i>
                  </td>
                  <td className="text-center">
                    <i>
                      <b>{e.website}</b>
                    </i>
                  </td>
                  <td className="text-center">
                    <label className="switch">
                      <input
                        type="checkbox"
                        defaultChecked={e.status}
                        onChange={() => toggleBlog(e)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td className="text-center">
                    {/* Edit and Delete buttons */}
                    <Button
                      variant="info"
                      className="mt-2"
                      onClick={() => navigate(`/edit/${e.id}`)}
                    >
                      <b>Edit</b>
                    </Button>
                    <br className="d-md-none" />
                    <Button
                      variant="danger"
                      className="mt-2 mx-2"
                      onClick={() => handleDelete(e.id)}
                    >
                      <b>Delete</b>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default dashboard;
