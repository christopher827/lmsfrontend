import {FC,useState,useEffect} from "react"
import CourseInformation from "./CourseInformation"
import CourseOptions from "./CourseOptions"
import CourseData from "./CourseData"
import CourseContent from "./CourseContent"
import CoursePreview from "./CoursePreview"
import {useEditCourseMutation, useEditMutation, useGetAllCoursesQuery} from "../../../../redux/features/courses/coursesApi"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

type Props={
    id:string
}
const EditCourse : FC <Props>= ({id}=>{
    const [editCourse,{isSuccess,error}] =useEditCourseMutation
    const {isLoading,data,refetch} =useGetAllCoursesQuery(
        {},
        {refetchOnMountOrArgsChange:true}
    );
    const editCourseData=data && data.courses.find((i:any)=>i._id === id)

    useEffect(()=>{
        if (isSuccess) {
            
        }
    })
})