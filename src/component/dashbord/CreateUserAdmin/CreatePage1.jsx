import React, { useContext, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { UserContext } from '../../../context/userContext';
import { useFormik } from 'formik';
import { logInSchema } from '../Validation/logInSchema';
import Input from '../input/Input';
import './createuser.css'
import '../input/input.css';
import { useTranslation } from 'react-i18next';

export default function CreatePage1() {
  const { setIsPAge1Active } = useContext(UserContext);
  const { setUserInPagre1 } = useContext(UserContext);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const initialValues = {
    username: "",
    password: "",
    user_name_ar: ""
  };

  const onSubmit = async (user) => {
    setIsPAge1Active(false)
    setUserInPagre1(user);
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
      title: t("CREATE_PAGE_1.USERNAME"),
      value: formik.values.username,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: t("CREATE_PAGE_1.PASSWORD"),
      value: formik.values.password,
    },
    {
      id: "user_name_ar",
      type: "text",
      name: "user_name_ar",
      title: t("CREATE_PAGE_1.MEMBER_NAME"),
      value: formik.values.user_name_ar,
    },
  ];

  const renderInput = inputs.map((input, index) => (
    <div key={input.name} className="col-lg-6">
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
    </div>
  ));

  return (
    <div className="adduser  d-flex justify-content-center align-content-center ">
      <div className="formCreateUser  mt-5 mx-3">
        <form onSubmit={formik.handleSubmit}>
          <p className='userTitel mb-0 me-3'>{t("CREATE_PAGE_1.MEMBER_INFO")}</p>
          <p className='userDes mt-1 me-3'>{t("CREATE_PAGE_1.ENTER_MEMBER_DATA")}</p>
          <div className="row">
            {renderInput}
          </div>
          <div className="d-flex justify-content-between mt-5">
            <button className=' bg-white prev ' disabled="false">
              <FaArrowRight className='ms-2' />
              {t("CREATE_PAGE_1.PREVIOUS")}
            </button>

            <button
              type="submit"
              id="submit"
              className={`next  mt-2 bg-mainColor text-white${error ? " mb-1" : " mb-5"}`}
              disabled={!formik.isValid}>
              {t("CREATE_PAGE_1.NEXT")}
              <FaArrowLeft className='me-2' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
