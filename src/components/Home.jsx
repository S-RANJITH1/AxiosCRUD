import react, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { API_URL } from "../App";
import AxiosCard from "./Common/AxiosCard";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  // State to store fetched data from the api
  let [axiosData, setAxiosData] = useState([]);

  //Effect hook to fetch the data from the api on component mount
  useEffect(() => {
    getAxios();
  }, []);

  // Function to fetch data from the API
  let getAxios = async () => {
    try {
      let res = await axios.get(API_URL);

      if (res.status === 200) {
        toast.success("Blogs fetched Successfully!");
        setAxiosData(res.data.filter((e) => e.status === false));
      }
    } catch (error) {
      toast.error("Error fetching data from the API");
    }
  };

  return (
    <>
      <TopBar />
      <div className="container">
        <div className="row">
          {/* <div className="col-11 col-md-6 col-lg-3 mx-auto col-sm-8"> */}

          {/* Mapping through axiosData to render AxiosCard for each blog */}
          {axiosData.map((e) => {
            console.log(e);
            //Adding mock address and company data for each blog
            e.address = {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
            };
            e.company = {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: "harness real-time e-markets",
            };

            //Rendering AxiosCard component with blog data
            return (
              <AxiosCard
                name={e.name}
                username={e.username}
                address={e.address}
                image={e.image}
                email={e.email}
                companyName={e.companyName}
                website={e.website}
                key={e.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
