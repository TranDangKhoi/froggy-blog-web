import * as yup from "yup";
export const authenticationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(6, "Full name must be at least 6 characters long")
    .max(160, "Full name must be at most 160 characters long"),
  email: yup
    .string()
    .required("E-mail address is required")
    .email("Your e-mail address is invalid, please try another one"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(160, "Password must be at most 160 characters long"),
  rePassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Password and confirm password is mismatched"),
  captcha: yup.string(),
});

export const registerSchema = authenticationSchema.pick(["email", "password", "rePassword", "fullName", "captcha"]);
export const loginSchema = authenticationSchema.pick(["email", "password"]);

export type TLoginSchema = yup.InferType<typeof loginSchema>;
export type TRegisterSchema = yup.InferType<typeof registerSchema>;
