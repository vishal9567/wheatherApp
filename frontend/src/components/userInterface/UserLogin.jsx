import { useFormik } from "formik";
import axios from "axios";
import { USER_API } from "../../utils/config.js";
import { useNavigate } from "react-router-dom";


const initialValues = {
    email:'',
    password:''
}
const validate = (values)=>{
    let errors ={}
    if(!values.email) errors.email = "Required"
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = 'Invalid Email Address'
    if(!values.password) errors.password = "Required"
}
const UserLogin = () =>{
    const navigate = useNavigate()

    const Formik = useFormik({
        initialValues,
        onSubmit: values =>{
            handleFormSubmit(values);
        },
        validate
    })

    const handleFormSubmit= async(values)=>{
        try{
            const response = await axios.post(`${USER_API}/login`,values)
            if(response) navigate('/')
        }
        catch(err){
            if(err.response.status === 404)
                Formik.setFieldError('email',"No such user found")
            if(err.response.status === 401)
                Formik.setFieldError('password',"Incorrect password")
        }
    }

    return(
        <div className="w-96 bg-white/75 mx-auto mt-24 rounded-xl">
            <h3 className="text-center font-bold pt-4">User Login</h3>
            <form onSubmit={Formik.handleSubmit} className="w-full gap-4 p-8">
                <label htmlFor='email' className='inline-block pb-2'>Email</label>
                <input type="text" id='email' name='email' onChange={Formik.handleChange} value={Formik.values.email} onBlur={Formik.handleBlur} className='block w-full rounded-md p-2 mb-3'/>
                {(Formik.errors.email && Formik.touched.email)?<div className='text-red-600 py-1'>{Formik.errors.email}</div>:null}

                <label htmlFor='password' className='inline-block pb-2'>Password</label>
                <input type="password" id='password' name='password' onChange={Formik.handleChange} value={Formik.values.password} onBlur={Formik.handleBlur} className='block w-full rounded-md p-2 mb-3'/>
                {(Formik.errors.password && Formik.touched.password)?<div className='text-red-600 py-1'>{Formik.errors.password}</div>:null}

                <button type='submit' className='p-2 bg-blue-600 rounded-full mt-5 mb-3 w-full text-white font-bold'>Submit</button>
            </form>
        </div>
    )
}

export default UserLogin;