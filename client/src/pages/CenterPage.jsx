import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BookingWidget from "../components/rest/BookingWidget";
import CenterGallery from "../components/rest/CenterGallery";
import AddressLink from "../components/rest/AddressLink";

export default function CenterPage() {
  const {id} = useParams();
  const [center,setCenter] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/centers/${id}`).then(response => {
      setCenter(response.data);
    });
  }, [id]);

  if (!center) return '';

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{center.name}</h1>
      <AddressLink>{center.address}</AddressLink>
      <CenterGallery center={center} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {center.description}
          </div>
          Open Time: {center.openTime}<br />
          Close Time: {center.closeTime}<br />
        </div>
        <div>
          <BookingWidget center={center} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{center.extraInfo}</div>
      </div>
    </div>
  );
}
