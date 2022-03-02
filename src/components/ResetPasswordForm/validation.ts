import moment from "moment";
import * as yup from "yup";

export const ResetPasswordFormValidationSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string()
    .test('passwords-match', 'Passwords must match', function(value){
      return this.parent.password === value
    })
});
