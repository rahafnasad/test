import React, { useContext, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { logInSchema } from '../Validation/logInSchema';
import { UserContext } from '../../../context/userContext';
import { useTranslation } from 'react-i18next';
import Input from '../input/Input';
import '../input/input.css';
import './createuser.css';

export default function CreatePage2() {
  const { setIsPAge1Active, editedUniversity } = useContext(UserContext);
  const { t } = useTranslation();
  const [error, setError] = useState(false);
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
  const [values, setValues] = useState(editedUniversity ? editedUniversity : initialValues);

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
      id: 'name_ar',
      type: 'text',
      name: 'name_ar',
      title: t("CREATE_PAGE_2.UNIVERSITY_NAME"),
      value: values.name_ar,
    },
    {
      id: 'name_eng',
      type: 'text',
      name: 'name_eng',
      title: t("CREATE_PAGE_2.MEMBER_NAME"),
      value: values.name_eng,
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: t("CREATE_PAGE_2.UNIVERSITY_EMAIL"),
      value: values.email,
    },
    {
      id: 'phone',
      type: 'text',
      name: 'phone',
      title: t("CREATE_PAGE_2.PHONE"),
      value: values.phone,
    },
    {
      id: 'fax',
      type: 'text',
      name: 'fax',
      title: t("CREATE_PAGE_2.FAX"),
      value: values.fax,
    },
    {
      id: 'address',
      type: 'text',
      name: 'address',
      title: t("CREATE_PAGE_2.ADDRESS"),
      value: values.address,
    },
    {
      id: 'url',
      type: 'text',
      name: 'url',
      title: 'URL',
      value: values.url,
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
