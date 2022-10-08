import * as yup from "yup";

export const newLinkSchema = yup
  .object({
    name: yup.string().required(),
    url: yup.string().url().required(),
  })
  .required();

export const anonymousLinkSchema = yup
  .object({
    url: yup.string().url().required(),
  })
  .required();
