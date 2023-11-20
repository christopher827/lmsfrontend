"use client"
import {useState} from "react"
import {useFormik} from "formik"
import * as Yup from "yup"
import {AiOutlineEye,AiOutlineEyeInvisible,AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { styles } from "@/app/styles/style"
import { error } from "console"

type Props={
    setRoute:(route : string) => void;
}
const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter your email"),
    password:Yup.string().required("Please enter your password!").min(6)
})
const SignUp =(props:Props)=>{
    const [show,setShow]=useState(false)
    const formik=useFormik({
        initialValues: {email : "", password:""},
        validationSchema: schema,
        onSubmit:async({email,password})=>{
setRoute("Verification")        }
    })
    const {errors,touched,values,handleChange,handleSubmit}=formik
    return(
    <div className="w-full">
<h1 className={`${styles.title}`}></h1>
<form onSubmit={handleSubmit}>
<label className={`${styles.label}`} htmlFor="email">
Enter your Email
</label>
<input type="email" name="" value={values.email} onChange={handleChange} id="email" className={ `${errors.email && touched.email && "border-red-500"} ${styles.input}`}/>
{errors.email && touched.email &&(
    <span className="text-red-500 pt2 block">{errors.email}</span>
)}
<div className="w-full my-5 relative mb-1">
<label className={`${styles.label}`} htmlFor="email">
Enter your password
</label>
<input type={!show ? "password" :"text"} name="password" value={values.password} onChange={handleChange} placeholder="password" className={ `${errors.email && touched.email && "border-red-500"} ${styles.input}`}/>
{!show ? (
    <AiOutlineEyeInvisible  className="absolute bottom-3 right-2 z-1 cursor-pointer" size={20} onClick={()=>setShow(true)}/>
):(
    <AiOutlineEye className="absolute bottom-3 right-2 z-1 cursor-pointer" size={20} onClick={()=>setShow(true)}/>
)}
{errors.password && touched.password && (
    <span className="text-red-500 pt2 block">{errors.password}</span>
    )}
</div>
<div className="w-full mt-5">
<input type="submit" value="Login" className={`${styles.button} `}/>
</div>
<br/>
<h5 className="text-centerpt-4 font-Poppins text-[14px] text-black dark:text-white">Or join with</h5>
<div className="flex items-center justify-center my-3">
<FcGoogle size={30} className="cursor-pointer mr-2"/>
<AiFillGithub size={30} className="cursor-pointer ml-2"/>
</div>
<h5 className="text-center pt-4 font-Poppins text-[14px]">
Not have an acount {""}
<span className="text-[#2190ff pl-1 cursor-pointer]">
Sign Up
</span>
</h5>

</form>
<br/>
    </div>
    )
}
export default SignUp;