import { useTranslation } from 'react-i18next';
import ViewData from './ViewData';

export default function Active() {
  const { t } = useTranslation();

  const data = [
    { type: t("ACTIVE_SUSPENDED.EMAIL"), name: "email" },
    { type: t("ACTIVE_SUSPENDED.PHONE"), name: "phone" },
  ];

  return (
    <ViewData data={data} path="/api/v1/dashboard/users?" state="active" />
  )
}
