import { useTranslation } from 'react-i18next';
import ViewData from './ViewData';
import { VIEW_DATA_STATES } from '../../../data/constants';

export default function Active() {
  const { t } = useTranslation();

  const data = [
    { type: t("ACTIVE_SUSPENDED.EMAIL"), name: "email" },
    { type: t("ACTIVE_SUSPENDED.PHONE"), name: "phone" },
  ];

  return (
    <ViewData data={data} path="/api/v1/dashboard/users?" state={VIEW_DATA_STATES.ACTIVE} />
  )
}
