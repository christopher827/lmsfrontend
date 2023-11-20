import { useEffect, useState } from "react";
import {DataGrid,GridToolbar} from "@mui/x-data-grid"
import {Box} from "@mui/material";
import {useTheme} from "next-themes"
import {useGetAllCoursesQuery} from "@/redux/features/courses/coursesApi"
import Loader from "../../Loader/Loader"
import {format} from "timeago.js"
import {useGetAllOrdersQuery} from "@/redux/features/orders/ordersApi"
import {useGetAllUsersQuery} from "@/redux/features/user/userApi"
import {AiOutlineMail} from "react-icons/ai"

type Props={
    isDashboard?:boolean
}

const AllInvoices=(props:Props)=>{
    const {theme,setTheme} =useTheme();
    const {isLoading,data}=useGetAllOrdersQuery({})
    const {data:usersData}=useGetAllUsersQuery({})
    const {data:coursesData}=useGetAllCoursesQuery({})
    const {orderData,setOrderData}=useState<any>([]);

    useEffect(()=>{
if (data) {
    const temp=data.orders.map((item:any)=>{
const user = usersData?.users.find(
(user:any) => user.id === item.userId
)
const course -coursesData?.courses.find(
    (course: any)=>course._id === item.courseId
);
return{
    ...item,
    userName: user?.name,
    userEmail:user?.email,
    title:course?.name,
    price:"$" + course?.price
}
    })
    setOrderData(temp)
}
    },[data,usersData,coursesData])

    return(
        <div>
            All
        </div>
    )
}
export default AllInvoices