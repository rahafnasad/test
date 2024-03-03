import * as yup from "yup";
export const logInSchema = yup.object({
  username: yup.string().required("اسم المستخدم مطلوب ").min(4, "يجب أن يكون على الأقل 4 رموز"),
  password: yup.string().required("كلمة المرور مطلوبة").min(6, "يجب أن يكون على الأقل 6 رموز"),
})