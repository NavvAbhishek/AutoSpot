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
  const [openTime, setOpenTime] = useState();
  const [closeTime, setCloseTime] = useState();
  const [price, setPrice] = useState();
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
      setOpenTime(data.openTime)
      setCloseTime(data.closeTime)
      setPrice(data.price)
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
      openTime,
      closeTime,
      price
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
    return <Navigate to={"/explore/account/centers"} />;
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
        <div className="grid gap-2 grid-cols-3 ">
          <div>
            <h3 className="mt-2 -mb-1">Open Time</h3>
            <input
              type="text"
              value={openTime}
              onChange={(ev) => setOpenTime(ev.target.value)}
              placeholder="8"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Close Time</h3>
            <input
              type="text"
              value={closeTime}
              onChange={(ev) => setCloseTime(ev.target.value)}
              placeholder="20"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price</h3>
            <input
              type="text"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
              placeholder="20"
            />
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
};

export default CentersFormPage;
 