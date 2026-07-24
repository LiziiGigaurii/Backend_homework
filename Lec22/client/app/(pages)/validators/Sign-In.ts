import * as Yup from "yup"


export const SignInSchema = Yup.object().shape({

    email: Yup.string().email().required("require"),
    password: Yup.string().required("require").min(8,"min8").max(20,"max20")

})