import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import "./email.css";
import { formatDate } from "~/utils/formatDate";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const { state } = useContext(UserContext);

  const getTickets = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/api/v1/tickets`,

      withCredentials: true,
    });
    setTickets(data.result);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <div className="Tickets">
        <div className="TicketsContent mx-0 ">
          {tickets.length ? (
            tickets.map((ticket) =>
              (state == "البريد الوارد" && ticket.closed == false) ||
                (state == "الرسائل المغلقة" && ticket.closed == true) ? (
                <div className="ticketInTickets d-flex mx-0 mt-1" key={ticket.index}>
                  <Link to={`ticket/${ticket.id}`}>
                    <div className="d-flex justify-content-between w-100">
                      <div className="d-flex">
                        <h5 className="ms-5 me-2">{ticket.from}</h5>
                        <span className="ms-3 me-2">{ticket.subject}</span>

                        <p> {ticket.body.substring(0, 15)} ... </p>
                      </div>
                      <p className="ms-2 time">
                        {formatDate(ticket.createdAt)}
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
