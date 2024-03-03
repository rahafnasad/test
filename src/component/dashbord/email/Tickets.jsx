import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./email.css";
import { IoIosStar } from "react-icons/io";

import { UserContext } from "../context/userContext";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Tickets() {
  const [tickets, setTeckets] = useState([]);
  const { state } = useContext(UserContext);
  const { myStartArray } = useContext(UserContext);

  const getTickets = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/api/v1/tickets`,

      withCredentials: true,
    });
    setTeckets(data.result);
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <>
      <div className="Tickets">
        <div className="TicketsContent mx-0 ">
          {tickets.length ? (
            tickets.map((ticket, index) =>
              (state == "البريد الوارد" && ticket.closed == false) ||
              (state == "الرسائل المغلقة" && ticket.closed == true) ? (
                <div
                  className="ticketInTickets d-flex mx-0 mt-1"
                  key={ticket.index}
                  
                >
                 <Link to={`ticket/${ticket.id}`}>
                 <div className="d-flex justify-content-between w-100">
                    <div className="d-flex">
                      <h5 className="ms-5 me-2">{ticket.from}</h5>
                      <span className="ms-3 me-2">{ticket.subject}</span>

                      <p> {ticket.body.substring(0, 15)} ... </p>
                    </div>
                    <p className="ms-2 time">
                      {moment(ticket.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                    </p>
                  </div></Link>
                </div>
              ) : (
                ""
              )
            )
          ) : (
            <h2>لا يوجد رسائل لعرضها </h2>
          )}
        </div>
      </div>
    </>
  );
}
