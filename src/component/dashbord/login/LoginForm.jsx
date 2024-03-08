import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import Input from "../input/Input";
import { logInSchema } from "../Validation/logInSchema";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: ""
  };

  const onSubmit = async (user) => {

    try {
      await axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/api/v1/auth/signin`,
        data: user,
      });
      navigate("/admin");

      toast(t("LOGIN_FORM.LOGIN_SUCCESSFULLY"), {
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
    catch (error) {
      setError(true);
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: logInSchema(t),
  });

  const inputs = [
    {
      id: "username",
      type: "text",
      name: "username",
      title: t("LOGIN_FORM.USERNAME"),
      value: formik.values.username,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: t("LOGIN_FORM.PASSWORD"),
      value: formik.values.password,
    },
  ];

  const renderInput = inputs.map((input, index) => (
    <Input
      type={input.type}
      id={input.id}
      name={input.name}
      title={input.title}
      value={input.value}
      key={index}
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));

  return (
    <>
      <p className="pt-5 me-5 text-start text-end">{t("LOGIN_FORM.WELCOME_BACK")}</p>
      <h2 className="me-5 text-start mb-2 text-end">{t("LOGIN_FORM.ACCOUNT_LOGIN")}</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderInput}
        <Link to="send-code">
          {" "}
          <p className="text-end me-5 mt-3">{t("LOGIN_FORM.FORGOT_PASSWORD")}</p>
        </Link>
        <button
          type="submit"
          id="submit"
          className={`mt-2 bg-mainColor text-white${error ? " mb-1" : " mb-5"}`}
          disabled={!formik.isValid}>
          {t("LOGIN_FORM.LOGIN")}
        </button>
        {
          error &&
          <p className=" text-end me-5 pe-4 mt-0 w-100 text-danger mb-0 ErrorInForm mb-5">{t("LOGIN_FORM.CHECK_PASSWORD")}</p>
        }
      </form>
    </>
  );
}
