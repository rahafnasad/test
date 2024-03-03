import React, { useContext, useState } from 'react'
import Input from '../input/Input';
import { UserContext } from '../context/userContext';
import { useFormik } from 'formik';
import { logInSchema } from '../Validation/logInSchema';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './createuser.css'
import '../input/input.css';

export default function CreatePage1() {
  const { setIsPAge1Active } = useContext(UserContext);
  const { setUserInPagre1 } = useContext(UserContext);
  const [error, setError] = useState(false);

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
    validationSchema: logInSchema,
  });

  const inputs = [
    {
      id: "username",
      type: "text",
      name: "username",
      title: "اسم المستخدم",
      value: formik.values.username,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "كلمة المرور",
      value: formik.values.password,
    },
    {
      id: "user_name_ar",
      type: "text",
      name: "user_name_ar",
      title: "اسم العضو ",
      value: formik.values.user_name_ar,
    },
  ];

  const renderInput = inputs.map((input, index) => (
    <div className="col-lg-6">
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
          <p className='userTitel mb-0 me-3'>بيانات العضو</p>
          <p className='userDes mt-1 me-3'>أدخل البيانات المرغوبة الخاصة بالعضو المسؤول عن الجامعة
          </p>
          <div className="row">
            {renderInput}
          </div>
          <div className="d-flex justify-content-between mt-5">
            <button className=' bg-white prev ' disabled="false">
              <FaArrowRight className='ms-2' />
              السابق
            </button>

            <button
              type="submit"
              id="submit"
              className={`next  mt-2 bg-mainColor text-white${error ? " mb-1" : " mb-5"}`}
              disabled={!formik.isValid}>
              التالي
              <FaArrowLeft className='me-2' />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
