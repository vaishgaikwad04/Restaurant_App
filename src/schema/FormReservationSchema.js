import * as yup from "yup";

const FormReservationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),

  guests: yup
    .number()
    .typeError("Guests must be a number")
    .min(1, "Minimum 1 guest")
    .max(20, "Maximum 20 guests")
    .required("Guests required"),

  date: yup.string().required("Please select a date"),

  time: yup.string().required("Please select a time"),

  requests: yup.string().optional(),
});

export default FormReservationSchema;