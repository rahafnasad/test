import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss")
}