import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { UserContext } from "../context/userContext";
import { BsArrowReturnLeft } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

export default function Ticket() {
  const id = useParams("id").id;
  const [ticket, setTecket] = useState([]);
  const [replay, setReplay] = useState(false);
  const { state } = useContext(UserContext);

  const getTicket = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/api/v1/tickets/${id}`,
      withCredentials: true,
    });
    console.log(data.result);
    setTecket(data.result);
  };

  const closedTicket = async () => {
    const data = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/api/v1/tickets/${id}/close`,
      withCredentials: true,
    });
    console.log(data);
    toast("تم غلق الرسالة بنجاح", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const getReplay = async () => {
    var body = document.getElementById("Replay").value;
    const data = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/api/v1/tickets/${id}`,
      data: { body: body },
      withCredentials: true,
    });
    console.log(data);
    toast("تم ارسال ردك بنجاح", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <div className="ticket">
      {ticket
        ? ticket.map((tickett, index) => (
          <div className="ticketContent" key={index}>
            {index == 0 ? <h2 className="mt-2">{tickett.subject}</h2> : ""}
            <div className="d-flex mt-4">
              <FaUser className="userInTecket" />
              <span className="me-2 mt-2"> {tickett.from}</span>
            </div>
            <p className="me-5 mt-2">{tickett.body}</p>
          </div>
        ))
        : ""}
      {
        state == "البريد الوارد" ? <div className="replayTicket  d-flex justify-content-center mt-5  flex-column align-content-center">
          {!replay ? (
            <div >
              <button
                className="bg-secondary text-white border-0 mt-3  px-5 py-2 rounded-1 replayButton"
                onClick={() => {
                  setReplay(true);
                }}>
                رد
                <BsArrowReturnLeft />
              </button>
              <button
                className="bg-secondary text-white border-0 mt-3 me-2 px-3 py-2 rounded-1 closedButton"
                onClick={closedTicket}>
                غلق الرسالة
                <BsArrowReturnLeft />
              </button>
            </div>
          ) : (
            <div className="replayTic w-100">
              <input
                type="text"
                name="Replay"
                id="Replay"
                className="w-100 py-5"
              />
              <button
                className="bg-mainColor text-white border-0 mt-3 px-5 py-2 rounded-1"
                onClick={() => {
                  setReplay(false);
                  getReplay();
                }}>
                ارسال
                <BsArrowReturnLeft />
              </button>
            </div>
          )}
        </div> : ""
      }
    </div>
  );
}
