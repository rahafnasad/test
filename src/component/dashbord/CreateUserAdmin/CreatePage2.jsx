import React, { useContext, useState } from 'react';
import './createuser.css';
import InputWihoutValidation from '../input/InputWihoutValidation';
import { useNavigate } from 'react-router-dom';
import { logInSchema } from '../Validation/logInSchema';
import Input from '../input/Input';
import '../input/input.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { UserContext } from '../context/userContext';

export default function CreatePage2() {
  const { setIsPAge1Active } = useContext(UserContext);
  const { setUserInPagre1 } = useContext(UserContext);

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    uni_name_ar: '',
    uni_name_eng: '',
    uni_email: '',
    uni_phone: '',
    uni_fax: '',
    uni_address: '',
    uni_url: '',
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  const onSubmit = async (user) => {
    console.log(user);
    // Perform form submission logic here
  };

  const inputs = [
    {
      id: 'uni_name_ar',
      type: 'text',
      name: 'uni_name_ar',
      title: 'اسم الجامعة',
      value: values.uni_name_ar,
    },
    {
      id: 'uni_name_eng',
      type: 'text',
      name: 'uni_name_eng',
      title: 'اسم العضو',
      value: values.uni_name_eng,
    },
    {
      id: 'uni_email',
      type: 'email',
      name: 'uni_email',
      title: 'ايميل الجامعة',
      value: values.uni_email,
    },
    {
      id: 'uni_phone',
      type: 'text',
      name: 'uni_phone',
      title: 'رقم الهاتف',
      value: values.uni_phone,
    },
    {
      id: 'uni_fax',
      type: 'text',
      name: 'uni_fax',
      title: 'رقم الفاكس',
      value: values.uni_fax,
    },
    {
      id: 'uni_address',
      type: 'text',
      name: 'uni_address',
      title: 'عنوان الجامعة',
      value: values.uni_address,
    },
    {
      id: 'uni_url',
      type: 'text',
      name: 'uni_url',
      title: 'URL',
      value: values.uni_url,
    },
  ];

  const renderInput = inputs.map((input, index) => (
    <div className="col-lg-6" key={index}>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        title={input.title}
        value={input.value}
        errors={errors}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched}
      />
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = logInSchema.validateSync(values, { abortEarly: false, context: { skipField: true } });

    setErrors(validationErrors.errors || {});

    if (Object.keys(validationErrors.errors).length === 0) {
      onSubmit(values);
    } else {
      setError(true);
    }
  };

  return (
    <div className="adduser d-flex justify-content-center align-content-center">
      <div className="formCreateUser mt-5 mx-3">
        <form onSubmit={handleSubmit}>
          <p className="userTitel mb-0 me-3">بيانات العضو</p>
          <p className="userDes mt-1 me-3">أدخل البيانات المرغوبة الخاصة بالعضو المسؤول عن الجامعة</p>
          <div className="row">{renderInput}</div>
          <div className="d-flex justify-content-between mt-5">
            <button className="bg-white prev " onClick={() => setIsPAge1Active(true)}>
              <FaArrowRight className="ms-2" />
              السابق
            </button>
            <button
              type="submit"
              id="submit"
              className={`next mt-2 bg-success text-white${error ? ' mb-1' : ' mb-5'}`}
            >
              التالي
              <FaArrowLeft className="me-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
