import {styles} from "@/app/styles/style"
import { style } from "@mui/system"
import React, {FC,useEffect,useRef,useState} from "react"
import {toast} from "react-hot-toast"
import {VscWorkspaceTrusted} from "react-icons/vsc"
import {useSelector} from "react-redux"
type Props={
    setRoute:(route:string)=>void;
};
type VerifyNumber={
    "0":string;
    "1":string;
    "2":string;
    "3":string;
}

const Verification: FC <Props> =({setRoute})=>{
const {token} =useSelector((state:any)=>state.auth)
const [activation, {isSuccess,error}]=UserActivationMutation()
const [invalidError,setInvalidError]=useState<boolean>(false)

useEffect(()=>{
    if (isSuccess) {
        toast.success("Account activated sucessfully")
        setRoute("Login")
    }
if (error) {
    if ("data" in error) {
        const errorData =error as any;
        toast.error(errorData.data.message)
    }
    else{
        console.log("An error occured", error)
    }
}
},[isSuccess,error])

const inputRefs= [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
]
const [verifyNumber,setVerifyNumber]=useState<VerifyNumber>({
    0 :"",
    1:"",
    2:"",
    3:""
});

const verificationHandler=async()=>{
    const verifyNumber=Object.values(verifyNumber).join("");
    if (verifyNumber.length !==4) {
        setInvalidError(true);
        return
    }
    await activation({

    })
}

const handleInputChange=(index:number,value:string)=>{
    setInvalidError(false)
    const newVerifyNumber={...verifyNumber, [index] : value}
    setVerifyNumber(newVerifyNumber)
    if (value = "" && index > 0) {
 inputRefs(index-1).current?.focus()       
    }else (value.length ===1 && index <3){
        inputRefs(index+1).current?.focus()       

    }
}
    return(
        <div>
<h1 className={`${styles.title}`}>Verify Your Account </h1><br/>
<div className="w-full flex items-center justify-center mt2">
<div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
<VscWorkspaceTrusted size={40}/>
</div>
</div>
<br/>
<br/>
<div className="m-auto flex items-center justify-around">
{
    Object.keys(verifyNumber).map((key,index)=>(
        <input key={key} ref={inputRefs[index]} className={`w-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white `} placeholder=" " maxLength={1} value={verifyNumber[key as keyof VerifyNumber]} onChange={(e)=>handleInputChange(index,e.target.value)} />
    ))
}
</div>
<br/>
<br/>
<div className="w-full flex justify-center">
<button className={`${styles.button}`} onClick={verificationHandler}>Verify OTP</button>
</div>
<br/>
<h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
Go back to sign in? {""}
<span className="text-[#2190ff] pl-1 cursor-pointer" onClick={()=>setRoute("Login")}>
Sign in
</span>
</h5>
        </div>
    )
}
export default Verification