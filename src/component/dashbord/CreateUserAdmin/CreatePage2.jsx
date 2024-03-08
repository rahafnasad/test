import React, { useContext, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { logInSchema } from '../Validation/logInSchema';
import { UserContext } from '../../../context/userContext';
import { useTranslation } from 'react-i18next';
import Input from '../input/Input';
import '../input/input.css';
import './createuser.css';

export default function CreatePage2() {
  const { setIsPAge1Active } = useContext(UserContext);
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const initialValues = {
    uni_name_ar: '',
    uni_name_eng: '',
    uni_email: '',
    uni_phone: '',
    uni_fax: '',
    uni_address: '',
    uni_url: '',
  };

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
      title: t("CREATE_PAGE_2.UNIVERSITY_NAME"),
      value: values.uni_name_ar,
    },
    {
      id: 'uni_name_eng',
      type: 'text',
      name: 'uni_name_eng',
      title: t("CREATE_PAGE_2.MEMBER_NAME"),
      value: values.uni_name_eng,
    },
    {
      id: 'uni_email',
      type: 'email',
      name: 'uni_email',
      title: t("CREATE_PAGE_2.UNIVERSITY_EMAIL"),
      value: values.uni_email,
    },
    {
      id: 'uni_phone',
      type: 'text',
      name: 'uni_phone',
      title: t("CREATE_PAGE_2.PHONE"),
      value: values.uni_phone,
    },
    {
      id: 'uni_fax',
      type: 'text',
      name: 'uni_fax',
      title: t("CREATE_PAGE_2.FAX"),
      value: values.uni_fax,
    },
    {
      id: 'uni_address',
      type: 'text',
      name: 'uni_address',
      title: t("CREATE_PAGE_2.ADDRESS"),
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
          <p className="userTitel mb-0 me-3">{t("CREATE_PAGE_2.MEMBER_INFO")}</p>
          <p className="userDes mt-1 me-3">{t("CREATE_PAGE_2.ENTER_MEMBER_DATA")}</p>
          <div className="row">{renderInput}</div>
          <div className="d-flex justify-content-between mt-5">
            <button className="bg-white prev " onClick={() => setIsPAge1Active(true)}>
              <FaArrowRight className="ms-2" />
              {t("CREATE_PAGE_2.PREVIOUS")}
            </button>
            <button
              type="submit"
              id="submit"
              className={`next mt-2 bg-success text-white${error ? ' mb-1' : ' mb-5'}`}>
              {t("CREATE_PAGE_2.NEXT")}
              <FaArrowLeft className="me-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
