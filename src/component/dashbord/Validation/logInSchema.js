import * as yup from "yup";

export const logInSchema = (t) => {
  return yup.object({
    username: yup.string().required(t("REQUIRED.USERNAME")).min(4, t("VALIDATION.USERNAME")),
    password: yup.string().required(t("REQUIRED.PASSWORD")).min(6, t("VALIDATION.PASSWORD")),
  })
}