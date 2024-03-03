import ViewData from './ViewData';

export default function Active() {
  const data = [
    { type: "الايميل", name: "email" },
    { type: "رقم الهاتف", name: "phone" },
  ];

  return (
    <ViewData data={data} path="/api/v1/dashboard/users?" state="active" />
  )
}
