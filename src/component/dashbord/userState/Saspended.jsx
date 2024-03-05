import React from 'react'
import ViewData from './ViewData';

export default function Saspended() {
  const data = [
    { type: t("ACTIVE_SUSPENDED.EMAIL"), name: "email" },
    { type: t("ACTIVE_SUSPENDED.PHONE"), name: "phone" },
  ];
  
  return (
    <ViewData data={data} path="/api/v1/dashboard/users?active=false" state="saspended" />
  )
}
