"use client"
import  {FC,useState} from "react"
import Protected from "../hooks/useProtected"
import Heading from "../utils/Heading"
import Header from "../components/Header"
import { useSelector } from "react-redux"

type Props={}

const page : FC <Props> =(props)=>{
    const [open,setOpen] =useState(false);
    const [activeItem,setActiveItem] =useState(0)
    const [route,setRoute]=useState("Login")
    const {user} = useSelector((state:any)=>state.auth)
    return(
    <div>
    <Protected>
    <Heading title={`${user?.name} profile = Elearning`} description="Elearning is a platform for students to learn and get help from teachers" keywords="Programming, MERN, Redux, Machine Learning"/>
<Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route}/>
    </Protected>
    </div>
    )
}
export default page