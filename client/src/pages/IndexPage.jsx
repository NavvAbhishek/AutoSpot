import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function IndexPage() {
  const [centers,setCenters] = useState([]);
  useEffect(() => {
    axios.get('/centers').then(response => {
      setCenters(response.data);
    });
  }, []);
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {centers.length > 0 && centers.map(center => (
        <Link to={'/explore/account/center/'+center._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {center.photos?.[0] && (
              <img src={'http://localhost:4000/uploads/'+center.photos?.[0]} className="rounded-2xl object-cover" alt=""/>
            )}
          </div>
          <h2 className="font-bold">{center.address}</h2>
          <h3 className="text-sm text-gray-500">{center.name}</h3>
          <div className="mt-1">
            <span className="font-bold">${center.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
