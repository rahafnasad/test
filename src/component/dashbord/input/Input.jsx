import React from 'react'

export default function Input({
  type = "text",
  id,
  name,
  title,
  value,
  onChange,
  errors,
  onBlur,
  touched
}) {
  return (
    <div className='d-flex flex-xl-column align-items-center'>
      <label htmlFor={id} className=' w-100 text-start'><p className='me-5 text-end mt-3'>{title}</p></label>
      <input
        onBlur={onBlur}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={title}
        className='bg-light'
      />
      {
        touched[name] && errors[name] && (
          <p className=" text-end me-5 pe-4 mt-1 w-100 text-danger mb-0 ErrorInForm">{errors[name]}</p>
        )
      }
    </div>
  );
}