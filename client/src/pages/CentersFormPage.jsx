import React, { useEffect, useState } from "react";
import PhotosUploader from "../PhotosUploader";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";

const CentersFormPage = () => {
  const { id } = useParams();
  // console.log(({id}))
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [extraInfo, setExtrainfo] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/centers/" + id).then((response) => {
      const { data } = response;
      setName(data.name);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setExtrainfo(data.extraInfo);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-xl mt-4">{text}</h2>;
  }

  //const navigate = useNavigate();

  async function saveCenter(ev) {
    ev.preventDefault();
    const centerData = {
      name,
      address,
      addedPhotos,
      description,
      extraInfo,
    };
    if (id) {
      await axios.put("/centers", {
        id,
        ...centerData,
      });
      setRedirect(true);
    } else {
      await axios.post("/centers", {
        centerData,
      });
      setRedirect(true);
    }

    //navigate("/account/centers");
  }

  if (redirect) {
    return <Navigate to={"/account/centers"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={saveCenter}>
        {inputHeader("Service Center Name")}
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="name"
        />

        {inputHeader("Address")}
        <input
          type="text"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          placeholder="address"
        />

        {inputHeader("Photos")}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {inputHeader("Description")}
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        {inputHeader("Extra Info")}
        <textarea
          className="h-20"
          value={extraInfo}
          onChange={(ev) => setExtrainfo(ev.target.value)}
        />
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
};

export default CentersFormPage;
