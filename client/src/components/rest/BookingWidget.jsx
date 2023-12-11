import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "../../UserContext";

export default function BookingWidget({center}) {
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  async function bookThisPlace() {
    const response = await axios.post('/bookings', {
      date,time,name,phone,
      center:center._id,
      price:center.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/explore/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${center.price}
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Date: </label>
            <input type="date"
                   value={date}
                   onChange={ev => setDate(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Time</label>
            <input type="time" value={time}
                   onChange={ev => setTime(ev.target.value)}/>
          </div>
        </div>
        {date && time && (
          <div className="py-3 px-4 border-t">
            <label>Your Name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary mt-4">
        Book
      </button>
    </div>
  );
}