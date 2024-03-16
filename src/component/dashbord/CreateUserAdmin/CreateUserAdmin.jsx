import React, { useContext } from 'react'
import { Link, } from 'react-router-dom'
import CreatePage1 from './CreatePage1'
import CreatePage2 from './CreatePage2';
import { IoCloseOutline } from "react-icons/io5";
import { UserContext } from '../../../context/userContext';
import { useTranslation } from 'react-i18next';

export default function CreateUserAdmin() {
  const { t } = useTranslation();
  const {
    isPage1Active,
    setIsPAge1Active,
    setShowAdd,
    editedUniversity,
    setEditedUniversity
  } = useContext(UserContext);

  return (
    <div className="createUser ">
      <div className="contentInUser ">
        <div className="d-flex justify-content-between">
          <p className='ParghrCreate py-2 me-3 '>
            {
              editedUniversity
                ? t("CREATE_USER_ADMIN.EDIT_TITLE")
                : t("CREATE_USER_ADMIN.ADD_TITLE")
            }
          </p>
          <IoCloseOutline className='canceled' onClick={() => { setShowAdd(false); setEditedUniversity(null); setIsPAge1Active(true) }} />
        </div>

        <div className="row form-content bg-white mx-2 ">
          <div className="col-lg-3 mt-5">
            <div className="d-flex userInfo">
              <Link onClick={() => setIsPAge1Active(true)}>
                <div className="d-flex ">
                  <span className={`one ms-2 ${isPage1Active ? "bg-mainColor text-white" : "bg-light text-mainColor"}`}><b>1</b></span>
                  <div>
                    <p className={`userInforma ${isPage1Active ? "text-mainColor" : ""}`}>بيانات المستخدم</p>
                    <p className='userDeta'>user-details-sub</p>
                  </div>
                </div>
              </Link>

            </div>
            <div className="d-flex userInfo">
              <Link onClick={() => setIsPAge1Active(false)}>
                <div className="d-flex mt-4">
                  <span className={`one ms-2 ${!isPage1Active ? "bg-mainColor text-white" : "bg-light text-mainColor"}`}><b>2</b></span>
                  <div>
                    <p className={`userInforma ${!isPage1Active ? "text-mainColor" : ""}`}>بيانات الجامعة</p>
                    <p className='userDeta'>university-details-sub</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 ">
            {isPage1Active ? <CreatePage1 /> : <CreatePage2 />}
          </div>
        </div>
      </div>
    </div>
  )
}
