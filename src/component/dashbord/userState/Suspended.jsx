import React from 'react'
import ViewData from './ViewData';
import { useTranslation } from 'react-i18next';

export default function Suspended() {
  const { t } = useTranslation();
  
  const data = [
    { type: t("ACTIVE_SUSPENDED.EMAIL"), name: "email" },
    { type: t("ACTIVE_SUSPENDED.PHONE"), name: "phone" },
  ];

  return (
    <ViewData data={data} path="/api/v1/dashboard/users?active=false" state="suspended" />
  )
}