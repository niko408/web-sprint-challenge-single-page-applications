import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .min(2, 'Name must be 2 characters long.')
    .required('Name is required')
})

export default formSchema