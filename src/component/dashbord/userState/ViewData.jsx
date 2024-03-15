import React, { useContext, useEffect, useState } from "react";
import InputWithoutValidation from "../input/InputWithoutValidation";
import { MdEdit } from "react-icons/md";
import CreateUserAdmin from "../CreateUserAdmin/CreateUserAdmin";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import "../input/input.css";
import "./active.css";
import { useTranslation } from "react-i18next";
import { Spinner } from "../../index";
import { FaCheck } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export default function ViewData({ data, path, state }) {
  const [users, setUsers] = useState([]);
  const [allCountry, setAllCountry] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [NumberOfPage, setNumberOfPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { ShowAdd } = useContext(UserContext);
  const { setShowAdd } = useContext(UserContext);
  const { t } = useTranslation();

  const getUser = async (page) => {
    var inputName = document.getElementById("ActiveName").value;
    var inputEmail = document.getElementById("ActiveEmail").value;
    var inputCountry = document.getElementById("countryFilter").value;
    var inputRow = (document.getElementById("selectRowAdmin") !== null) ? document.getElementById("selectRowAdmin").value : 10;

    setCurrentPage(page);
    try {
      const { data } = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL
          }${path}&email=${inputEmail}&length=${inputRow}&page=${page}&name=${inputName}${inputCountry ? `&countryid=${inputCountry}` : ""
          }`,

        withCredentials: true,
      });
      setNumberOfPage(data.pages);
      setUsers(data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const viewAllCountry = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/api/v1/countries`,
      });
      setAllCountry(data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser(currentPage);
    viewAllCountry();
  }, []);

  return (
    <div className="Active w-100 mb-5">
      {ShowAdd && <CreateUserAdmin />}
      {
        <h1>
          {
            state != "report"
              ? t("VIEW_DATA.UNIVERSITIES")
              : t("VIEW_DATA.REPORTS")
          }
        </h1>
      }
      <div className="filter ">
        <h2 className="me-4">{t("VIEW_DATA.CLASSIFICATION")}</h2>
        <div className="row">
          <div className="col-lg-3" onChange={() => getUser(currentPage)}>
            <InputWithoutValidation
              type="text"
              id="ActiveName"
              name="ActiveName"
              title={t("VIEW_DATA.UNIVERSITY_NAME")}
            />
          </div>
          <div className="col-lg-3" onChange={() => getUser(currentPage)}>
            <InputWithoutValidation
              type="text"
              id="ActiveEmail"
              name="ActiveEmail"
              title={t("VIEW_DATA.UNIVERSITY_EMAIL")}
            />
          </div>
          <div className="col-lg-3" onChange={() => getUser(currentPage)}>
            <label htmlFor="countryFilter" className=" w-100 text-start lableWithoutValidation">
              <p className="me-2 text-end mt-3">{t("VIEW_DATA.UNIVERSITY_COUNTRY")}</p>
            </label>
            <select name="country" id="countryFilter" className="inputWhioutValidation px-5 py-2">
              <option value="">
                <p>{t("VIEW_DATA.CHOOSE_COUNTRY")}</p>
              </option>
              {allCountry.length ? (
                allCountry.map((country, index) => (
                  <option key={index} value={country.id}>
                    <p>{country.name_ar}</p>
                  </option>
                ))
              ) : (
                <p>{t("VIEW_DATA.NO_COUNTRIES")}</p>
              )}
            </select>
          </div>
          {state != "report" && (
            <div className="col-lg-3">
              <button
                className="bg-mainColor mt-5 me-1"
                onClick={() => setShowAdd(true)}>
                {t("VIEW_DATA.ADD")}
              </button>
            </div>
          )}
        </div>
      </div>
      {
        isLoading
          ? <div className="spinner-container">
            <Spinner />
            {t("VIEW_DATA.DATA_LOADING")}
          </div>
          : (
            users.length
              ? <>
                <table className="mt-4 ViewDataTable">
                  <thead className="getRowOfActive ">
                    <tr>
                      <th>
                        <p>{t("VIEW_DATA.NAME")}</p>
                      </th>
                      {data.map((data, index) => (
                        <th key={index}>
                          <p>{data.type}</p>
                        </th>
                      ))}
                      <th>
                        <p>{t("VIEW_DATA.COUNTRY")}</p>
                      </th>
                      <th>
                        <p>{t("VIEW_DATA.ACTIONS")}</p>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="GetActiveDate mb-0">
                    {
                      users.map((user, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex">
                              <img src={user.image} alt="logo" className="universityImage" />
                              <p className="me-2">{user.name_ar}</p>
                            </div>
                          </td>
                          {data.map((data, index) => (
                            <td key={index}>
                              <p className="me-2">{user[data.name]}</p>
                            </td>
                          ))}
                          <td>
                            <p className="me-2">{user.City.Country.name_ar}</p>
                          </td>
                          <td className="table-action-cell">
                            <button className="table-action-btn edit">
                              {t("VIEW_DATA.EDIT")}
                              <MdEdit className="table-action-icon" />
                            </button>
                            <button className="table-action-btn activate">
                              {t("VIEW_DATA.ACTIVATE")}
                              <FaCheck className="table-action-icon" />
                            </button>
                            <button className="table-action-btn suspense">
                              {t("VIEW_DATA.SUSPENSE")}
                              <IoIosCloseCircle className="table-action-icon" />
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div className="AdmainPaginationAndRow mt-0 ">
                  <div className="d-flex justify-content-center ">
                    <div className="rowAdmin">
                      <div className="d-flex">
                        <p className="mt-3 mx-2">Rows Per Page</p>
                        <select name="selectRow" id="selectRowAdmin" onChange={() => getUser(currentPage)}>
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                          <option value="25">25</option>
                          <option value="30">30</option>
                        </select>
                      </div>
                    </div>
                    <div className="paginationAdmin ">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination mt-2 ms-3">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              onClick={() => currentPage > 1 && getUser(currentPage - 1)}>
                              Previous
                            </a>
                          </li>
                          {
                            Array.from({ length: NumberOfPage }).map((_, index) => (
                              <li
                                key={index}
                                className="page-item"
                                onClick={() => getUser(index + 1)}
                                value={index + 1}>
                                <a className="page-link" href="#">
                                  {index + 1}
                                </a>
                              </li>
                            ))
                          }
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              onClick={() => currentPage < NumberOfPage && getUser(currentPage + 1)}>
                              Next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </>
              : <h1>{t("VIEW_DATA.NO_DATA")}</h1>
          )
      }
    </div >
  );
}