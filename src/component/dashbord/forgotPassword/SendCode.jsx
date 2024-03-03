import React from 'react'
import Input from '../input/Input';

export default function SendCode() {
  const inputs = [
    {
      id: "email",
      type: "email",
      name: "email",
      title: "user email",
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
    // errors={formik.errors}
    // onChange={input.onChange || formik.handleChange}
    // onBlur={formik.handleBlur}
    //touched={formik.touched}
    />
  ));
  return (
    <>
      <p className="pt-5 ms-5 text-start ">Welcome Back</p>
      <h2 className="ms-5 text-start mb-4">Recover the password</h2>
      <form>
        {renderInput}
        <button type="submit" id="submit" className="mt-4 mb-5 bg-mainColor text-white">
          Submit
        </button>
      </form>
    </>
  )
}
