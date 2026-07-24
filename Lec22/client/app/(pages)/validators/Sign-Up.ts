import * as Yup from "yup"


export const SignUpchema = Yup.object().shape({

    username: Yup.string().required("require"),
    email: Yup.string().email().required("require"),
    password: Yup.string().required("require").min(8,"min8").max(20,"max20")

})