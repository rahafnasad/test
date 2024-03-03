import React from 'react'
import ViewData from '../userState/ViewData';

export default function ViewReport() {
  const data = [
    { type: "الايميل", name: "email" },
    { type: " العروض المستلمة", name: "offersReceived" },
    { type: "العروض المرسلة", name: "offersSent" },
  ];
  return (
    <ViewData data={data} path="/api/v1/dashboard/reports?" state="report" />
  )
}
