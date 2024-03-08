import React from 'react'
import './input.css';

export default InputWithoutValidation = ({
  type = "text",
  id = "",
  name,
  title
}) => {
  return (
    <div className='d-flex flex-xl-column  align-items-center'>
      <label htmlFor={id} className=' w-100 text-start lableWithoutValidation'><p className='me-4 text-end mt-3'>{title}</p></label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={title}
        className=' inputWhioutValidation'
      />
    </div>
  )
}
