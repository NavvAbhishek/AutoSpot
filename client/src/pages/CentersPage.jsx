import React from "react";
import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import CenterImg from "../components/rest/CenterImg";

const CentersPage = () => {
  const [centers, setCenters] = useState([]);
  useEffect(() => {
    axios.get("/user-centers").then(({ data }) => {
      setCenters(data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-main-color text-white py-2 px-6 rounded-full "
          to={"/explore/account/centers/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new center
        </Link>
      </div>
      <div className="mt-4">
        {centers.length > 0 &&
          centers.map((center) => (
            <Link to={'/explore/account/centers/'+center._id} className="flex cursor-pointer gap-4 bg-main-color-light p-4 rounded-2xl mt-4">
              <div className="flex w-42 h-32 grow shrink-0 overflow-hidden">
               <CenterImg center={center}/>
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl font-semibold"> {center.name}</h2>
                <p className="text-sm mt-2">{center.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}; 

export default CentersPage;
