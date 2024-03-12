import React from 'react'
import ViewData from '../userState/ViewData';
import { useTranslation } from 'react-i18next';
import { VIEW_DATA_STATES } from '../../../data/constants';

export default function ViewReport() {
  const { t } = useTranslation();

  const data = [
    { type: t("VIEW_REPORT.EMAIL"), name: "email" },
    { type: t("VIEW_REPORT.OFFERS_RECEIVED"), name: "offersReceived" },
    { type: t("VIEW_REPORT.OFFERS_SENT"), name: "offersSent" },
  ];
  return (
    <ViewData data={data} path="/api/v1/dashboard/reports?" state={VIEW_DATA_STATES.REPORT} />
  )
}
