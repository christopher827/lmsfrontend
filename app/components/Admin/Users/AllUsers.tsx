import {useEffect,useState} from "react"
import {DataGrid} from "@mui/x-data-grid"
import {Box,Button} from "@mui/material"
import {AiOutlineDelete, AiOutlineMail} from "react-icons/ai"
import {FiEdit2} from "react-icons/fi"
import { useTheme } from "next-themes"
import toast from "react-hot-toast"
import { useDeleteCourseMutation, useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi"
import Link from "next/link"
import {format} from "timeago.js"
import {styles} from "@/app/styles/style"

type Props={}

const AllUsers=(props:Props)=>{
    const {theme,setTheme}=useTheme()
    const [open,setOpen] = useState(false);
    const [courseId,setCourseId]=useState("")
    const {isLoading,data,refetch} = useGetAllCoursesQuery({})
    const [deleteCourse,{isSuccess,error}]=useDeleteCourseMutation({})

    const columns=[
        {field:"id", headerName:"ID", flex:0.3},
        {field:"name", headerName:"Name", flex:.5},
        {field:"email", headerName:"Email", flex:0.5},
        {field:"role", headerName:"Role", flex:0.5},
        {field:"courses", headerName:"Purchased Courses", flex:0.5},
        {field:"created_at", headerName:"Joined At", flex:0.5},
{
    field:" ",
    headerName:"Delete",
    flex:0.2,
    renderCell:(params:any)=>{
        return(
            <>
            <Button>
  <AiOutlineDelete className="dark:text-white text-black" size={20} />              
            </Button>
            </>
        )

    }
},
{
  field:" ",
  headerName:"Email",
  flex:0.2,
  renderCell:(params:any)=>{
      return(
          <>
          <a href={`mailto:${params.row.email}`}>
<AiOutlineMail className="dark:text-white text-black" size={20} />              
          </a>
          </>
      )

  }
}

    ];
    const rows : any=[]

    {
        data && data.users.forEach((item:any)=>{
            rows.push({
                id:item._id,
                name:item.name,
                email:item.email,
                role:item.role,
                courses:item.courses.length,
                created_at: format(item.created_At)
            })
        })
    }

        useEffect(()=>{
    if (isSuccess) {
        refetch()
        setOpen(false)
        refetch()
        toast.success("Course Deleted Successfully")
    }
    if (error) {
        if ("data" in error) {
            const errorMessage=error as any;
            toast.error(errorMessage.data.message)
        }
    }
},[isSuccess,error]);

const handleDelete = async()=>{
    const id=courseId;
    await deleteCourse(id)
}
    return(
<div className="mt-[120px]">
<Box m="20px">
<Box 
 m="40px 0 0 0"
  height="80vh"
   sx={   {
    "& .MuiDataGrid-root":{
    border:"none",
    outline:"none",
}, 
"& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{
    color:theme === "dark" ? "#fff" : "#000",
},
"& .MuiDataGrid-sortIcon":{
    color:theme === "dark" ? "#fff" : "#000",
},
"& .MuiDataGrid-row":{
    color:theme === "dark" ? "#fff" : "#000",
borderBottom: theme === "dark" ? "1px solid #ffffff30 !important": "1px solid #ccc !important"
},
"& .MuiTablePagination-root":{
    color:theme === "dark" ? "#fff" : "#000",
},
"& .MuiDataGrid-cell":{
    borderBottom:"none !important",
},
"& .name-column-cell":{
    color:theme === "dark" ? "#fff" : "#000",
},
"& .MuiDataGrid-columnHeaders":{
backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
borderBottom:"none",
color:theme === "dark" ? "#fff" : "#000",
},
"& .MuiDataGrid-virtualScroller":{
    backgroundColor: theme === "dark" ? "#1AF2A40" : "#F2F0F0",
    },
    "& .MuiDataGrid-footerContainer":{
        color:theme === "dark" ? "#fff" : "#000",
        borderTop:"none",
        backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
    },
    "& .MuiCheckbox-root":{
        color:theme === "dark" ? `#b7ebde !important` : `#000 !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color:theme === "#fff !important"
            },
}}>
<DataGrid checkboxSelection rows={rows} columns={columns}/>
</Box>
</Box>
</div>
    )
}
export default AllUsers