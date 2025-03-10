import * as yup from 'yup';

export const basicDetailsValidationSchema = yup.object().shape({
  studentName: yup.string().required('Student Name is required'),

  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number'),

  whatsappNumber: yup
    .string()
    .required('WhatsApp Number is required')
    .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit WhatsApp number'),

  examNumber: yup
    .string()
    .required('Exam Number is required')
    .matches(/^[0-9]+$/, 'Exam Number must contain only digits')
    .test(
      'is-number',
      'Exam Number must be a number',
      (value) => !isNaN(value)
    ),

  homeAddress: yup.string().required('Home Address is required'),
});
